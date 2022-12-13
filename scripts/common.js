function showHideMenuItems() {
    let vis = document.getElementById("menu-items").style.visibility;
    if (vis == "visible") {
        document.getElementById("icon-img").setAttribute("src", "../images/icon-menu.jpg");
        document.getElementById("menu-items").style.visibility = "hidden";
        document.getElementById("menu-items").style.fontSize = "1px";
        document.getElementById("body-grid").style.gridTemplateColumns = "max-content auto";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
    }
    else {
        document.getElementById("icon-img").setAttribute("src", "../images/icon-close.jpg");
        document.getElementById("menu-items").style.visibility = "visible";
        document.getElementById("menu-items").style.fontSize = "medium";
        document.getElementById("body-grid").style.gridTemplateColumns = "1fr 1fr";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "black";
    }
}