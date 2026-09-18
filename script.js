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
        text.includes("adjust") ||
        text.includes("waist") ||
        text.includes("sleeve") ||
        text.includes("fit") ||
        text.includes("fitting")
    ) {

        return `
            ✂️ <strong>Alteration Service</strong>
            <br><br>

            It sounds like you need an <strong>alteration</strong>.
            Tailors on SILAI can help modify the fit, length or
            shape of an existing garment.
            <br><br>

            <strong>Common alteration services include:</strong>
            <br>
            • Shortening or lengthening garments
            <br>
            • Waist adjustments
            <br>
            • Sleeve adjustments
            <br>
            • Tightening or loosening
            <br>
            • Size and fitting corrections
            <br><br>

            📌 <strong>Tip:</strong> Bring the garment and explain
            exactly where the fitting needs to be changed.
            <br><br>

            Would you like to <strong>find a nearby tailor</strong>
            for this service?
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
        text.includes("damage") ||
        text.includes("stitch came") ||
        text.includes("seam")
    ) {

        return `
            🪡 <strong>Clothing Repair</strong>
            <br><br>

            This sounds like a <strong>garment repair</strong>
            requirement.
            <br><br>

            Tailors can commonly help with:
            <br>
            • Torn or ripped fabric
            <br>
            • Broken or damaged zippers
            <br>
            • Loose seams
            <br>
            • Small holes
            <br>
            • Buttons and hooks
            <br>
            • Minor stitching damage
            <br><br>

            📸 If the damage is difficult to describe,
            you can show the tailor a photo of the garment.
            <br><br>

            Would you like to <strong>find a tailor near you</strong>
            who can handle the repair?
        `;

    }


    /* =====================================================
       EMBROIDERY
    ===================================================== */

    if (
        text.includes("embroidery") ||
        text.includes("embroider") ||
        text.includes("thread work") ||
        text.includes("handwork") ||
        text.includes("embellish") ||
        text.includes("embellishment") ||
        text.includes("sequin") ||
        text.includes("mirror work") ||
        text.includes("stone work")
    ) {

        return `
            ✨ <strong>Embroidery & Handwork</strong>
            <br><br>

            Your requirement sounds like <strong>embroidery or
            decorative handwork</strong>.
            <br><br>

            Depending on the design, a tailor or embroidery
            specialist may help with:
            <br>
            • Thread embroidery
            <br>
            • Zari work
            <br>
            • Mirror work
            <br>
            • Sequin work
            <br>
            • Bead and stone work
            <br>
            • Custom decorative patterns
            <br><br>

            🎨 <strong>Tip:</strong> A reference image can help
            the tailor understand the exact design you want.
            <br><br>

            You can use SILAI to find a tailor who specializes
            in the type of work you need.
        `;

    }


    /* =====================================================
       BLOUSE
    ===================================================== */

    if (
        text.includes("blouse") ||
        text.includes("saree blouse") ||
        text.includes("designer blouse") ||
        text.includes("blouse design")
    ) {

        return `
            👗 <strong>Blouse Stitching</strong>
            <br><br>

            I can help you find the right type of blouse
            tailoring service.
            <br><br>

            You can choose based on requirements such as:
            <br>
            • Basic blouse stitching
            <br>
            • Designer blouse
            <br>
            • Bridal blouse
            <br>
            • Back-neck designs
            <br>
            • Sleeveless or full-sleeve designs
            <br>
            • Embroidery and embellishments
            <br><br>

            📸 Have a reference design?
            Showing it to the tailor can make it easier to
            achieve the style you want.
            <br><br>

            Would you like to <strong>find blouse specialists
            near you</strong>?
        `;

    }


    /* =====================================================
       ETHNIC WEAR
    ===================================================== */

    if (
        text.includes("saree") ||
        text.includes("lehenga") ||
        text.includes("salwar") ||
        text.includes("anarkali") ||
        text.includes("ethnic") ||
        text.includes("traditional") ||
        text.includes("kurta") ||
        text.includes("kurti")
    ) {

        return `
            🪷 <strong>Ethnic Wear Tailoring</strong>
            <br><br>

            SILAI can help you find tailors for
            <strong>traditional and ethnic wear</strong>.
            <br><br>

            This can include:
            <br>
            • Saree blouse stitching
            <br>
            • Lehenga tailoring
            <br>
            • Anarkali suits
            <br>
            • Salwar suits
            <br>
            • Kurtas and kurtis
            <br>
            • Traditional outfit alterations
            <br><br>

            ✨ If you have a particular design in mind,
            you can share a reference image with the tailor.
            <br><br>

            I can help you identify the type of tailoring
            service you need.
        `;

    }


    /* =====================================================
       STITCHING
    ===================================================== */

    if (
        text.includes("stitch") ||
        text.includes("sew") ||
        text.includes("tailor") ||
        text.includes("make a") ||
        text.includes("make me") ||
        text.includes("shirt") ||
        text.includes("dress") ||
        text.includes("trouser") ||
        text.includes("pants") ||
        text.includes("skirt")
    ) {

        return `
            🧵 <strong>Custom Stitching</strong>
            <br><br>

            It sounds like you need a <strong>stitching
            service</strong>.
            <br><br>

            SILAI can help you find a tailor based on:
            <br>
            • Garment type
            <br>
            • Tailor's specialty
            <br>
            • Location
            <br>
            • Your design requirements
            <br><br>

            📸 <strong>Best approach:</strong> If you have a
            reference image, keep it ready so the tailor can
            understand the design and fitting you want.
            <br><br>

            Tell me what garment you want stitched and
            I'll help you identify the appropriate service.
        `;

    }


    /* =====================================================
       MEASUREMENT
    ===================================================== */

    if (
        text.includes("measurement") ||
        text.includes("measure") ||
        text.includes("body measurement") ||
        text.includes("my size") ||
        text.includes("how to measure") ||
        text.includes("measurements")
    ) {

        return `
            📏 <strong>Measurement Assistance</strong>
            <br><br>

            The measurements required depend on the garment
            you want to stitch.
            <br><br>

            <strong>Common measurements include:</strong>
            <br>
            • Shoulder
            <br>
            • Bust / Chest
            <br>
            • Waist
            <br>
            • Hip
            <br>
            • Sleeve length
            <br>
            • Armhole
            <br>
            • Garment length
            <br><br>

            📌 <strong>Tip:</strong> Use a soft measuring tape
            and avoid pulling it too tightly around the body.
            <br><br>

            Tell me what garment you're making
            <strong>(blouse, dress, shirt, kurti, etc.)</strong>
            and I can tell you which measurements are usually
            required.
        `;

    }


    /* =====================================================
       CUSTOM DESIGN
    ===================================================== */

    if (
        text.includes("custom") ||
        text.includes("design") ||
        text.includes("new outfit") ||
        text.includes("create") ||
        text.includes("outfit") ||
        text.includes("reference") ||
        text.includes("unique") ||
        text.includes("designer")
    ) {

        return `
            ✨ <strong>Custom Design</strong>
            <br><br>

            Want something made specifically for you?
            SILAI can connect you with tailors who work on
            <strong>custom-designed garments</strong>.
            <br><br>

            You can:
            <br>
            • Share a reference image
            <br>
            • Describe your preferred style
            <br>
            • Choose the type of fabric
            <br>
            • Discuss fitting requirements
            <br>
            • Request embroidery or other details
            <br><br>

            🎨 The more details you provide, the easier it is
            for the tailor to understand your requirements.
            <br><br>

            What kind of outfit are you planning to create?
        `;

    }


    /* =====================================================
       FABRIC
    ===================================================== */

    if (
        text.includes("fabric") ||
        text.includes("cloth") ||
        text.includes("material") ||
        text.includes("cotton") ||
        text.includes("silk") ||
        text.includes("linen") ||
        text.includes("velvet")
    ) {

        return `
            🧶 <strong>Fabric & Tailoring</strong>
            <br><br>

            The right fabric can make a big difference to
            the final fit and appearance of a garment.
            <br><br>

            Some common choices include:
            <br>
            • Cotton — comfortable and breathable
            <br>
            • Linen — lightweight and breathable
            <br>
            • Silk — smooth and elegant
            <br>
            • Velvet — structured and rich
            <br>
            • Chiffon — lightweight and flowy
            <br><br>

            The best fabric depends on the garment,
            design and desired fit.
            <br><br>

            Tell me what you're planning to stitch and
            I can suggest what to consider when choosing
            the fabric.
        `;

    }


    /* =====================================================
       FIND TAILOR
    ===================================================== */

    if (
        text.includes("find a tailor") ||
        text.includes("near me") ||
        text.includes("nearby") ||
        text.includes("closest tailor") ||
        text.includes("tailors near") ||
        text.includes("tailor near")
    ) {

        return `
            📍 <strong>Find a Tailor</strong>
            <br><br>

            SILAI can help you discover registered tailors
            based on their <strong>location and specialty</strong>.
            <br><br>

            You can look for tailors who specialize in:
            <br>
            • Stitching
            <br>
            • Alterations
            <br>
            • Blouse stitching
            <br>
            • Repairs
            <br>
            • Embroidery
            <br>
            • Custom designs
            <br><br>

            📍 Use <strong>"Find Near Me"</strong> to allow
            SILAI to show nearby tailoring options.
        `;

    }


    /* =====================================================
       BOOKING
    ===================================================== */

    if (
        text.includes("book") ||
        text.includes("appointment") ||
        text.includes("booking") ||
        text.includes("order")
    ) {

        return `
            📅 <strong>Booking a Tailor</strong>
            <br><br>

            Once you find a suitable tailor on SILAI,
            you can check their profile and choose the
            service you need.
            <br><br>

            Before confirming your request, it's useful to
            discuss:
            <br>
            • Garment type
            <br>
            • Design or reference
            <br>
            • Measurements
            <br>
            • Fabric requirements
            <br>
            • Any special instructions
            <br><br>

            This helps the tailor understand your
            requirements clearly.
        `;

    }


    /* =====================================================
       GENERAL TAILORING
    ===================================================== */

    if (
        text.includes("tailoring") ||
        text.includes("fashion") ||
        text.includes("clothes") ||
        text.includes("clothing") ||
        text.includes("garment") ||
        text.includes("dress")
    ) {

        return `
            👗 <strong>SILAI Tailoring Assistant</strong>
            <br><br>

            I can help you figure out what kind of tailoring
            service you need.
            <br><br>

            You can ask me about:
            <br>
            ✂️ Alterations
            <br>
            🧵 Stitching
            <br>
            👗 Blouse & ethnic wear
            <br>
            🪡 Clothing repairs
            <br>
            ✨ Embroidery & custom designs
            <br>
            📏 Measurements
            <br>
            🧶 Fabric selection
            <br>
            📍 Finding nearby tailors
            <br><br>

            Tell me what you're trying to make, fix or alter.
        `;

    }


    /* =====================================================
       DEFAULT
    ===================================================== */

    return `
        ✦ <strong>I'm here to help with your tailoring
        requirement.</strong>
        <br><br>

        Tell me what you need in simple words. For example:
        <br><br>

        ✂️ <strong>"My jeans are too long."</strong>
        <br>
        👗 <strong>"I need a bridal blouse stitched."</strong>
        <br>
        🪡 <strong>"My dress zip is broken."</strong>
        <br>
        ✨ <strong>"I want embroidery on my saree."</strong>
        <br>
        📏 <strong>"What measurements do I need for a kurti?"</strong>
        <br>
        📍 <strong>"Find a tailor near me."</strong>
        <br>
        🧶 <strong>"Which fabric is good for a summer dress?"</strong>
        <br><br>

        Describe your requirement and I'll guide you
        to the right tailoring service.
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
