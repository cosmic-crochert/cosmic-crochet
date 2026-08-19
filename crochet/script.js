const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

enBtn.addEventListener("click", () => {
    document.getElementById("titleText").textContent = "Cosmic Crochet";
    document.getElementById("welcomeText").textContent =
        "Explore a universe of handmade creations";
    document.getElementById("exploreBtn").textContent =
        "Explore Collection";
    document.getElementById("introText").textContent =
        "Welcome to Cosmic Crochet, a little space filled with handmade crochet pieces, crafted with care, creativity, and love. Every piece is made to bring a unique touch of warmth, charm, and magic into your everyday life.";
});

arBtn.addEventListener("click", () => {
    document.getElementById("titleText").textContent = "كوزمك كروشيه";
    document.getElementById("welcomeText").textContent =
        "اكتشف عالمًا من القطع المصنوعة يدويًا";
    document.getElementById("exploreBtn").textContent =
        "استكشف المجموعة";
    document.getElementById("introText").textContent =
        "أهلًا بك في كوزمك كروشيه، مساحة صغيرة مليئة بقطع الكروشيه المصنوعة يدويًا، بحب وإبداع واهتمام. صُممت كل قطعة لتضيف لمسة مميزة من الدفء والجمال والسحر إلى يومك.";
});