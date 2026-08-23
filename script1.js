// ========================================
// IMAGE POPUP
// ========================================

const images = document.querySelectorAll(".products img");
const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.querySelector(".close");

images.forEach((image) => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";
        popupImage.src = image.src;
        popupImage.alt = image.alt;

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        popup.style.display = "none";

    });

}

if (popup) {

    popup.addEventListener("click", (event) => {

        if (event.target === popup) {

            popup.style.display = "none";

        }

    });

}

// ========================================
// LANGUAGE
// ========================================

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

let currentLanguage =
    localStorage.getItem("cosmicLanguage") || "en";

// ========================================
// PRODUCT DATA
// ========================================

const productsDetails = {

    1: {
        image: "PH/ph1.png",

        name: "Neptune Mini & Marsling",
        nameAr: "نيبتون ميني ومارسِلِنغ",

        description: "Tiny creatures that came from space!",
        descriptionAr: "مخلوقات صغيرة جاءت من الفضاء!",

        dimensions: "Height: 5 cm, Width: 7 cm",
        dimensionsAr: "الارتفاع: 5 سم، العرض: 7 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "150 SYP"
    },

    2: {
        image: "PH/ph2.png",

        name: "Berry Orbit",
        nameAr: "بيري أوربت",

        description: "A little galaxy wrapped around your hair!",
        descriptionAr: "مجرة صغيرة تلتف حول شعرك!",

        dimensions: "Length: 22 cm, Width: 5.5 cm",
        dimensionsAr: "الطول: 22 سم، العرض: 5.5 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "175 SYP"
    },

    3: {
        image: "PH/ph3.png",

        name: "Moonlight on Mars",
        nameAr: "ضوء القمر على المريخ",

        description: "A beautiful blend of warmth and mystery!",
        descriptionAr: "مزيج جميل من الدفء والغموض!",

        dimensions: "No dimensions added yet",
        dimensionsAr: "لم تتم إضافة المقاسات بعد",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "250 SYP"
    },

    4: {
        image: "PH/ph4.png",

        name: "Berry Nebula",
        nameAr: "سديم التوت",

        description: "A dreamy berry bag with a touch of cosmic charm!",
        descriptionAr: "حقيبة بلون التوت بلمسة من سحر الكون!",

        dimensions: "Width: 18 cm, Length: 28 cm",
        dimensionsAr: "العرض: 18 سم، الطول: 28 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "400 SYP"
    },

    5: {
        image: "PH/ph5.png",

        name: "Milky Way Tote",
        nameAr: "حقيبة درب التبانة",

        description: "A soft celestial tote for everyday adventures!",
        descriptionAr: "حقيبة سماوية ناعمة لمغامراتك اليومية!",

        dimensions: "Length: 14 cm, Width: 29 cm",
        dimensionsAr: "الطول: 14 سم، العرض: 29 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "350 SYP"
    },

    6: {
        image: "PH/ph6.png",

        name: "Moonstar",
        nameAr: "مون ستار",

        description: "A little moon shining beside a star!",
        descriptionAr: "قمر صغير يضيء بجانب نجمة!",

        dimensions: "No dimensions added yet",
        dimensionsAr: "لم تتم إضافة المقاسات بعد",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "300 SYP"
    },

    7: {
        image: "PH/ph7.png",

        name: "Heart of Mars",
        nameAr: "قلب المريخ",

        description: "A cozy little heart inspired by the warmth of Mars!",
        descriptionAr: "قلب صغير ودافئ مستوحى من دفء المريخ!",

        dimensions: "Width: 9 cm, Length: 7 cm",
        dimensionsAr: "العرض: 9 سم، الطول: 7 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "125 SYP"
    },

    8: {
        image: "PH/ph8.png",

        name: "Little Marsling",
        nameAr: "مارسِلِنغ الصغير",

        description: "A cute little alien who came to Earth!",
        descriptionAr: "كائن فضائي لطيف جاء إلى الأرض!",

        dimensions: "Body: Length 5 cm, Width 6.5 cm, Head: 7 cm",
        dimensionsAr: "الجسم: الطول 5 سم، العرض 6.5 سم، الرأس: 7 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "150 SYP"
    },

    9: {
        image: "PH/ph9.png",

        name: "Tiny Mars Bear",
        nameAr: "دب المريخ الصغير",

        description: "Cozy + funny = the cutest little Marsling!",
        descriptionAr: "دفء + مرح = ألطف مارسِلِنغ!",

        dimensions: "Diameter: 8 cm",
        dimensionsAr: "القطر: 8 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "100 SYP"
    },

    10: {
        image: "PH/ph10.png",

        name: "Cosmic Stars",
        nameAr: "نجوم كونية",

        description:
            "Midnight, ocean blue, and berry red — a wonderful cosmic mix!",

        descriptionAr:
            "مزيج رائع من لون منتصف الليل والأزرق السماوي والأحمر التوتي!",

        dimensions: "Width: 9 cm, Length: 9 cm",
        dimensionsAr: "العرض: 9 سم، الطول: 9 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "100 SYP"
    },

    11: {
        image: "PH/ph11.png",

        name: "Moonlight Bow",
        nameAr: "فيونكة ضوء القمر",

        description:
            "Would you like to add a little star to your hair or your bag?",

        descriptionAr:
            "ما رأيكِ بإضافة نجمة صغيرة إلى شعركِ أو حقيبتكِ؟",

        dimensions: "Bow knot: 7 cm, Tail: 5 cm",
        dimensionsAr: "العقدة: 7 سم، الساق: 5 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "50 SYP"
    },

    12: {
        image: "PH/ph12.png",

        name: "Sky Orbit",
        nameAr: "مدار السماء",

        description:
            "Waves between the ocean, the sky, and pure calm.",

        descriptionAr:
            "موجات بين المحيط والسماء وهدوء لا ينتهي.",

        dimensions: "Width: 60 cm, Length: 26.5 cm",
        dimensionsAr: "العرض: 60 سم، الطول: 26.5 سم",

        material: "100% Acrylic",
        materialAr: "أكريليك 100%",

        price: "50 SYP"
    }

};

// ========================================
// INSTAGRAM ORDER
// ========================================

const instagramDM =
    "https://ig.me/m/cosmiccrochet26";

let selectedProductId = null;

function getOrderMessage(product) {

    if (currentLanguage === "ar") {

        return (
            "مرحباً! 👋\n" +
            "أريد طلب " +
            product.nameAr +
            " من Cosmic Crochet.\n" +
            "هل هو متوفر؟ ✨"
        );

    }

    return (
        "Hi! 👋\n" +
        "I'd like to order " +
        product.name +
        " from Cosmic Crochet.\n" +
        "Is it available? ✨"
    );

}

function orderProduct(product) {

    const message = getOrderMessage(product);

    if (navigator.clipboard) {

        navigator.clipboard.writeText(message)
            .catch(() => { });

    }

    window.open(instagramDM, "_blank");

}

// ========================================
// ORDER BUTTONS
// ========================================

const orderButtons =
    document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const productId =
            button.id.replace("order", "");

        const product =
            productsDetails[productId];

        if (product) {

            orderProduct(product);

        }

    });

});

// ========================================
// DETAILS ELEMENTS
// ========================================

const detailsPopup =
    document.getElementById("detailsPopup");

const detailsClose =
    document.getElementById("detailsClose");

const detailsImage =
    document.getElementById("detailsImage");

const detailsName =
    document.getElementById("detailsName");

const detailsDescription =
    document.getElementById("detailsDescription");

const detailsDimensions =
    document.getElementById("detailsDimensions");

const detailsMaterial =
    document.getElementById("detailsMaterial");

const detailsPrice =
    document.getElementById("detailsPrice");

const detailsOrder =
    document.getElementById("detailsOrder");

const dimensionsLabel =
    document.getElementById("dimensionsLabel");

const materialLabel =
    document.getElementById("materialLabel");

const detailsButtons =
    document.querySelectorAll(".details-btn");

// ========================================
// UPDATE DETAILS BUTTON LANGUAGE
// ========================================

function updateDetailsButtons() {

    detailsButtons.forEach((button) => {

        if (currentLanguage === "ar") {

            button.textContent =
                "المزيد من التفاصيل";

        } else {

            button.textContent =
                "More Details";

        }

    });

}

// ========================================
// OPEN PRODUCT DETAILS
// ========================================

detailsButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const productId =
            button.dataset.product;

        const product =
            productsDetails[productId];

        selectedProductId =
            productId;

        detailsImage.src =
            product.image;

        if (currentLanguage === "ar") {

            detailsName.textContent =
                product.nameAr;

            detailsDescription.textContent =
                product.descriptionAr;

            detailsDimensions.textContent =
                product.dimensionsAr;

            detailsMaterial.textContent =
                product.materialAr;

            detailsPrice.textContent =
                product.price;

            detailsOrder.textContent =
                "اطلب الآن";

            dimensionsLabel.textContent =
                "المقاسات";

            materialLabel.textContent =
                "الخامة";

            detailsPopup.dir =
                "rtl";

        } else {

            detailsName.textContent =
                product.name;

            detailsDescription.textContent =
                product.description;

            detailsDimensions.textContent =
                product.dimensions;

            detailsMaterial.textContent =
                product.material;

            detailsPrice.textContent =
                product.price;

            detailsOrder.textContent =
                "Order Now";

            dimensionsLabel.textContent =
                "Dimensions";

            materialLabel.textContent =
                "Material";

            detailsPopup.dir =
                "ltr";

        }

        detailsPopup.style.display =
            "flex";

    });

});

// ========================================
// ORDER FROM DETAILS
// ========================================

if (detailsOrder) {

    detailsOrder.addEventListener("click", (event) => {

        event.preventDefault();

        if (!selectedProductId) {

            return;

        }

        const product =
            productsDetails[selectedProductId];

        if (product) {

            orderProduct(product);

        }

    });

}

// ========================================
// CLOSE DETAILS
// ========================================

if (detailsClose) {

    detailsClose.addEventListener("click", () => {

        detailsPopup.style.display =
            "none";

    });

}

if (detailsPopup) {

    detailsPopup.addEventListener("click", (event) => {

        if (event.target === detailsPopup) {

            detailsPopup.style.display =
                "none";

        }

    });

}

// ========================================
// ENGLISH
// ========================================

function setEnglish() {

    currentLanguage =
        "en";

    localStorage.setItem(
        "cosmicLanguage",
        "en"
    );

    document.documentElement.dir =
        "ltr";

    document.documentElement.lang =
        "en";

    document.getElementById(
        "collectionTitle"
    ).textContent =
        "My Collection";

    for (let i = 1; i <= 12; i++) {

        const product =
            productsDetails[i];

        document.getElementById(
            name$,{ i }`
).textContent =
product.name;

document.getElementById(
desc${i}`
        ).textContent =
            product.description;

        document.getElementById(
            order$,{ i }`
).textContent =
"Order Now";

}

const mainMenu =
document.getElementById("mainMenu");

if (mainMenu) {

mainMenu.textContent =
"Main Menu";

}

updateDetailsButtons();

}

// ========================================
// ARABIC
// ========================================

function setArabic() {

currentLanguage =
"ar";

localStorage.setItem(
"cosmicLanguage",
"ar"
);

document.documentElement.dir =
"rtl";

document.documentElement.lang =
"ar";

document.getElementById(
"collectionTitle"
).textContent =
"مجموعتي";

const namesAr = [

"نيبتون ميني ومارسِلِنغ",
"بيري أوربت",
"ضوء القمر على المريخ",
"سديم التوت",
"حقيبة درب التبانة",
"مون ستار",
"قلب المريخ",
"مارسِلِنغ الصغير",
"دب المريخ الصغير",
"نجوم كونية",
"فيونكة ضوء القمر",
"مدار السماء"

];

const descriptionsAr = [

"مخلوقات صغيرة جاءت من الفضاء!",
"مجرة صغيرة تلتف حول شعرك!",
"مزيج جميل من الدفء والغموض!",
"حقيبة بلون التوت بلمسة من سحر الكون!",
"حقيبة سماوية ناعمة لمغامراتك اليومية!",
"قمر صغير يضيء بجانب نجمة!",
"قلب صغير ودافئ مستوحى من دفء المريخ!",
"كائن فضائي لطيف جاء إلى الأرض!",
"دفء + مرح = ألطف مارسِلِنغ!",
"مزيج رائع من لون منتصف الليل والأزرق السماوي والأحمر التوتي!",
"ما رأيكِ بإضافة نجمة صغيرة إلى شعركِ أو حقيبتكِ؟",
"موجات بين المحيط والسماء وهدوء لا ينتهي."

];

for (let i = 1; i <= 12; i++) {

document.getElementById(
name${i}`
        ).textContent =
            namesAr[i - 1];

        document.getElementById(
            desc$,{ i }`
).textContent =
descriptionsAr[i - 1];

document.getElementById(
order${i}`
        ).textContent =
            "اطلب الآن";

    }

    const mainMenu =
        document.getElementById("mainMenu");

    if (mainMenu) {

        mainMenu.textContent =
            "القائمة الرئيسية";

    }

    updateDetailsButtons();

}

// ========================================
// LANGUAGE BUTTONS
// ========================================

if (enBtn) {

    enBtn.addEventListener(
        "click",
        setEnglish
    );

}

if (arBtn) {

    arBtn.addEventListener(
        "click",
        setArabic
    );

}

// ========================================
// LOAD SAVED LANGUAGE
// ========================================

if (currentLanguage === "ar") {

    setArabic();

} else {

    setEnglish();

}