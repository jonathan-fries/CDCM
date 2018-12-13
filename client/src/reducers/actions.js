export const LOADED_ClIENT = 'LOADED_CLIENT';

export function setAppClientState (authState) {
  return {
    type: LOADED_CLIENT,
    authState
  }
}
