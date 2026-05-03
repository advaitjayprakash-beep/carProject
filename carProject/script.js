const form = document.getElementById("contact-form");
const statusText = document.getElementById("contact-status");

const EMAILJS_PUBLIC_KEY = "tM574wa3nUb2pO2DI";
const EMAILJS_SERVICE_ID = "service_j2n6d1v";
const EMAILJS_TEMPLATE_ID = "template_lpbvozs";

if (typeof emailjs !== "undefined"){
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

if (form && statusText){
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        statusText.textContent = "Sending message...";
        statusText.className = "contact-status sending";

        try {
           await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
           statusText.textContent = "Message sent!";
           statusText.className = "contact-status sent";
           form.reset();
        } catch (error) {
            statusText.textContent = "Message failed to send. Please try again";
            statusText.className = "contact-status error";
            console.error("Emailjs send error:", error);
        }
    });
}

const carCards = document.querySelectorAll(".car-card");
const carModel = document.getElementById("car-model")
const carModelClose = document.getElementById("car-model-close")
const carModelTitle = document.getElementById("car-model-title")
const carModelName = document.getElementById("car-model-car-name")
const carModelDescription = document.getElementById("car-model-description")
const carModelSpecs = document.getElementById("car-model-specs")

if (carCards.length && carModel && carModelClose && carModelTitle && carModelName && carModelDescription && carModelSpecs) {
    carCards.forEach(function (card){
        card.addEventListener("click", function () {
            const titleText = card.querySelector("h2")?.textContent || "Car Spotlight";
            const carNameText = card.querySelector("p strong")?.parentElement?.textContent || "Car name not available";
            const descriptionLine = card.querySelector("p")[1]?.textContent || "No description available";
            const specItems = card.querySelectorAll("ul li");

            carModelTitle.textContent = titleText;
            carModelName.textContent = carNameText;
            carModelDescription.textContent = descriptionLine;
            carModelSpecs.innerHTML = "";

            specItems.forEach(function (item){
                const li = document.createElement("li");
                li.textContent = item.textContent;
                carModelSpecs.appendChild(li);
            });

            carModel.classList.add("open");
        });
    });

    carModelClose.addEventListener("click", function (){
        carModel.classList.remove("open");
    });

    carModelName.addEventListener("click", function (event){
        if (event.target === carModel){
            carModel.classList.remove("open");
        }
    });
}