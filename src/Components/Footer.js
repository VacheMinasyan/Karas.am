import { withRouter } from "react-router-dom"
import Links from "../Containers/FooterLinks/Links"
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__info">
        <Links />
        <div className="Footer__mail">
          <input style={{ height: "50px", borderRadius: "5px", width: "280px", border: "none", padding: "10px" }} type="text" placeholder="Միացեք մեր փոստային ցուցակին ..." name="" id="" />
          <div className="Footer__send">
            <svg className="send" width="34" height="34" viewBox="0 0 100 100">
              <path fill="black" d="M 87.6 25.849 c -0.003 -0.003 -0.003 -0.007 -0.006 -0.01 c -0.008 -0.008 -0.018 -0.011 -0.026 -0.019 c -1.443 -1.403 -3.408 -2.271 -5.574 -2.271 H 39.709 c -2.162 0 -4.123 0.865 -5.565 2.263 c -0.011 0.011 -0.026 0.015 -0.036 0.026 c -0.004 0.004 -0.005 0.01 -0.009 0.015 c -1.477 1.453 -2.396 3.472 -2.396 5.703 v 26.89 c 0 4.414 3.592 8.006 8.007 8.006 h 42.284 c 4.414 0 8.006 -3.592 8.006 -8.006 v -26.89 C 90 29.322 89.079 27.302 87.6 25.849 z M 81.994 25.539 c 1.237 0 2.387 0.376 3.344 1.018 L 60.852 49.02 L 36.365 26.557 c 0.957 -0.643 2.107 -1.019 3.344 -1.019 H 81.994 z M 88.009 58.446 c 0 3.317 -2.699 6.016 -6.016 6.016 H 39.709 c -3.317 0 -6.016 -2.699 -6.016 -6.016 v -26.89 c 0 -1.361 0.46 -2.614 1.225 -3.624 L 53.524 45 L 41.589 55.949 c -0.405 0.372 -0.432 1.002 -0.06 1.407 c 0.196 0.214 0.465 0.323 0.734 0.323 c 0.24 0 0.481 -0.087 0.673 -0.262 l 12.061 -11.066 l 5.182 4.754 c 0.191 0.174 0.432 0.262 0.673 0.262 s 0.482 -0.087 0.673 -0.262 l 5.182 -4.754 l 12.062 11.066 c 0.191 0.175 0.432 0.262 0.673 0.262 c 0.269 0 0.538 -0.109 0.734 -0.323 c 0.371 -0.404 0.344 -1.034 -0.061 -1.407 L 68.178 45.001 l 18.605 -17.069 c 0.765 1.009 1.225 2.263 1.225 3.624 V 58.446 z" />
              <path fill="black" d="M 24.796 45.996 H 6.573 c -0.55 0 -0.995 -0.446 -0.995 -0.995 c 0 -0.55 0.446 -0.995 0.995 -0.995 h 18.223 c 0.55 0 0.995 0.446 0.995 0.995 C 25.792 45.55 25.346 45.996 24.796 45.996 z" />
              <path fill="black" d="M 24.796 55.95 H 12.151 c -0.55 0 -0.995 -0.445 -0.995 -0.995 s 0.446 -0.995 0.995 -0.995 h 12.645 c 0.55 0 0.995 0.445 0.995 0.995 S 25.346 55.95 24.796 55.95 z" />
              <path fill="black" d="M 24.796 36.041 H 0.995 C 0.446 36.041 0 35.595 0 35.046 c 0 -0.55 0.446 -0.995 0.995 -0.995 h 23.801 c 0.55 0 0.995 0.446 0.995 0.995 C 25.792 35.595 25.346 36.041 24.796 36.041 z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="Footer__bottom">
        <div style={{ paddingTop: "15px" }}>
          <span >Բոլոր իրավունքները պաշտպանված են 2018 Կարաս</span>
        </div>
        <div style={{ display: "flex", marginTop: "20px", "justifyContent": "center" }}>
          <div className="Footer__PlayLogo"></div>
          <div className="Footer__AppLogo"></div>
        </div>
        <div style={{ display: "flex", marginTop: "30px", "justifyContent": "center" }}>

          <div className="Footer__Visa"></div>
          <div className="Footer__Master"></div>
          <div className="Footer__Arca"></div>
          <div className="Footer__American"></div>
          <div className="Footer__Idram"></div>
        </div>
      </div>


    </footer>
  )
}
export default withRouter(Footer)