export function darkTheme() {
    document.getElementById("moon").className = "bx bxs-moon theme-selected";
    document.getElementById("sun").classList = "bx bx-sun";
    document.getElementById("moon2").className = "bx bxs-moon theme-selected";
    document.getElementById("sun2").classList = "bx bx-sun";
    changeDarkTheme();
}

export function lightTheme() {
    document.getElementById("sun").className = "bx bx-sun theme-selected";
    document.getElementById("moon").classList = "bx bxs-moon";
    document.getElementById("sun2").className = "bx bx-sun theme-selected";
    document.getElementById("moon2").classList = "bx bxs-moon";
    changeLightTheme();
}

function changeDarkTheme() {
    const body = document.body;
    const h1 = document.getElementById("h1");
    const text = document.getElementById("text");
    const selected = document.getElementById("selected");
    const selected2 = document.getElementById("selected2");
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close");
    const menuButton = document.getElementById("menu-button");
    body.style.background = "#111729";
    h1.style.color = "#ffff";
    text.style.color = "#ffff";
    selected.style.color = "#ffff";
    selected2.style.color = "#fff";
    menu.style.backgroundColor = "#111729";
    closeButton.style.color = "#fff";
    menuButton.style.color = "#fff";
}

function changeLightTheme() {
    const body = document.body;
    const h1 = document.getElementById("h1");
    const text = document.getElementById("text");
    const selected = document.getElementById("selected");
    const selected2 = document.getElementById("selected2");
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close");
    const menuButton = document.getElementById("menu-button");
    body.style.background = "#fff";
    h1.style.color = "#223344";
    text.style.color = "#223344";
    selected.style.color = "#223344";
    selected2.style.color = "#223344";
    menu.style.backgroundColor = "#fff";
    closeButton.style.color = "#000";
    menuButton.style.color = "#000";
}
