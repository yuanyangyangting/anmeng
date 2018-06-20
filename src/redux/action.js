export const LOADING_STATE = "LOADING_STATE"
export const UPDATE_TOKEN = "UPDATE_TOKEN"

export function loadingState(isLoading) {
  return {
    type: LOADING_STATE,
    isLoading
  }
}
export function updateToken(token) {
  return {
    type: UPDATE_TOKEN,
    token
  }
}