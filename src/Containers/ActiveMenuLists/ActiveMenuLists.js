import { Link, withRouter } from "react-router-dom"

const ActiveMenuLists = () => {
  return (
    <div className="MenuACTIVE__body">
      <div className="MenuACTIVE__language">

        <div className="Languages">
          <Link to="#" style={{ textDecoration: "none" }}>
            <span> Հայ</span>
          </Link>
        </div>
        <div className="Languages">
          <Link to="#" style={{ textDecoration: "none" }}>
            <span> Рус</span>
          </Link>
        </div>
        <div className="Languages">
          <Link to="#" style={{ textDecoration: "none" }}>
            <span> Eng</span>
          </Link>
        </div>
      </div>
      {/* ============================== Tel : ----- ============================= */}
      <div className="MenuACTIVE__tel">
        <div>
          <span className="MenuACTIVE__small contactACtive">
            010, 011, 055, 099
          </span>
        </div>
        <div>
          <span className="MenuACTIVE__big ">
            32 55 55
          </span>
        </div>
      </div>
      {/* ============================== Viber : ----- ============================= */}
      <div className="MenuACTIVE__viber">
        <span className="MenuACTIVE__viberTitle">
          viber: +374 91 32 55 55
        </span>
      </div>
      {/* ============================== Location : ----- ============================= */}
      <div className="MenuACTIVE__location">
        <div style={{ display: "flex" }}>
          <div className="locationIcon"></div>
          <span style={{ color: "white" }}> Yerevan </span>
        </div>

      </div>
      {/* ============================== Factory : ----- ============================= */}
      <Link to="/factoryInfo" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Ընկերությունը
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Karas AMN : ----- ============================= */}
      <Link to="#" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Կարաս ԱՄՆ
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Restaurants : ----- ============================= */}
      <Link to="/Restaurants" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Ռեստորաններ
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Araqum : ----- ============================= */}
      <Link to="/Araqum" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Առաքում
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Work : ----- ============================= */}

      <Link to="/Work" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Աշխատանք
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Kap : ----- ============================= */}
      <Link to="/Kap" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Կապ
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Paymanner : ----- ============================= */}

      <Link to="/Paymanner" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Պայմաններ
            </span>

          </div>
        </div>
      </Link>
      {/* ============================== Gaxtnutyun : ----- ============================= */}
      <Link to="/Gaxtniutyun" style={{ textDecoration: "none" }} className="MenuACTIVE__factory ">
        <div>
          <div >
            <span style={{ fontSize: "16px", color: "white" }}>
              Գաղտնիություն
            </span>

          </div>
        </div>
      </Link>



    </div>
  )
}
export default withRouter(ActiveMenuLists)