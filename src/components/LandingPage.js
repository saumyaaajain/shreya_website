import Footer from "./Footer";
import {getContainerStyle, getTextBottomCenterStyle, getTextCenterStyle} from "../utils/LandingPageUtil";
import {Button} from "react-bootstrap";


const styles = {
    display: "flex",
    justifyContent: "center",
}

const LandingPage = () => {
    return(
        <div>
            <div style={
                getContainerStyle('static/images/bg1.jpeg',
                    {...styles, alignItems: "flex-end"}
                    )}
            >
                <h2 style={getTextBottomCenterStyle({color: "aqua"})}>
                    Explore our breezy summer collection now
                </h2>
            </div>
            <div
                style={
                getContainerStyle('static/images/bg2.jpeg',
                    {...styles, alignItems: "center"}
                )}
            >
                <h1 style={getTextCenterStyle({color: "pink", fontWeight: "bold"})}>
                    SHOP NOW
                </h1>
            </div>
            <div
                style={
                    getContainerStyle('static/images/bg3.jpg',
                        {...styles, alignItems: "center"}
                    )}
            >
                <div style={getTextCenterStyle({color: "white", fontWeight: "bold"})} >
                    <h2>
                        FREE SHIPPING ON YOUR FIRST ORDER
                    </h2>
                    <Button>Sign Me Up!</Button>
                </div>
            </div>
            <div
                style={
                    getContainerStyle('static/images/bg4.jpeg',
                        {...styles, alignItems: "center"}
                    )}
            >
                <h2 style={getTextCenterStyle({color: "pink"})}>
                    Join our newsletter
                </h2>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;