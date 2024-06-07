const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

const left = document.getElementById("left");

const onMove = e => {
    const perc = e.clientX / window.innerWidth * 100;

    left.style.width =`${perc}%`;
}

document.onmousemove = e => onMove(e);
document.ontouchmove = e => onMove(e.touches[0]);