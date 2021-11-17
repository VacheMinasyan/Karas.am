import { useDispatch, useSelector } from "react-redux"
import { SearchActiveChoose, MenuActiveChoose } from "../store/Menu/action"
import { Link, withRouter } from "react-router-dom"
import SearchActive from "../Containers/SearchActive"
import MenuActive from "../Containers/MenuActive"

const NavBar = () => {
  const dispatch = useDispatch()
  const SearchOnClickLisener = () => {
    dispatch(SearchActiveChoose(!SearchPanel))
  }
  const MenuOnClickLisener = () => {
    dispatch(MenuActiveChoose(!MenuPanel))
  }
  const SearchPanel = useSelector(({ Menu }) => Menu.SearchCondition)
  const MenuPanel = useSelector(({ Menu }) => Menu.MenuCondition)

  return (
    <div>
      <nav className="Nav-Menu">
        <div className="Nav-Menu__info">
          <div className="Nav-Menu__logo">
            <Link to="/Main">
              <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" >
                <path className="xx" fillRule="evenodd" clipRule="evenodd" fill="#ffffff" d="M0,48h13.235l0.025-0.533c0.202-4.248,2.649-7.922,
                      6.109-11.166 c1.351-1.271,2.673-2.145,3.231-3.818c0.645-1.934-0.411-3.766-2.051-5.221c-0.544-0.482-1.22-0.732-1.565-1.091 
                      c-0.317-0.329-0.512-0.776-0.512-1.265l0,0c0-1.006,0.823-1.829,1.829-1.829H48V0H11.52C5.184,0,0,5.184,0,11.52V48L0,
                      48z M17.283,48c0.745-2.343,2.116-5.041,2.882-5.934c0.748-0.869,1.508-1.729,2.298-2.471c1.969-1.848,3.516-2.955,
                      4.425-5.686 c0.746-2.238,0.475-4.396-0.451-6.313H48v8.884C48,42.816,42.816,48,36.48,48H17.283L17.283,48z M36.926,2.915
                      c1.629,2.01,2.283,4.136,1.534,6.24c-0.534,1.504-1.672,3.198-2.257,4.621c-1.044,
                      2.543,0.24,5.955,1.664,8.099 c-5.914-5.901-3.849-6.987-1.35-12.398C37.429,7.504,37.508,
                      5.301,36.926,2.915L36.926,2.915z M39.809,8.273 c2.659,3.283,0.57,4.374-0.52,7.028c-0.703,1.712,0.194,4.295,1.153,
                      5.739c-1.659-1.655-2.598-3.271-2.558-4.836 C37.954,13.452,40.975,13.053,39.809,8.273z"></path>
              </svg>
            </Link>
          </div>
          <div className="Nav-Menu__Phone">
            <span className="small_phone">
              010 , 011 , 055 , 099
            </span>
            <span className="big_phone">
              32 55 55
            </span>
          </div>
        </div>

        {/* right part menu icons  */}
        {/* ============= */}
        {SearchPanel && <SearchActive />}
        {MenuPanel && <MenuActive />}
        <div className="Nav-Menu__icons">
          <div className="Nav-Menu__LoginAndIcons">
            <div className="Nav-Menu__search " onClick={() => SearchOnClickLisener()}>
            </div>

            <div className="Nav-Menu__loaction">
              <Link to="">
              </Link>
            </div>
            <div className="Nav-Menu__buy">
              <Link to="">
              </Link>
            </div>
            <div className="Nav-Menu__Login">
              <Link to="/Login" className="Nav-Menu__Login__title">
                Մուտք
              </Link>
            </div>

          </div>
          <div className="Nav-Menu__MenuContainer">
            <div className="Nav-Menu__MenuList" onClick={() => { MenuOnClickLisener() }}>
              <Link to="">
              </Link>
            </div>
          </div>


        </div>
      </nav>
    </div>
  )
}
export default withRouter(NavBar)