// ========================================
// LANGUAGE BUTTONS
// ========================================

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");


// ========================================
// TRANSLATIONS
// ========================================

const translations = {

    en: {
        title: "Cosmic Crochet",

        welcome:
            "Explore a universe of handmade creations",

        explore:
            "Explore Collection",

        intro:
            "Welcome to Cosmic Crochet, a little space filled with handmade crochet pieces, crafted with care, creativity, and love. Every piece is made to bring a unique touch of warmth, charm, and magic into your everyday life."
    },

    ar: {
        title: "كوزمك كروشيه",

        welcome:
            "اكتشف عالمًا من القطع المصنوعة يدويًا",

        explore:
            "استكشف المجموعة",

        intro:
            "أهلًا بك في كوزمك كروشيه، مساحة صغيرة مليئة بقطع الكروشيه المصنوعة يدويًا، بحب وإبداع واهتمام. صُممت كل قطعة لتضيف لمسة مميزة من الدفء والجمال والسحر إلى يومك."
    }

};


// ========================================
// CHANGE LANGUAGE
// ========================================

function setLanguage(language) {

    // Save language
    localStorage.setItem("cosmicLanguage", language);

    // Change page direction
    if (language === "ar") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

    }


    // Change texts
    document.getElementById("titleText").textContent =
        translations[language].title;

    document.getElementById("welcomeText").textContent =
        translations[language].welcome;

    document.getElementById("exploreBtn").textContent =
        translations[language].explore;

    document.getElementById("introText").textContent =
        translations[language].intro;
}


// ========================================
// ENGLISH BUTTON
// ========================================

enBtn.addEventListener("click", () => {

    setLanguage("en");

});


// ========================================
// ARABIC BUTTON
// ========================================

arBtn.addEventListener("click", () => {

    setLanguage("ar");

});


// ========================================
// LOAD SAVED LANGUAGE
// ========================================

const savedLanguage =
    localStorage.getItem("cosmicLanguage") || "en";

setLanguage(savedLanguage);