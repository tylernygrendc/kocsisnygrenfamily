
export function enableGlobalNavigation(){

    let nav = document.querySelector("#primaryNavigation"),
            navButton = document.querySelector("#navButton");

    if(window.innerWidth <= 768){

        nav.classList.add("invisible");

        // show nav when nav button is clicked
        navButton.addEventListener("click", (e) => {
            toggleNavigation();
        });
        // hide navigation anytime a link is clicked
        nav.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", () => {
                toggleNavigation();
            });
        });
    }

}

function toggleNavigation(){
    let nav = document.querySelector("#primaryNavigation"),
            navButton = document.querySelector("#navButton");
    if(nav.classList.toggle("invisible")){
        nav.classList.remove("visible");
        navButton.style.cssText = "";
    } else {
        nav.classList.add("visible");
        navButton.style.boxShadow = "none";
    };
}