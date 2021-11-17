import types from "./types"

export function SearchActiveChoose(data) {
  return {
    type: types.CHOOSE_SEARCH_ABLE,
    payload: data
  }
}
export function MenuActiveChoose(data) {
  return {
    type: types.CHOOSE_MENU_ABLE,
    payload: data
  }
}