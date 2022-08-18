export function updateCircleLocation(divCircleRef, circleData, boxDimensions) {

    circleData.x += circleData.xSpeed;
    circleData.y += circleData.ySpeed;

    if (circleData.x < 0) {
        circleData.xSpeed *= -1;
        circleData.x = 0;
    }
    else if (circleData.x + circleData.radius > boxDimensions.width) {
        circleData.xSpeed *= -1;
        circleData.x = boxDimensions.width - circleData.radius;
    }
    if (circleData.y < 0) {
        circleData.ySpeed *= -1;
        circleData.y = 0;
    }
    else if (circleData.y + circleData.radius > boxDimensions.height) {
        circleData.ySpeed *= -1;
        circleData.y = boxDimensions.height - circleData.radius;
    }

    divCircleRef.style.top = circleData.y + "px";
    divCircleRef.style.left = circleData.x + "px";
};