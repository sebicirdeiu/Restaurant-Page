import homePageLoad from "./home-page-load";
import menuPageLoad from "./menu";
import loadContactPage from "./contact";



const createTabs = () => {
    const content = document.querySelector("#content");
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    content.appendChild(tabs);
    //create tabs
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    // set text content
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    //set css classes
    home.classList.add("tab");
    menu.classList.add("tab");
    contact.classList.add("tab");

    //append to content
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    //render home page upon loading
    homePageLoad()

    //create event listeners to update the DOM 

    home.addEventListener("click", () => {
        clearPage();
        homePageLoad();
    });

    menu.addEventListener("click", () => {
        clearPage();
        menuPageLoad();
    });

    contact.addEventListener("click", () => {
        clearPage();
        loadContactPage();
    });
}

    const clearPage = () => {
        const content = document.querySelector("#content");
        const homePage = document.querySelector(".home-page");
        const menuPage = document.querySelector(".menu-page");
        const contactPage = document.querySelector(".contact-page");

        if (homePage || menuPage || contactPage) {

            content.removeChild(menuPage || homePage || contactPage)
        };
    }


export default createTabs;