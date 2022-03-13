function toggleExperienceDescription(event) {
    const isCollapsed = event.currentTarget.classList.contains("collapsed");
    if (isCollapsed) {
        event.currentTarget.classList.remove("collapsed");
    } else {
        event.currentTarget.classList.add("collapsed");
    }
}

const items = document.querySelectorAll("#experience .experience-item");
items.forEach(item => {
    item.addEventListener("click", toggleExperienceDescription)
});

function onContactMeFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");
    const submitButton = document.getElementById("contact-submit");

    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    submitButton.disabled = true;


    console.log(name.value + " <" + email.value + ">");
    console.log("Message: " + message.value);
}

const contactMeForm = document.getElementById("contact-me-form");
contactMeForm.addEventListener("submit", onContactMeFormSubmit);
