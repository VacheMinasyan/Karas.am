import { withRouter } from "react-router-dom"
import ActiveMenuLists from "./ActiveMenuLists/ActiveMenuLists"
import ActiveMenuHeader from "./ActiveMenuLists/ActiveMenuHeader"
import ActiveMenuFooter from "./ActiveMenuLists/ActiveMenuFooter"


const MenuActive = () => {
  return (
    <div className="MenuACTIVE">
      <ActiveMenuHeader />
      <ActiveMenuLists />
      <ActiveMenuFooter />
    </div>
  )
}

export default withRouter(MenuActive)