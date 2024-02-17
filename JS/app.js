const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const seatSelectedEl = document.getElementById("selected-seat")
const totalPriceEl = document.getElementById("total-price")
const availableSeatEl = document.getElementById("available-seat")
const couponInputField = document.getElementById("coupon-field")
const couponBtnEl = document.getElementById("coupon-btn")
const grandTotalEl = document.getElementById("grand-total")
const btnContinue = document.getElementById('btn-continue');
const totalBookedEl = document.getElementById("total-booked")
const bookedSectionDefaultEl = document.getElementById("default-text")

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

            totalPriceEl.innerText = totalPrice.toFixed(2);

            // count seat
            totalBookedEl.innerText = selectedSeat.length

            // decrease available seat
            const availableSeatValue = parseFloat(availableSeatEl.innerText);
            const newAvailableSeatValue = availableSeatValue - 1;
            availableSeatEl.innerText = newAvailableSeatValue

            bookedSectionDefaultEl.classList.add("hidden")

            seatSelectedEl.innerHTML += `
         <li class="text-base font-normal flex justify-between">
            <span>${ value }</span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `

            // active coupon button if 4 seat is booked
            if (selectedSeat.length > 3) {
                couponInputField.removeAttribute("disabled")
                couponBtnEl.removeAttribute('disabled')
            }
        } else {
            return alert("Maximum seat added")
        }
    }
}

document.getElementById("coupon-btn").addEventListener('click', function () {
    const couponInputValue = couponInputField.value;
    let couponSave = 0;

    if (couponInputValue !== "NEW50" && couponInputValue !== "Couple 20") {
        alert("Your Provided Coupon Code Is Not Valid 😕")
        return couponInputField.value = ""

    }

    if (couponInputValue === "NEW50") {
        couponSave = totalPrice * 0.15;

    } else if (couponInputValue === "Couple 20") {
        couponSave = totalPrice * 0.20;

    }
    // hide coupon input field and apply button
    couponInputField.classList.add("hidden")
    couponBtnEl.classList.add("hidden")

    const showCouponPriceEl = document.getElementById("show-coupon-price");
    showCouponPriceEl.innerHTML = `
    <p>Discount</p>
    <p><span>- BDT: </span> <span id="total-price">${ couponSave.toFixed(2) }</span></p>
    `


    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);

})

// active next but by adding phone number
const phoneNumberEl = document.getElementById("phone-number")
const nextButton = document.getElementById("nextButton")

phoneNumberEl.addEventListener('input', function (e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 11) {
        nextButton.removeAttribute("disabled")
    } else {
        nextButton.setAttribute("disabled", true);
    }
});

// Reload the window
btnContinue.addEventListener('click', function () {
    window.location.reload();
});
