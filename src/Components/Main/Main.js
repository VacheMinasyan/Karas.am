import { useState } from "react"
import { withRouter,Link } from "react-router-dom"
import SpecialSupport from "./BodyOther/SpecialSupport";
const Main = (props) => {

  const [image,setImage] = useState({
    src1: " url(./image/silde1.jpg)",
    src2: " url(./image/slider2.jpg)",
    src3: " url(./image/slider3.jpg)",
    src4: " url(./image/slide4.jpg)",

  })
  const [Active, setActive] = useState("")
  const [count, setCount] = useState(1)

  const handleback = () => {
    if (count === 1) {
      setActive(image.src1)
      setCount(4)
      console.log()
    } else if (count === 2) {
      setActive(image.src2)
      setCount(1)
    }
    else if (count === 3) {
      setActive(image.src3)
      setCount(2)
    } else if (count === 4) {
      setActive(image.src4)
      setCount(3)
    }
  }
  return (
    <div className="Main">
      <div className="Main__slide" style={{ backgroundImage: Active  }}>
        <div className="Main__Strelok">
          <div className="Slide__back" onClick={() => { handleback() }}> </div>
          <div className="Slide__next" onClick={() => { handleback() }}></div>
        </div>
      </div >
      <SpecialSupport/>
    </div>
  )
}

export default withRouter(Main)