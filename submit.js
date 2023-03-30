var contactForm = document.getElementById("contactForm")
var emailInput = document.getElementById("emailInput")
var thankyouMessage = document.getElementById("thankyouMessage")

function hideThankyouMessage() {
    thankyouMessage.style.opacity = 0
}

function submitForm(event) {
    event.preventDefault()
    fetch("https://formbold.com/s/94NWn", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `email=${emailInput.value}`
    })
    contactForm.reset()
    thankyouMessage.style.opacity = 1
    setTimeout(hideThankyouMessage, 3000)
}

contactForm.addEventListener("submit", submitForm)