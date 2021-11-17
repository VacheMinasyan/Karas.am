import { withRouter, Link } from "react-router-dom";

const SpecialSupport = () => {
    return (
        <div>
            <div className="SupportContainer">
                <div className="Special_support">
                    <Link to="/SpecialSupport" className="Special_support-container">
                        <div className="SupportBest1">

                        </div>
                    </Link>
                    <Link to="/SpecialSupport" className="Special_support-container">
                        <div className="SupportBest2">

                        </div>
                    </Link>
                    <Link to="/Barbecue" className="Recesive Special_support-container">
                        <div className="SupportBest3" >

                        </div>
                    </Link>

                </div>
            </div>

            <button style={{ margin: "auto", display: "block" }}>  Առաջարկներ</button>

            <div style={{ width: "100%", height: "auto", border: "1px solid black" }}>
                <div className="row  g-5 h-100 d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary vache"></div>
                </div>
            </div>

        </div >

    )
}
export default withRouter(SpecialSupport)