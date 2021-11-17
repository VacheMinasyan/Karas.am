import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { MenuActiveChoose } from "../../store/Menu/action"

const ActiveMenuHeader = () => {
  const dispatch = useDispatch()
  const MenuPanel = useSelector(({ Menu }) => Menu.MenuCondition)

  const MenuOnClickLisener = () => {
    dispatch(MenuActiveChoose(!MenuPanel))
  }
  return (
    <div className="MenuACTIVE__header">
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <div className="MenuACTIVE__component">
          <div className="MenuACTIVE__lock">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path className="lock__svg" d="M12 8c-1.062 0-2.073.211-3 .587v-3.587c0-1.654 1.346-3 3-3s3 1.346 3 
              3v1h2v-1c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3
               6.239 0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8zm0 10c-1.104 0-2-.896-2-2s.
               896-2 2-2 2 .896 2 2-.896 2-2 2z" /></svg>
          </div>
          <span className="MenuACTIVE__title"> Մուտք</span>
        </div>
      </Link>
      <div>
        <button className="btn btn-danger SearchClose" onClick={() => MenuOnClickLisener()}> X </button>
      </div>
    </div>
  )
}
export default withRouter(ActiveMenuHeader)