export function updateCircleLocation(divCircleRef, circleData, boxDimensions) {

    circleData.x += circleData.xSpeed;
    circleData.y += circleData.ySpeed;

    if (circleData.x < boxDimensions.xCorner) {
        circleData.xSpeed *= -1;
        circleData.x = boxDimensions.xCorner;
    }
    else if (circleData.x + circleData.radius > boxDimensions.width + boxDimensions.xCorner) {
        circleData.xSpeed *= -1;
        circleData.x = boxDimensions.width + boxDimensions.xCorner - circleData.radius;
    }
    if (circleData.y < boxDimensions.yCorner) {
        circleData.ySpeed *= -1;
        circleData.y = boxDimensions.yCorner;
    }
    else if (circleData.y + circleData.radius > boxDimensions.height + boxDimensions.yCorner) {
        circleData.ySpeed *= -1;
        circleData.y = boxDimensions.height + boxDimensions.yCorner - circleData.radius;
    }

    divCircleRef.style.top = circleData.y + "px";
    divCircleRef.style.left = circleData.x + "px";
};

export function hideCircle(index) {
    document.getElementById(index).style.backgroundColor = "orange";
}

export function createCircle(data, index) {

    const color = data.correct ? "green" : "orange";

    const circleStyle = {
        width: data.radius + "px",
        height: data.radius + "px",
        borderRadius: "50%",
        backgroundColor: color,
        position: "absolute",
        top: data.y + "px",
        left: data.x + "px"
    }
    return (
    <div key={index} data-correct={data.correct} id={index} style={circleStyle}>

    </div>
    )
};