import { withRouter } from "react-router"
import Footer from "../../Footer"
import NavBar from "../../Menu"
import Aside from "../../Aside"
const KarasProduct = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Կարաս Պրոդուկտներ</h1>
      <div className="Product-Body">
        <Aside />
        <div></div>
      </div>
      <Footer />
    </div>

  )
}
export default withRouter(KarasProduct)