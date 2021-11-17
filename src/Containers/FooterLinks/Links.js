import { Link, withRouter } from "react-router-dom"

const Links = () => {
  return (
    <div className="Footer__Links">
      <Link to="/Main" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Գլխավոր էջ
          </span>
        </div>

      </Link>
      <Link to="/factoryInfo" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Ընկերությունը
          </span>
        </div>

      </Link>
      <Link to="/Restaurants" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Ռեստորաններ
          </span>
        </div>

      </Link>
      <Link to="/Araqum" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Առաքում
          </span>
        </div>

      </Link>
      <Link to="/Work" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Աշխատանք
          </span>
        </div>

      </Link>
      <Link to="/Kap" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Կապ
          </span>
        </div>

      </Link>
      <Link to="/Paymanner" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Պայմաններ
          </span>
        </div>

      </Link>
      <Link to="/Gaxtniutyun" style={{ textDecoration: "none" }}>
        <div>
          <span className="Footer__title">
            Գաղտնիություն
          </span>
        </div>

      </Link>
    </div>
  )
}
export default withRouter(Links)