export const getContainerStyle = (pathToImage, extraStyles) => {
    return {
        width: "100%",
        height: "100%",
        backgroundImage: `url('${pathToImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        ...extraStyles
    }
}

export const getTextBottomCenterStyle = (extraProps) => {
    return {
        textAlign: "center",
        marginBottom: "7rem",
        fontSize: "2rem",
        ...extraProps
    }
}

export const getTextCenterStyle = (extraProps) => {
    return {
        textAlign: "center",
        fontSize: "4rem",
        ...extraProps
    }
}