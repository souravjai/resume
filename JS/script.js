function rotate(id) {

    innerCard = document.querySelectorAll(".innerCard")[id - 1];

    if (innerCard.classList.contains("rotate")) {
        innerCard.classList.remove("rotate");
        innerCard.removeAttribute("style");
    } else {
        innerCard.classList.add("rotate");
        innerCard.setAttribute("style", "transform: rotateY(180deg);")
    }
}

function disp(destination, index, exp = 0) {

    document.querySelectorAll(".navItem").forEach(item => { item.style.pointerEvents = "none" });

    const src = document.querySelector("section:not(.hidden)");
    const dest = document.getElementById(destination);

    src.classList.add("visuallyHidden");

    setTimeout(() => {
        src.classList.add("hidden");
        dest.classList.remove("hidden");
        dest.classList.remove("visuallyHidden");
        document.querySelectorAll(".navItem").forEach(item => {
            if (!item.children[0].classList.contains("selected"))
                item.style.pointerEvents = "auto";
        });
    }, 300);

    document.querySelector(".navItem>a.selected").classList.remove("selected");
    document.getElementsByClassName("navItem")[index - 1].querySelector("a").classList.add("selected");

    if (exp == 0 && document.getElementById("phone").clientHeight != 0)
        expand();

    document.body.scrollTop = document.documentElement.scrollTop = 0;
}


function expand() {
    const header = document.querySelector("header");
    if (header.clientHeight == 95) {
        document.getElementById("phone").classList.add("active");
        header.style.height = "210px";
        setTimeout(() => {
            document.querySelector(".HeaderNavbar").style.display = "flex";
        }, 250);
    } else {
        document.getElementById("phone").classList.remove("active");
        document.querySelector(".HeaderNavbar").style.display = "none";
        header.style.height = "95px";
    }
}

document.body.scrollTop = document.documentElement.scrollTop = 0;