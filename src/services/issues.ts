import { GitHubIssueRequestModel } from "@cloudhospital/integratedservicesfunctionsapp.client/dist/createGitHubIssue/GitHubIssueRequestModel"

type Payload = Omit<GitHubIssueRequestModel, 'repo' | 'owner' | 'stage'> & {
  external?: boolean
}

const nextauth_url = process.env.NEXTAUTH_URL
export const requestCreateGitHubIssueAsync = async (payload: Payload): Promise<boolean> => {
  const url = typeof window !== 'undefined' ? `/api/issues` : `${nextauth_url}/api/issues`
  return await fetch(url, { method: 'POST', body: JSON.stringify(payload) })
    .then((_) => true)
    .catch((_) => false)
}

export const requestCreateGitHubIssue = async(payload: Payload) => {
  const url = typeof window !== 'undefined' ? `/api/issues` : `${nextauth_url}/api/issues`
  const data = await fetch(url, { method: 'POST', body: JSON.stringify(payload) }).catch((_) => {})
}
