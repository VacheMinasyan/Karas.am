import { withRouter } from "react-router"
import NavBar from "./Menu"
import Footer from "./Footer"
import Main from "./Main/Main"
const Body = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />

    </div>
  )
}

export default withRouter(Body)