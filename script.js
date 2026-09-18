/* =========================================================
   SUI — MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   AI MODAL
========================================================= */

const aiModal = document.getElementById("aiModal");
const aiInput = document.getElementById("aiInput");
const chatArea = document.getElementById("chatArea");


function openAI() {

    aiModal.classList.add("show");

    setTimeout(() => {
        aiInput.focus();
    }, 300);

}


function closeAI() {

    aiModal.classList.remove("show");

}


/* =========================================================
   AI CHAT
========================================================= */

function handleAIKey(event) {

    if (event.key === "Enter") {
        sendAI();
    }

}


function quickAI(message) {

    aiInput.value = message;

    sendAI();

}


function sendAI() {

    const message = aiInput.value.trim();

    if (!message) return;


    /* USER MESSAGE */

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = message;

    chatArea.appendChild(userMessage);


    aiInput.value = "";

    chatArea.scrollTop = chatArea.scrollHeight;


    /* AI RESPONSE */

    setTimeout(() => {

        const response = generateAIResponse(message);

        const aiMessage = document.createElement("div");

        aiMessage.className = "ai-message";

        aiMessage.innerHTML = response;

        chatArea.appendChild(aiMessage);

        chatArea.scrollTop = chatArea.scrollHeight;

    }, 700);

}


/* =========================================================
   BASIC AI CLASSIFICATION
========================================================= */

function generateAIResponse(message) {

    const text = message.toLowerCase();


    /* ALTERATION */

    if (
        text.includes("loose") ||
        text.includes("tight") ||
        text.includes("alter") ||
        text.includes("fit") ||
        text.includes("shorter") ||
        text.includes("longer")
    ) {

        return `
            ✂️ <strong>I'd recommend an alteration.</strong>
            <br><br>
            Based on what you described, you probably need
            a fitting or length adjustment.
            <br><br>
            <strong>Estimated price:</strong> ₹99–₹250
            <br>
            <strong>Estimated time:</strong> 2–4 hours
            <br><br>
            I can find the best-rated alteration tailor near you.
        `;

    }


    /* BLOUSE */

    if (
        text.includes("blouse") ||
        text.includes("saree")
    ) {

        return `
            👗 <strong>Blouse stitching sounds perfect.</strong>
            <br><br>
            I recommend a tailor who specializes in
            ethnic and blouse designs.
            <br><br>
            <strong>Starting price:</strong> ₹499
            <br>
            <strong>Typical time:</strong> 1–2 days
            <br><br>
            You can also upload a reference design
            for a style match.
        `;

    }


    /* CUSTOM */

    if (
        text.includes("custom") ||
        text.includes("design") ||
        text.includes("new outfit") ||
        text.includes("dress")
    ) {

        return `
            ✨ <strong>Let's create something custom.</strong>
            <br><br>
            Upload a reference image and I'll help identify
            the garment style, fabric and stitching requirements.
            <br><br>
            <strong>Next step:</strong>
            Find a tailor based on your design.
        `;

    }


    /* REPAIR */

    if (
        text.includes("repair") ||
        text.includes("tear") ||
        text.includes("broken")
    ) {

        return `
            🪡 <strong>That sounds like a repair job.</strong>
            <br><br>
            We can help with torn fabric, broken zippers,
            loose seams and other clothing repairs.
            <br><br>
            <strong>Starting price:</strong> ₹79
        `;

    }


    /* DEFAULT */

    return `
        ✦ I understand!
        <br><br>
        I'd recommend starting with one of these:
        <br><br>
        <strong>✂️ Alteration</strong> — fix the fit
        <br>
        <strong>👗 Stitching</strong> — create something new
        <br>
        <strong>🪡 Repair</strong> — fix damaged clothing
        <br><br>
        Tell me a little more about your outfit
        and I'll recommend the best option.
    `;

}


/* =========================================================
   BOOKING / SERVICES — handled in module script in index.html
   openBookingModal, closeBooking, submitOrder, selectService,
   selectServiceChip, clearFilter are all defined there.
========================================================= */


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

    const toast = document.getElementById("toast");

    const toastText = document.getElementById("toastText");

    toastText.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================================
   SEARCH
========================================================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".service-card");


    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


/* =========================================================
   SCROLL
========================================================= */

function scrollToServices() {

    document
        .getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

aiModal.addEventListener("click", function (event) {

    if (event.target === aiModal) {
        closeAI();
    }

});


document.getElementById("bookingModal").addEventListener("click", function (event) {

    if (event.target === this) {
        closeBooking();
    }

});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeAI();
        closeBooking();

    }

});
