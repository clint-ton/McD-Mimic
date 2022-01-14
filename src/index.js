import LogoImage from "./assets/logo.png"
import "./styles.css";

const mainPage = (() => {
    const load = () => {
        const content = document.querySelector("#content")
        const header = document.createElement("h1");
        header.textContent = "WacDonalds"
        const logo = document.createElement("img");
        logo.src = LogoImage
        logo.id = "logo"

        content.appendChild(header);
        content.appendChild(logo);

        const about = document.createElement("div");
        about.classList.add("info");
        const aboutH2 = document.createElement("h2");
        aboutH2.textContent = "About";
        const aboutPara = document.createElement("p");
        aboutPara.textContent = "WacDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice WacDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona. In 1955, Ray Kroc, a businessman, joined the company as a franchise agent and proceeded to purchase the chain from the WacDonald brothers. WacDonald's had its previous headquarters in Oak Brook, Illinois, but moved its global headquarters to Chicago in June 2018."
        
        about.appendChild(aboutH2);
        about.appendChild(aboutPara);
        content.appendChild(about);

        const hours = document.createElement("div");
        hours.classList.add("info");
        const hoursH2 = document.createElement("h2");
        hoursH2.textContent = "Hours";
        const hoursPara = document.createElement("p");
        hoursPara.innerHTML = `6 a.m. - 12 a.m. <br/> 7 Days a week`;

        hours.appendChild(hoursH2);
        hours.appendChild(hoursPara);
        content.appendChild(hours);

        const location = document.createElement("div");
        location.classList.add("info");
        const locationH2 = document.createElement("h2");
        locationH2.textContent = "Location";
        const locationPara = document.createElement("p");
        locationPara.innerHTML = `43/45 Lincoln Road, Spreydon, Christchurch 8440`;

        location.appendChild(locationH2);
        location.appendChild(locationPara);
        content.appendChild(location);
    }

    return { load };
})();


mainPage.load();
console.log("Hello");