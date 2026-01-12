    const webTab = document.querySelector(".web-tab");
    const appTab = document.querySelector(".app-tab");
    const dmTab = document.querySelector(".dm-tab");

    const webContent = document.querySelector(".web-content");
    const appContent = document.querySelector(".app-content");
    const dmContent = document.querySelector(".dm-content");

    webContent.classList.remove("hide1");

    appTab.classList.remove("active2");
    dmTab.classList.remove("active3");

    webTab.addEventListener("click", () => {
        webTab.classList.add("active1");  
        appTab.classList.remove("active2");
        dmTab.classList.remove("active3");
        webContent.classList.remove("hide1");
        appContent.classList.add("hide2");
        dmContent.classList.add("hide3");
    });

    appTab.addEventListener("click", () => {
        webTab.classList.remove("active1");
        appTab.classList.add("active2");
        dmTab.classList.remove("active3");
        webContent.classList.add("hide1");
        appContent.classList.remove("hide2");
        dmContent.classList.add("hide3");
    });

    dmTab.addEventListener("click", () => {
        webTab.classList.remove("active1");
        appTab.classList.remove("active2");
        dmTab.classList.add("active3");
        webContent.classList.add("hide1");
        appContent.classList.add("hide2");
        dmContent.classList.remove("hide3");
    });

