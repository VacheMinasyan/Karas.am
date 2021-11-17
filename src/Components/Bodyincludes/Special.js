import NavBar from "../../Components/Menu"
import Footer from "../Footer"
import Aside from "../Aside"
const Special = () => {
    return (
        <div style={{background:"#F2F2F2"}}>
            <NavBar />
            <div>
                <div>
                    <h1 style={{ textAlign: "center", marginTop: '50px', fontSize: "300%" }}>Հատուկ Առաջարկներ</h1>
                </div>
                <div className="Special_Body">
                    <Aside />
                    <div></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Special;