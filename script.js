/* =========================================================
   SILAI — MAIN JAVASCRIPT
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
/* =========================================================
   AI TAILOR REQUIREMENT CLASSIFICATION
========================================================= */

function generateAIResponse(message) {

    const text = message.toLowerCase();


    /* =====================================================
       ALTERATION
    ===================================================== */

    if (
        text.includes("alter") ||
        text.includes("loose") ||
        text.includes("tight") ||
        text.includes("shorten") ||
        text.includes("shorter") ||
        text.includes("length") ||
        text.includes("fit") ||
        text.includes("adjust") ||
        text.includes("waist")
    ) {

        return `
            ✂️ <strong>Alteration Service</strong>
            <br><br>

            Based on your requirement, SILAI recommends
            an <strong>alteration service</strong> for fitting
            or length adjustments.
            <br><br>

            <strong>Suitable for:</strong>
            <br>
            • Length adjustment
            <br>
            • Waist fitting
            <br>
            • Sleeve adjustment
            <br>
            • Size correction
            <br><br>

            <strong>Estimated price:</strong> ₹99–₹250
            <br>
            <strong>Estimated time:</strong> 2–4 hours
        `;

    }


    /* =====================================================
       STITCHING
    ===================================================== */

    if (
        text.includes("stitch") ||
        text.includes("stitching") ||
        text.includes("sew") ||
        text.includes("tailor") ||
        text.includes("make a") ||
        text.includes("make me") ||
        text.includes("blouse") ||
        text.includes("kurti") ||
        text.includes("shirt")
    ) {

        return `
            🧵 <strong>Stitching Service</strong>
            <br><br>

            Your requirement sounds like a
            <strong>custom stitching</strong> request.
            <br><br>

            SILAI can help you find a tailor based on
            garment type, expertise, price and ratings.
            <br><br>

            <strong>Estimated price:</strong> ₹299–₹999
            <br>
            <strong>Typical time:</strong> 1–3 days
            <br><br>

            You can also provide a reference design
            for better customization.
        `;

    }


    /* =====================================================
       REPAIR
    ===================================================== */

    if (
        text.includes("repair") ||
        text.includes("tear") ||
        text.includes("torn") ||
        text.includes("broken") ||
        text.includes("zip") ||
        text.includes("zipper") ||
        text.includes("rip") ||
        text.includes("hole") ||
        text.includes("damage")
    ) {

        return `
            🪡 <strong>Repair Service</strong>
            <br><br>

            This looks like a <strong>clothing repair</strong>
            requirement.
            <br><br>

            Suitable for:
            <br>
            • Torn fabric
            <br>
            • Broken zippers
            <br>
            • Loose seams
            <br>
            • Small holes
            <br><br>

            <strong>Starting price:</strong> ₹79
            <br>
            <strong>Estimated time:</strong> 1–4 hours
        `;

    }


    /* =====================================================
       EMBROIDERY
    ===================================================== */

    if (
        text.includes("embroidery") ||
        text.includes("embroider") ||
        text.includes("thread work") ||
        text.includes("embellish") ||
        text.includes("embellishment") ||
        text.includes("handwork")
    ) {

        return `
            ✨ <strong>Embroidery & Handwork</strong>
            <br><br>

            Your requirement appears to involve
            <strong>embroidery or decorative handwork</strong>.
            <br><br>

            SILAI can help you find specialists in:
            <br>
            • Embroidery
            <br>
            • Thread work
            <br>
            • Custom patterns
            <br>
            • Garment embellishments
            <br><br>

            <strong>Starting price:</strong> ₹299
        `;

    }


    /* =====================================================
       CUSTOM DESIGN
    ===================================================== */

    if (
        text.includes("custom") ||
        text.includes("design") ||
        text.includes("new outfit") ||
        text.includes("new dress") ||
        text.includes("create") ||
        text.includes("outfit") ||
        text.includes("reference")
    ) {

        return `
            ✨ <strong>Custom Design</strong>
            <br><br>

            Let's create something personalized.
            <br><br>

            You can provide a reference image or describe
            the style you want. SILAI can then help identify
            the suitable tailoring service.
            <br><br>

            <strong>Next step:</strong>
            <br>
            Upload a reference design and find a
            tailor who specializes in it.
        `;

    }


    /* =====================================================
       MEASUREMENT
    ===================================================== */

    if (
        text.includes("measurement") ||
        text.includes("measure") ||
        text.includes("size") ||
        text.includes("body measurement") ||
        text.includes("my size")
    ) {

        return `
            📏 <strong>Measurement Assistance</strong>
            <br><br>

            I can help you understand the measurements
            required for your garment.
            <br><br>

            Common measurements include:
            <br>
            • Shoulder
            <br>
            • Chest
            <br>
            • Waist
            <br>
            • Hip
            <br>
            • Sleeve length
            <br>
            • Garment length
            <br><br>

            <strong>Future SILAI feature:</strong>
            AI-based measurement estimation using
            computer vision.
        `;

    }


    /* =====================================================
       BLOUSE / SAREE SPECIAL CASE
    ===================================================== */

    if (
        text.includes("saree") ||
        text.includes("lehenga") ||
        text.includes("ethnic")
    ) {

        return `
            👗 <strong>Ethnic Wear Tailoring</strong>
            <br><br>

            Your requirement appears to involve
            <strong>ethnic wear tailoring</strong>.
            <br><br>

            SILAI can help you find specialists in
            blouse, saree and traditional outfit tailoring.
            <br><br>

            <strong>Starting price:</strong> ₹499
            <br>
            <strong>Typical time:</strong> 1–2 days
            <br><br>

            You can also upload a reference design
            for a better style match.
        `;

    }


    /* =====================================================
       DEFAULT RESPONSE
    ===================================================== */

    return `
        ✦ <strong>Let's understand your requirement.</strong>
        <br><br>

        I can help identify the right tailoring service
        based on what you describe.
        <br><br>

        Try something like:
        <br><br>

        <strong>✂️ "I need to shorten my jeans"</strong>
        <br>
        <strong>🧵 "I want a blouse stitched"</strong>
        <br>
        <strong>🪡 "My dress has a broken zip"</strong>
        <br>
        <strong>✨ "I want embroidery on my saree"</strong>
        <br>
        <strong>📏 "How do I take my measurements?"</strong>
        <br><br>

        Tell me what you need and I'll recommend
        the most suitable service.
    `;

}

/* =========================================================
   BOOKING
========================================================= */

const bookingModal = document.getElementById("bookingModal");

let selectedTailor = "";


function bookTailor(tailor) {

    selectedTailor = tailor;

    document.getElementById("bookingTitle").textContent =
        `Book ${tailor}`;

    bookingModal.classList.add("show");

}


function closeBooking() {

    bookingModal.classList.remove("show");

}


function chooseBooking(service, price) {

    closeBooking();

    showToast(
        `${service} booked with ${selectedTailor} · ₹${price}`
    );

}


/* =========================================================
   SERVICES
========================================================= */

function selectService(service) {

    showToast(`${service} selected`);

    setTimeout(() => {
        openAI();
    }, 500);

}


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


bookingModal.addEventListener("click", function (event) {

    if (event.target === bookingModal) {
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
