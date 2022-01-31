let mouseEnabled = false;
const flipSwitch = () => mouseEnabled = !mouseEnabled
function swapTheme() {


    if (!mouseEnabled) {
        document.getElementById("app").setAttribute("class", "night");
        document.getElementById("swap").setAttribute("class", "button_night");
        flipSwitch()
    } else {
        document.getElementById("app").setAttribute("class", "day");
        document.getElementById("swap").setAttribute("class", "button_day");
        flipSwitch()
    }

}
