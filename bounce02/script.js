const translations = {
    en: {
        button: "العربية",
        aboutTitle: "About Me",
        aboutText: "I am Hiba Alshaweesh, a Network Security Engineering graduate.",
        skillsTitle: "Skills",
        skillsText: "Networking, Cybersecurity, HTML, CSS, JavaScript and Python.",
        projectsTitle: "Projects",
        projectsText: "I have worked on networking, cybersecurity and web development projects."
    },

    ar: {
        button: "English",
        aboutTitle: "عني",
        aboutText: "أنا هبة الشاويش، خريجة هندسة أمن الشبكات.",
        skillsTitle: "المهارات",
        skillsText: "الشبكات، الأمن السيبراني، HTML، CSS، JavaScript وPython.",
        projectsTitle: "المشاريع",
        projectsText: "عملت على مشاريع في الشبكات والأمن السيبراني وتطوير الويب."
    }
};

let currentLanguage = "en";

const languageButton = document.getElementById("language-button");

languageButton.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    document.getElementById("about-title").textContent =
        translations[currentLanguage].aboutTitle;

    document.getElementById("about-text").textContent =
        translations[currentLanguage].aboutText;

    document.getElementById("skills-title").textContent =
        translations[currentLanguage].skillsTitle;

    document.getElementById("skills-text").textContent =
        translations[currentLanguage].skillsText;

    document.getElementById("projects-title").textContent =
        translations[currentLanguage].projectsTitle;

    document.getElementById("projects-text").textContent =
        translations[currentLanguage].projectsText;

    languageButton.textContent =
        translations[currentLanguage].button;

    document.documentElement.lang = currentLanguage;

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }
});