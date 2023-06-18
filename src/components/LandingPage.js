const LandingPage = () => {

    const getContainerDetails = (pathToImage) => {
        return {
            width: "100%",
            height: "100%",
            backgroundImage: `url('${pathToImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "100vh"
        }
    }

    return(
        <div>
            <div style={getContainerDetails('static/images/bg1.jpeg')}>
            </div>
            <div style={getContainerDetails('static/images/bg2.jpeg')}>
            </div>
            <div style={getContainerDetails('static/images/bg3.jpeg')}>
            </div>
            <div style={getContainerDetails('static/images/bg4.jpg')}>
            </div>
        </div>
    );
}

export default LandingPage;