import { enableGlobalNavigation } from "../script_modules/navigation.mjs";

window.addEventListener("load", () => {

    enableGlobalNavigation();

    let aboutCard = document.querySelector("#aboutOverlay"); 
    // toggle (hide/show) "about" card when the "about" link is clicked
    document.querySelector("#linkToAbout").addEventListener("click", () => {
        if(aboutCard.classList.toggle("hide")){
            aboutCard.classList.remove("show");
            aboutCard.querySelector(".subtitle").style.cssText = "transition: 500ms; opacity: 0%;";
            aboutCard.querySelector(".body").style.cssText = "transition: 500ms; opacity: 0%;";
            document.querySelectorAll("#linkToAbout .icon")[1].innerText = "add";
        } else {
            aboutCard.classList.add("show");
            aboutCard.querySelector(".subtitle").style.cssText = "transition: 500ms; opacity: 100%;";
            aboutCard.querySelector(".body").style.cssText = "transition: 500ms; opacity: 100%;";
            document.querySelectorAll("#linkToAbout .icon")[1].innerText = "remove";
        };
    });
    // allow user to hide "about" card to by clicking the close (arrow down) button
    // and update navigation to match
    document.querySelector("#aboutOverlay .hideArticle").addEventListener("click", () => {
        if(aboutCard.classList.toggle("hide")){
            aboutCard.classList.remove("show");
            aboutCard.querySelector(".subtitle").style.cssText = "transition: 500ms; opacity: 0%;";
            aboutCard.querySelector(".body").style.cssText = "transition: 500ms; opacity: 0%;";
            document.querySelectorAll("#linkToAbout .icon")[1].innerText = "add";
        } else {
            aboutCard.classList.add("show");
            aboutCard.querySelector(".subtitle").style.cssText = "transition: 500ms; opacity: 100%;";
            aboutCard.querySelector(".body").style.cssText = "transition: 500ms; opacity: 100%;";
            document.querySelectorAll("#linkToAbout .icon")[1].innerText = "remove";
        };
    });
});