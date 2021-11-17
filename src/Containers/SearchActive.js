import { useDispatch, useSelector } from "react-redux"
import { SearchActiveChoose } from "../store/Menu/action"
const SearchActive = () => {
  const dispatch = useDispatch()
  const SearchPanel = useSelector(({ Menu }) => Menu.SearchCondition)

  const SearchOnClickLisener = () => {
    dispatch(SearchActiveChoose(!SearchPanel))
  }
  return (
    <div className="SearchACTIVE">
      <div className="ActiveSearchBlock">
        <div className="Nav-Menu__search active"></div>
        <div>
          <input className="form-control SearchInput " placeholder="Որոնել" type="text" />
        </div>
      </div>

      <div>
        <button className="btn btn-danger SearchClose" onClick={() => SearchOnClickLisener()}> X </button>
      </div>
    </div>
  )
}

export default SearchActive