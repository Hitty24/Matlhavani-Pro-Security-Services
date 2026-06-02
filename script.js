function handleSubmit(event) {
    event.preventDefault();

    let form = event.target;

    let name = form.name.value;
    let phone = form.phone.value;
    let service = form.service.value;
    let message = form.message.value;

    let whatsappText = `New Inquiry:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    let whatsappNumber = "27717746217";

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {

        if (response.ok) {

            // SHOW ANIMATION
            let successBox = document.getElementById("successMessage");
            successBox.classList.add("active");

            // OPEN WHATSAPP AFTER 2 SECONDS
            setTimeout(() => {
                window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, '_blank');
            }, 2000);

            // HIDE AFTER 4 SECONDS
            setTimeout(() => {
                successBox.classList.remove("active");
            }, 4000);

            form.reset();

        } else {
            alert("Something went wrong. Please try again.");
        }

    });
}
   

function sendWhatsApp() {

    let name = document.querySelector('input[name="name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let service = document.querySelector('select[name="service"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (!name || !phone || !service || !message) {
        alert("Please fill in the form first.");
        return;
    }

    let text = `New Inquiry:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;

    let whatsappNumber = "27797462759";

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
}
