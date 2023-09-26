import { REGEX_SPECIAL_CHARACTERS_G } from 'src/constants/regex'
import useSWR, { SWRConfiguration } from 'swr'
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation'
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'
import { FetcherResponse } from 'swr/_internal'
import { PagedListMetaData } from 'ch-api-client-typescript2/lib/models/paged-list-meta-data'

type SWRKeyType<TPayload> = [string, TPayload]

export const nameOf = (f: () => any, returnesFullName = false): string => {
  const fullName = f.toString().replace(/[ |\(\)=>]/g, '')
  if (!returnesFullName) {
    return (
      fullName
        .split('.')
        .find((_, index, arr) => index === arr.length - 1)
        ?.replace(REGEX_SPECIAL_CHARACTERS_G, '') ?? ''
    )
  }

  return fullName
}
export const useGenericSWR = <TResponse, TError, TPayload>(
  key: string,
  api: (payload: TPayload) => Promise<TResponse>,
  payload: TPayload,
  shouldFetch?: boolean,
  config?: SWRConfiguration<TResponse, TError>
) => {
  const { data, error, mutate, isValidating, isLoading } = useSWR<TResponse, TError>(
    () => ((shouldFetch !== undefined ? shouldFetch : true) ? [key, payload] : null),
    ([_, payload]: SWRKeyType<TPayload>): Promise<TResponse> => api(payload),
    config ?? {
      revalidateOnFocus: false
    }
  )

  return {
    data,
    error,
    mutate,
    isValidating,
    isLoading
  }
}

export const useGenericSWRMutation = <TResponse, TError, TPayload>(
  key: string,
  api: (payload: TPayload) => Promise<TResponse>,
  config?: SWRMutationConfiguration<TResponse, TError, any, string>
) => {
  const { data, error, trigger, reset, isMutating } = useSWRMutation<TResponse, TError, any, TPayload>(
    key,
    (_: string, payload: { arg: TPayload }): FetcherResponse<TResponse> => api(payload.arg)
  )

  return { data, error, trigger, reset, isMutating }
}

export const useGenericSWRInfinite = <
  TResponse extends { items?: Array<any> | null; metaData?: PagedListMetaData },
  TError,
  TPayload extends { page?: number }
>(
  key: string,
  api: (option: TPayload) => Promise<TResponse>,
  payload: TPayload | undefined,
  shouldFetch?: boolean,
  config?: SWRInfiniteConfiguration<TResponse, TError>
) => {
  const {
    data: fetched,
    isValidating,
    isLoading,
    error,
    setSize,
    mutate
  } = useSWRInfinite<TResponse, TError>(
    (pageIndex: number, previousPageData: TResponse): SWRKeyType<TPayload> | null => {
      if (shouldFetch !== undefined && shouldFetch === false) {
        return null
      }
      if (!payload) {
        return null
      }
      if (previousPageData && previousPageData.metaData?.isLastPage) {
        // Reached end of list.
        return null
      }
      const page = pageIndex + 1
      const payloadActual = { ...payload, page: page }

      return [key, payloadActual]
    },
    ([_, payload]: [string, TPayload]): Promise<TResponse> => api(payload),
    config ?? {
      revalidateFirstPage: false,
      revalidateOnFocus: false
    }
  )

  let items: Array<any> = []
  fetched &&
    fetched.forEach((x) => {
      if (x.items) {
        items = items.concat(...x.items)
      }
    })

  const data: TResponse | undefined =
    fetched && ({ items, metaData: fetched[fetched.length - 1].metaData } as TResponse)

  return {
    data,
    isValidating,
    isLoading,
    error,
    setSize,
    mutate,
  }
}
