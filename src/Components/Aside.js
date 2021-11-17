import { withRouter, Link } from "react-router-dom"
import logo from "../image/Main/logo-food.png"
const Aside = () => {
  return (
    <div className="Aside">
      <div className="Aside-buy">
        <div className="Buy-Container"><h3 className=" Aside_FoodTitle ">Զամբյուղ</h3></div>
        <div className="Buy-Container"><h5 className="Aside_buyInfo"> Դուք չունեք ապրանք Ձեր զամբյուղում</h5> </div>
      </div>
      <div className="Aside-menu ">
        <div className="Buy-Container"><h3 className="Aside_FoodTitle">Ուտեստներ</h3></div>
        <div>
          <ul>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items" style={{ borderTop: "none" }}><Link to="/karasproduct" className="Buy_title"> Կարաս Պրոդուկտներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Խորոված</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Տաք ուտեստներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Պիցցա</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Կեմպլեքս Լանչ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Խավարտ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Աղցաններ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Ապուրներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Խաչապուրի,Կարկանդակ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Բանջարեղեն</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title">Արագ սնունդ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Բուսակերներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Նախուտեսնտեր</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Մանկական սնունդ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Սոուսներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title">Աղանդներ</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title"> Ալկոհոլային ըմպելիք</Link> </li>
            </div>
            <div style={{ display: "flex" }}>
              <img src={logo} alt="" width="25px" height="" style={{ marginTop: "10px" }} />
              <li className="Buy-items"><Link className="Buy_title">  Զովացուցիր Ըմպելիք</Link> </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Aside)