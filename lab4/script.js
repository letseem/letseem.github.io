// script.js
let resumeData;
const storedData = localStorage.getItem("resumeData");

if (storedData) {
    resumeData = JSON.parse(storedData);
} else {
    resumeData = {
        name: "Məhəmməd Baloğlanov",
        title: "Full Stack Dev.",
        location: "Narimanov, Baku",
        phone: "+994552777777",
        email: "mhmd@gmail.com",
        website: "www.example.com",
        profileImage: "ung.png",
        skills: [
            { name: "HTML", level: "80%" },
            { name: "CSS", level: "70%" },
            { name: "JS", level: "60%" },
            { name: "REACT", level: "68%" }
        ],
        languages: [
            { name: "Azerbaijani", level: "100%" },
            { name: "English", level: "67%" },
            { name: "Turkish", level: "96%" }
        ],
        about: "Passionate Full Stack Developer with a keen interest in building efficient and scalable web applications. Always excited to learn new technologies.",
        workExperience: [
            {
                date: "2013 - 2015",
                title: "Junior Developer",
                description: "Worked on small projects and supported senior developers in debugging and testing."
            },
            {
                date: "2015 - 2017",
                title: "Mid-level Developer",
                description: "Developed multiple client-side applications and helped mentor interns."
            },
            {
                date: "2017 - Present",
                title: "Senior Full Stack Developer",
                description: "Leading a team of developers and delivering full-scale web projects."
            }
        ],
        education: [
            {
                date: "2024 - 2028",
                title: "Bachelor's of Information Security (Azerbaijan Technical University)",
                description: "Focused on cybersecurity principles, software development, and network security."
            },
            {
                date: "2013 - 2024",
                title: "N.3 Middle school, Masally",
                description: "Graduated with honors in general education with a focus on IT subjects."
            }
        ]
    };
}


// Fill the basic info
document.querySelector(".resume_profile img").src = resumeData.profileImage;
document.querySelector(".resume_info .bold").innerText = resumeData.name;
document.querySelector(".resume_info .regular").innerText = resumeData.title;

const infoItems = document.querySelectorAll(".resume_info ul li .data");
infoItems[0].innerHTML = resumeData.location;
infoItems[1].innerHTML = resumeData.phone;
infoItems[2].innerHTML = resumeData.email;
infoItems[3].innerHTML = resumeData.website;

// Fill About Me
document.querySelector(".resume_about p").innerText = resumeData.about;

// Fill Skills
const skillsList = document.getElementById("resume_skills");
skillsList.innerHTML = ""; // Clear existing
resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="skill_name">${skill.name}</div>
        <div class="skill_progress">
            <span style="width: ${skill.level};"></span>
        </div>
        <div class="skill_per">${skill.level}</div>
    `;
    skillsList.appendChild(li);
});

// Fill Languages
const languagesList = document.getElementById("language_skills");
languagesList.innerHTML = ""; // Clear existing
resumeData.languages.forEach(language => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="skill_name">${language.name}</div>
        <div class="skill_progress">
            <span style="width: ${language.level};"></span>
        </div>
        <div class="skill_per">${language.level}</div>
    `;
    languagesList.appendChild(li);
});

// Fill Work Experience
const workList = document.getElementById("work_skills");
workList.innerHTML = ""; // Clear existing
resumeData.workExperience.forEach(work => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="date">${work.date}</div>
        <div class="info">
            <p class="semi-bold">${work.title}</p>
            <p>${work.description}</p>
        </div>
    `;
    workList.appendChild(li);
});

// Fill Education
const educationList = document.getElementById("education_skills");
educationList.innerHTML = ""; // Clear existing
resumeData.education.forEach(edu => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="date">${edu.date}</div>
        <div class="info">
            <p class="semi-bold">${edu.title}</p>
            <p>${edu.description}</p>
        </div>
    `;
    educationList.appendChild(li);
});

let wExpanded = false;
let eExpanded = false;

// Functions for expanding/collapsing Work and Education
function expandWork() {
    wExpanded = !wExpanded;
    const workSection = document.getElementById("work_skills");
    workSection.style.height = wExpanded ? "auto" : "0";
    
    // Toggle plus/minus icon
    const plusBtn = document.querySelector(".resume_work .plus-btn i");
    plusBtn.className = wExpanded ? "fas fa-minus" : "fas fa-plus";
}

function expandEducation() {
    eExpanded = !eExpanded;
    const eduSection = document.getElementById("education_skills");
    eduSection.style.height = eExpanded ? "auto" : "0";
    
    // Toggle plus/minus icon
    const plusBtn = document.querySelector(".resume_education .plus-btn i");
    plusBtn.className = eExpanded ? "fas fa-minus" : "fas fa-plus";
}

// Functions for adding skills and languages
function addSkill() {
    const skillName = prompt("Enter skill name:");
    const skillLevel = prompt("Enter skill level (%):");

    if (skillName && skillLevel && skillLevel >= 0 && skillLevel <= 100) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="skill_name">${skillName}</div>
            <div class="skill_progress">
                <span style="width: ${skillLevel}px;"></span>
            </div>
            <div class="skill_per">${skillLevel}%</div>
        `;
        document.getElementById("resume_skills").appendChild(li);
        resumeData.skills.push({ name: skillName, level: `${skillLevel}%` });
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } else {
        alert("Xəta: Bacarıq səviyyəsi 0-100 arasında olmalıdır!");
    }
}

function addLanguage() {
    const languageName = prompt("Enter language name:");
    const languageLevel = prompt("Enter language level (%):");

    if (languageName && languageLevel && languageLevel >= 0 && languageLevel <= 100) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="skill_name">${languageName}</div>
            <div class="skill_progress">
                <span style="width: ${languageLevel}px;"></span>
            </div>
            <div class="skill_per">${languageLevel}%</div>
        `;
        document.getElementById("language_skills").appendChild(li);
        resumeData.languages.push({ name: languageName, level: `${languageLevel}%` });
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } else {
        alert("Xəta: Dil səviyyəsi 0-100 arasında olmalıdır!");
    }
}

function editLocation() {
    const location = prompt("Enter location:");
    if (location) {
        document.querySelectorAll(".resume_info ul li .data")[0].innerText = location;
    }
}

function editPhone() {
    const phone = prompt("Enter phone number:");
    if (phone && phone.startsWith("+") && /^\d+$/.test(phone.slice(1))) {
        document.querySelectorAll(".resume_info ul li .data")[1].innerText = phone;
        resumeData.phone = phone;
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } else {
        alert("Xəta: Nömrə formatı düzgün deyil!");
    }
}

function editEmail() {
    const email = prompt("Enter email:");
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.querySelectorAll(".resume_info ul li .data")[2].innerText = email;
        resumeData.email = email;
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } else {
        alert("Xəta: Email formatı düzgün deyil!");
    }
}

function editWebsite() {
    const website = prompt("Enter website:");
    if (website && /^([\w-]+\.){1,3}[\w-]+$/.test(website)) {
        document.querySelectorAll(".resume_info ul li .data")[3].innerText = website;
        resumeData.website = website;
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } else {
        alert("Xəta: Səhifə formatı düzgün deyil!");
    }
}
