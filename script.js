const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".main-navigation");

const navigationLinks =
    document.querySelectorAll(".main-navigation a");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen =
        navigation.classList.contains("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuButton.textContent =
        isOpen ? "✕" : "☰";
});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "☰";
    });

});
