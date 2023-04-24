import sushi from "./Images/rolls-sushi.jpg"

const homePageLoad = () => {


    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.classList.add("home-page");
    content.appendChild(homePage);

    //create header with tabs
    const header = document.createElement("div");
    header.classList.add("header");
    homePage.appendChild(header);


    //create main content
    const main = document.createElement("section")
    main.classList.add("main");
    homePage.appendChild(main);

    //append h1,description and image to main section
    const header1 = document.createElement("h1");
    header1.classList.add("header1");
    header1.textContent = "Welcome to Sushilicious Fun Roll!"
    main.appendChild(header1);

    const sideBySide = document.createElement("div");
    sideBySide.classList.add("beside")
    main.appendChild(sideBySide);

    const image = new Image();
    image.classList.add("image");
    image.src = sushi;
    image.style.height = "350px";
    sideBySide.appendChild(image);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = `"Welcome to "Sushilicious Fun Roll", where the art of sushi meets the joy of playful dining! Step into a world of culinary creativity and laughter as you embark on a delightful adventure of sushi and fun. Our skilled chefs will roll out a symphony of deliciousness with colorful and inventive sushi creations that will amaze your taste buds and bring a smile to your face. From "Roller Coaster Rolls" that are packed with flavor twists to "Ninja Nigiri" that sneak up on your senses, every dish is a masterpiece of fun and flavor. So, buckle up and get ready for a sushi experience like no other, where taste and laughter collide at "Sushilicious Fun Roll"!"`
    sideBySide.appendChild(description);

    //create footer

    const footer = document.createElement("footer");
    footer.textContent = "© Sushilicious Fun Roll 2023 "
    homePage.appendChild(footer);
}

export default homePageLoad;