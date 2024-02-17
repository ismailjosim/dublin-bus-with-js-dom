
const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const seatSelectedEl = document.getElementById("selected-seat")
const totalPriceEl = document.getElementById("total-price")
const availableSeatEl = document.getElementById("available-seat")

// Menu icons
menuBtn.addEventListener('click', function () {
    menuBtn.children[0].classList.toggle("hidden")
    const menuCloseBtn = document.getElementById("close-icon");
    menuCloseBtn.classList.toggle("hidden")
    mobileMenuEl.classList.toggle("hidden")
    mobileMenuEl.classList.toggle("flex")
})

let selectedSeat = []
let totalPrice = 0;

function handleSelectSeat(event) {
    const value = event.innerText
    if (selectedSeat.includes(value)) {
        return alert("Seat already added")
    } else {
        if (selectedSeat.length < 4) {
            event.classList.add("bg-primary")
            event.classList.add("text-white")

            selectedSeat.push(value);
            totalPrice += 550;

            totalPriceEl.innerText = totalPrice;

            // decrease available seat
            const availableSeatValue = parseFloat(availableSeatEl.innerText);
            const newAvailableSeatValue = availableSeatValue - 1;
            availableSeatEl.innerText = newAvailableSeatValue

            seatSelectedEl.innerHTML += `
         <li class="text-base font-normal flex justify-between">
            <span>${ value }</span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `
        } else {
            return alert("Maximum seat added")
        }


    }
}

