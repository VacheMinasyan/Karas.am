import NavBar from "../../Components/Menu"
import Footer from "../Footer"
import { Link } from "react-router-dom"

const Work = () => {
  return (
    <div>
      <NavBar />
      <div className="WorkBody">
        <div className="WorkContainer">
          <div className="WorkImage"></div>
          <h1> Միացի՛ր մեր թիմին</h1>
          <h3> 2018-05-19</h3>
          <p> Մենք առաջարկում ենք հետևյալ թափուր հաստիքները՝</p>

          <ol>
            <li>Գանձապահ</li>
            <li>Մենեջեր</li>
            <li>Օպերատոր առաքման բաժնում</li>
            <li>Խոհարար</li>
            <li>Խոհարարի օգնական</li>
            <li>Բարմեն</li>
            <li>Մատուցող</li>
            <li>Մաքրուհի</li>
            <li>Սպասք լվացող</li>
            <li>Առաքիչ</li>
            <li>Հյուրընկալ</li>
          </ol>
          <div>
            <p>
              Հետաքրքրված անձիք կարող են զանգահարել 091 01 08 66, 098 909233, 041 413377 համարներին կամ ուղարկել ինքնակենսագրականը <Link to="#"> hr@karas.am</Link>  հասցեին:
            </p>
          </div>
        </div>

      </div>
      <h1>Hello Work Page</h1>
      <Footer />
    </div>
  )
}

export default Work