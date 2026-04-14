const form = document.getElementById("contact-form");
const statusText = document.getElementById("status-text");

const EMAILJS_PUBLIC_KEY = tM574wa3nUb2pO2DI;
const EMAILJS_SERVICE_ID = service_j2n6d1v;
const EMAILJS_TEMPLATE_ID = template_lpbvozs;

if (typeof emailjs !== "undefined"){
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

if (form){
    form.addEventListener("submit", async function (event) {
        event.preventDefault;
        statusText.textContent = "Sending message...";
        statusText.className = "contact-status sending";

        try{
           await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
           statusText.textContent = "Message sent!";
           statusText.classname = "contact-status sent";
           form.reset();
        } catch (error) {
            statusText.textContent = "Message failed to send. Please try again";
            statusText.className = "contact-status error";
        }
    });
}


