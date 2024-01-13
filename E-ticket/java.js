// script.js
function updateTicket() {
    const passengerName = document.getElementById("passengerNameInput").value;
    const journeyDetails = document.getElementById("journeyDetailsInput").value;
    const seatNumber = document.getElementById("seatNumberInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    document.getElementById("passengerName").textContent = passengerName;
    document.getElementById("journeyDetails").textContent = journeyDetails;
    document.getElementById("seatNumber").textContent = seatNumber;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
}
