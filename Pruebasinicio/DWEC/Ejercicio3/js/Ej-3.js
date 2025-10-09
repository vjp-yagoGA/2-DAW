function cambiarATwitter() {
    const enlace = document.getElementById("Google");

    enlace.id = "aTwitter";

    enlace.href = "https://twitter.com";

    enlace.textContent = "Twitter";

    if (enlace.hasAttribute("title")) {
        enlace.setAttribute("title", "Ir a Twitter");
    }
}

cambiarATwitter();
