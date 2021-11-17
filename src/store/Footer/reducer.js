import types from "./types"

const Menu = {
  objects: []
  // groups: localStorage.groups? JSON.parse(localStorage.groups) : []

}

export const MenuReducer = (state = Menu, option) => {
  switch (option.types) {
    case types.ADD:
      localStorage.groups = JSON.stringify(state.groups)
      return state;
    default:
      break;
  }
}


export default MenuReducer