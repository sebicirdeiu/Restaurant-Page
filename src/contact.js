const loadContactPage = () => {
    const content = document.querySelector("#content");
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");
    content.appendChild(contactPage);

    const header1 = document.createElement("h1");
    header1.classList.add("header1");
    header1.textContent = "Something sushilicious awaits you!"
    contactPage.appendChild(header1);

    //create contact div 
    const contactUs = document.createElement("div");
    contactUs.classList.add("contact");
    contactPage.appendChild(contactUs);

    const adress = document.createElement("p");
    adress.innerHTML = "<strong>Address:</strong> 1234 Sushi Lane, Tokyo, Japan"
    contactUs.appendChild(adress);

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> +81-XXX-XXXXXX";
    contactUs.appendChild(phone);

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> info@sushiliciousfunroll.com";
    contactUs.appendChild(email);

    const website = document.createElement("p");
    website.innerHTML = "<strong>Website:</strong> www.sushiliciousfunroll.com";
    contactUs.appendChild(website);

    const open = document.createElement("h3");
    open.classList.add("open");
    open.innerHTML = "<em>Opening Hours:</em>"
    contactUs.appendChild(open);

    const week = document.createElement("p");
    week.innerHTML = "<strong>Monday to Friday:</strong> 11:00am - 10:00pm"
    contactUs.appendChild(week);

    const weekend = document.createElement("p");
    weekend.innerHTML = "<strong>Saturday and Sunday:</strong> 12:00pm - 9:00pm"
    contactUs.appendChild(weekend);

    //create footer

    const footer = document.createElement("footer");
    footer.textContent = "© Sushilicious Fun Roll 2023 "
    contactPage.appendChild(footer);


}


export default loadContactPage;