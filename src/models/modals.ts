/*
 TODO: If can specify function type, change Function to function definition.

  AS-IS:
  selectAgreeCallbackFunction: Function

  TO-BE:
  selectAgreeCallbackFunction: () => void
*/

/* eslint-disable @typescript-eslint/ban-types */
export type ModalContents = {
  title?: string
  message: string
  nextButtonMessage?: string
  cancelButtonMessage?: string
  selectAgreeCallbackFunction?: Function
  selectCencleCallbackFunction?: Function
}
