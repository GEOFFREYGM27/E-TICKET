const passengerName = "Geoffrey mushipi";
        const journeyDetails = "Likili bus";
        const seatNumber = "A12";
        const email = "Geoffrey.doe@example.com";
        const phone = "+260971114837";
        
        document.getElementById("passengerName").textContent = passengerName;
document.getElementById("journeyDetails").textContent = journeyDetails;
        
function sendMail() {
        let params = {
                        passengerName: document.getElementById("passengerName").value,
                        journey: document.getElementById("journeyDetails").value,
                seatNumber:document.getElementById("seatNumber").value,
                email : document.getElementById("email").value,
                phone : document.getElementById("phone").value,
                name: document.getElementById("name").value,
                subject: document.getElementById("subject").value,
                massage: document.getElementById("massage").value,
    };

    emailjs.send("service_ta9y64l", "template_xov55ya", params)
        .then(function (response) {
            alert("Email sent!!");
        })
        .catch(function (error) {
            console.error("Email could not be sent:", error);
        });
}

