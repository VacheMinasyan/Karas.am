import types from "./types"

const Menu = {
  // SearchCondition: localStorage.SearchCondition ? JSON.parse(localStorage.SearchCondition) : false,
  SearchCondition: false,
  MenuCondition: false,

}

const MenuReducer = (state = Menu, option) => {
  switch (option.type) {
    case types.CHOOSE_SEARCH_ABLE:
      state.SearchCondition = option.payload
      // localStorage.SearchCondition = JSON.stringify(state.SearchCondition)
      return state;
    case types.CHOOSE_MENU_ABLE:
      state.MenuCondition = option.payload
      return state;
    default:
      return state;
  }
}


export default MenuReducer