const menuPageLoad = () => {

    const content = document.querySelector("#content");
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");
    content.appendChild(menuPage);

    //create header
    const header1 = document.createElement("h1");
    header1.classList.add("header1");
    header1.textContent = "Choose your Sushilicious dish!"
    menuPage.appendChild(header1);


    //create dishes presentation
    const dishes = document.createElement("div");
    dishes.classList.add("dishes")
    menuPage.appendChild(dishes);

    //create 8 dishes
    let options = 8;

    for (let i=0; i<options; i++) {
        const dish = document.createElement("div")
        dish.setAttribute("id",`${i}`);
        dish.classList.add("dish");
        dishes.appendChild(dish)
    }

    //create dish presentation
    const dish0 = document.getElementById("0");
    const dishName0 = document.createElement("h3");
    dishName0.classList.add("dish-name");
    dishName0.textContent = "Rainbow Roll (8 pieces)"
    dish0.appendChild(dishName0);
    const ingredients0 = document.createElement("p");
    ingredients0.classList.add("ingredients");
    ingredients0.textContent = "Ingredients: Fresh salmon, tuna, yellowtail, avocado, cucumber, crab stick, sushi rice, nori (seaweed), masago (fish roe), soy sauce, pickled ginger, wasabi"
    dish0.appendChild(ingredients0);
    const price0 = document.createElement("p");
    price0.classList.add("price");
    price0.textContent = "Price: €10.95"
    dish0.appendChild(price0);

    const dish1 = document.getElementById("1");
    const dishName1 = document.createElement("h3");
    dishName1.classList.add("dish-name");
    dishName1.textContent = "Dragon Roll (8 pieces)"
    dish1.appendChild(dishName1);
    const ingredients1 = document.createElement("p");
    ingredients1.classList.add("ingredients");
    ingredients1.textContent = "Ingredients: Grilled eel, avocado, cucumber, crab stick, sushi rice, nori (seaweed), eel sauce, sesame seeds, soy sauce, pickled ginger, wasabi"
    dish1.appendChild(ingredients1);
    const price1 = document.createElement("p");
    price1.classList.add("price");
    price1.textContent = "Price: €12.95"
    dish1.appendChild(price1);

    const dish2 = document.getElementById("2");
    const dishName2 = document.createElement("h3");
    dishName2.classList.add("dish-name");
    dishName2.textContent = "Spicy Tuna Roll (8 pieces)"
    dish2.appendChild(dishName2);
    const ingredients2 = document.createElement("p");
    ingredients2.classList.add("ingredients");
    ingredients2.textContent = "Ingredients: Fresh tuna, spicy mayo, sriracha sauce, cucumber, green onions, sushi rice, nori (seaweed), sesame seeds, soy sauce, pickled ginger, wasabi"
    dish2.appendChild(ingredients2);
    const price2 = document.createElement("p");
    price2.classList.add("price");
    price2.textContent = "Price: €8.95"
    dish2.appendChild(price2);

    const dish3 = document.getElementById("3");
    const dishName3 = document.createElement("h3");
    dishName3.classList.add("dish-name");
    dishName3.textContent = "Veggie Crunch Roll (8 pieces)"
    dish3.appendChild(dishName3);
    const ingredients3 = document.createElement("p");
    ingredients3.classList.add("ingredients");
    ingredients3.textContent = "Ingredients: Tempura sweet potato, cucumber, avocado, bell pepper, carrot, sushi rice, nori (seaweed), tempura flakes, eel sauce, soy sauce, pickled ginger, wasabi"
    dish3.appendChild(ingredients3);
    const price3 = document.createElement("p");
    price3.classList.add("price");
    price3.textContent = "Price: €7.95"
    dish3.appendChild(price3);

    const dish4 = document.getElementById("4");
    const dishName4 = document.createElement("h3");
    dishName4.classList.add("dish-name");
    dishName4.textContent = "Volcano Roll (8 pieces)"
    dish4.appendChild(dishName4);
    const ingredients4 = document.createElement("p");
    ingredients4.classList.add("ingredients");
    ingredients4.textContent = "Ingredients: Tempura shrimp, cream cheese, avocado, cucumber, sushi rice, nori (seaweed), spicy mayo, eel sauce, masago (fish roe), green onions, soy sauce, pickled ginger, wasabi"
    dish4.appendChild(ingredients4);
    const price4 = document.createElement("p");
    price4.classList.add("price");
    price4.textContent = "Price: €11.95"
    dish4.appendChild(price4);

    const dish5 = document.getElementById("5");
    const dishName5 = document.createElement("h3");
    dishName5.classList.add("dish-name");
    dishName5.textContent = "California Roll (8 pieces)"
    dish5.appendChild(dishName5);
    const ingredients5 = document.createElement("p");
    ingredients5.classList.add("ingredients");
    ingredients5.textContent = "Ingredients: Crab stick, avocado, cucumber, sushi rice, nori (seaweed), sesame seeds, soy sauce, pickled ginger, wasabi"
    dish5.appendChild(ingredients5);
    const price5 = document.createElement("p");
    price5.classList.add("price");
    price5.textContent = "Price: €7.95"
    dish5.appendChild(price5);

    const dish6 = document.getElementById("6");
    const dishName6 = document.createElement("h3");
    dishName6.classList.add("dish-name");
    dishName6.textContent = "Mango Tango Roll (8 pieces)"
    dish6.appendChild(dishName6);
    const ingredients6 = document.createElement("p");
    ingredients6.classList.add("ingredients");
    ingredients6.textContent = "Ingredients: Fresh mango, crab stick, cucumber, avocado, sushi rice, nori (seaweed), mango sauce, sesame seeds, soy sauce, pickled ginger, wasabi"
    dish6.appendChild(ingredients6);
    const price6 = document.createElement("p");
    price6.classList.add("price");
    price6.textContent = "Price: €9.95"
    dish6.appendChild(price6);

    const dish7 = document.getElementById("7");
    const dishName7 = document.createElement("h3");
    dishName7.classList.add("dish-name");
    dishName7.textContent = "Ninja Nigiri (4 pieces)"
    dish7.appendChild(dishName7);
    const ingredients7 = document.createElement("p");
    ingredients7.classList.add("ingredients");
    ingredients7.textContent = "Ingredients: Fresh salmon, fresh tuna, avocado, sushi rice, nori (seaweed), soy sauce, pickled ginger, wasabi"
    dish7.appendChild(ingredients7);
    const price7 = document.createElement("p");
    price7.classList.add("price");
    price7.textContent = "Price: €7.95"
    dish7.appendChild(price7);


    const wish = document.createElement("h3");
    wish.classList.add("wish");
    wish.innerText = `"We hope you enjoy the creative and delicious sushi offerings at "Sushilicious Fun Roll." Bon appétit!"`
    menuPage.appendChild(wish);

    //create footer

    const footer = document.createElement("footer");
    footer.textContent = "© Sushilicious Fun Roll 2023 "
    menuPage.appendChild(footer);
}


export default menuPageLoad;