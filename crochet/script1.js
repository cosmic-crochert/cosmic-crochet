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

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});


// ========================================
// LANGUAGE SWITCH
// ========================================

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");


// ========================================
// ENGLISH
// ========================================

enBtn.addEventListener("click", () => {

    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";


    // Title
    document.getElementById("collectionTitle").textContent =
        "My Collection";


    // Product 1
    document.getElementById("name1").textContent =
        "Neptune Mini & Marsling";

    document.getElementById("desc1").textContent =
        "Tiny creatures that came from space!";

    document.getElementById("order1").textContent =
        "Order Now";


    // Product 2
    document.getElementById("name2").textContent =
        "Berry Orbit";

    document.getElementById("desc2").textContent =
        "A little galaxy wrapped around your hair!";

    document.getElementById("order2").textContent =
        "Order Now";


    // Product 3
    document.getElementById("name3").textContent =
        "Moonlight on Mars";

    document.getElementById("desc3").textContent =
        "A beautiful blend of warmth and mystery!";

    document.getElementById("order3").textContent =
        "Order Now";


    // Product 4
    document.getElementById("name4").textContent =
        "Berry Nebula";

    document.getElementById("desc4").textContent =
        "A dreamy berry bag with a touch of cosmic charm!";

    document.getElementById("order4").textContent =
        "Order Now";


    // Product 5
    document.getElementById("name5").textContent =
        "Milky Way Tote";

    document.getElementById("desc5").textContent =
        "A soft celestial tote for everyday adventures!";

    document.getElementById("order5").textContent =
        "Order Now";


    // Product 6
    document.getElementById("name6").textContent =
        "Moonstar";

    document.getElementById("desc6").textContent =
        "A little moon shining beside a star!";

    document.getElementById("order6").textContent =
        "Order Now";


    // Product 7
    document.getElementById("name7").textContent =
        "Heart of Mars";

    document.getElementById("desc7").textContent =
        "A cozy little heart inspired by the warmth of Mars!";

    document.getElementById("order7").textContent =
        "Order Now";


    // Product 8
    document.getElementById("name8").textContent =
        "Little Marsling";

    document.getElementById("desc8").textContent =
        "A cute little alien who came to Earth!";

    document.getElementById("order8").textContent =
        "Order Now";


    // Product 9
    document.getElementById("name9").textContent =
        "Tiny Mars Bear";

    document.getElementById("desc9").textContent =
        "Cozy + funny = the cutest little Marsling!";

    document.getElementById("order9").textContent =
        "Order Now";


    // Product 10
    document.getElementById("name10").textContent =
        "Cosmic Stars";

    document.getElementById("desc10").textContent =
        "Midnight, ocean blue, and berry red — a wonderful cosmic mix!";

    document.getElementById("order10").textContent =
        "Order Now";


    // Product 11
    document.getElementById("name11").textContent =
        "Moonlight Bow";

    document.getElementById("desc11").textContent =
        "Would you like to add a little star to your hair or your bag?";

    document.getElementById("order11").textContent =
        "Order Now";


    // Product 12
    document.getElementById("name12").textContent =
        "Sky Orbit";

    document.getElementById("desc12").textContent =
        "Waves between the ocean, the sky, and pure calm.";

    document.getElementById("order12").textContent =
        "Order Now";

});


// ========================================
// ARABIC
// ========================================

arBtn.addEventListener("click", () => {

    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";


    // Title
    document.getElementById("collectionTitle").textContent =
        "مجموعتي";


    // Product 1
    document.getElementById("name1").textContent =
        "نيبتون ميني ومارسِلِنغ";

    document.getElementById("desc1").textContent =
        "مخلوقات صغيرة جاءت من الفضاء!";

    document.getElementById("order1").textContent =
        "اطلبي الآن";


    // Product 2
    document.getElementById("name2").textContent =
        "بيري أوربت";

    document.getElementById("desc2").textContent =
        "مجرة صغيرة تلتف حول شعرك!";

    document.getElementById("order2").textContent =
        "اطلبي الآن";


    // Product 3
    document.getElementById("name3").textContent =
        "ضوء القمر على المريخ";

    document.getElementById("desc3").textContent =
        "مزيج جميل من الدفء والغموض!";

    document.getElementById("order3").textContent =
        "اطلبي الآن";


    // Product 4
    document.getElementById("name4").textContent =
        "سديم التوت";

    document.getElementById("desc4").textContent =
        "حقيبة بلون التوت بلمسة من سحر الكون!";

    document.getElementById("order4").textContent =
        "اطلبي الآن";


    // Product 5
    document.getElementById("name5").textContent =
        "حقيبة درب التبانة";

    document.getElementById("desc5").textContent =
        "حقيبة سماوية ناعمة لمغامراتك اليومية!";

    document.getElementById("order5").textContent =
        "اطلبي الآن";


    // Product 6
    document.getElementById("name6").textContent =
        "مون ستار";

    document.getElementById("desc6").textContent =
        "قمر صغير يضيء بجانب نجمة!";

    document.getElementById("order6").textContent =
        "اطلبي الآن";


    // Product 7
    document.getElementById("name7").textContent =
        "قلب المريخ";

    document.getElementById("desc7").textContent =
        "قلب صغير ودافئ مستوحى من دفء المريخ!";

    document.getElementById("order7").textContent =
        "اطلبي الآن";


    // Product 8
    document.getElementById("name8").textContent =
        "مارسِلِنغ الصغير";

    document.getElementById("desc8").textContent =
        "كائن فضائي لطيف جاء إلى الأرض!";

    document.getElementById("order8").textContent =
        "اطلبي الآن";


    // Product 9
    document.getElementById("name9").textContent =
        "دب المريخ الصغير";

    document.getElementById("desc9").textContent =
        "دفء + مرح = ألطف مارسِلِنغ!";

    document.getElementById("order9").textContent =
        "اطلبي الآن";


    // Product 10
    document.getElementById("name10").textContent =
        "نجوم كونية";

    document.getElementById("desc10").textContent =
        "مزيج رائع من لون منتصف الليل والأزرق السماوي والأحمر التوتي!";

    document.getElementById("order10").textContent =
        "اطلبي الآن";


    // Product 11
    document.getElementById("name11").textContent =
        "فيونكة ضوء القمر";

    document.getElementById("desc11").textContent =
        "ما رأيكِ بإضافة نجمة صغيرة إلى شعركِ أو حقيبتكِ؟";

    document.getElementById("order11").textContent =
        "اطلبي الآن";


    // Product 12
    document.getElementById("name12").textContent =
        "مدار السماء";

    document.getElementById("desc12").textContent =
        "موجات بين المحيط والسماء وهدوء لا ينتهي.";

    document.getElementById("order12").textContent =
        "اطلبي الآن";

});