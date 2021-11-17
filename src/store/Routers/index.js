// import NavBar from "../../Components/Menu";
import Body from "../../Components/Body";
import Login from "../../Components/Bodyincludes/LoginPage";
import FactoryInfo from "../../Components/Bodyincludes/FactoryInfo"
import RestaurantsMap from "../../Components/Bodyincludes/RestaurantsMap"
import Araqum from "../../Components/Bodyincludes/Araqum"
import Work from "../../Components/Bodyincludes/Work"
import Kap from "../../Components/Bodyincludes/Kap"
import Paymanner from "../../Components/Bodyincludes/Paymanner"
import Gaxtniutyun from "../../Components/Bodyincludes/Gaxtniutyun"
import Special from "../../Components/Bodyincludes/Special";
import KarasProduct from "../../Components/Main/BodyOther/KarasProduct";





import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Body />
          </Route>
          <Route path="/Main" exact>
            <Body />
          </Route>
          <Route path="/Login" component={Login} exact>
          </Route>
          <Route path="/factoryInfo" component={FactoryInfo} exact>
          </Route>
          <Route path="/Restaurants" component={RestaurantsMap} exact>
          </Route>
          <Route path="/Araqum" component={Araqum} exact>
          </Route>
          <Route path="/Work" component={Work} exact>
          </Route>
          <Route path="/Kap" component={Kap} exact>
          </Route>
          <Route path="/Paymanner" component={Paymanner} exact>
          </Route>
          <Route path="/Gaxtniutyun" component={Gaxtniutyun} exact>
          </Route>
          <Route path="/SpecialSupport" component={Special} exact>
          </Route>
          <Route path="/karasproduct" component={KarasProduct} exact>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default Routers
