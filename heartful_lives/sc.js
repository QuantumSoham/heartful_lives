const scholarships = [
    {
        title: "Scholarship Opportunity 1",
        description: "This is a description of Scholarship Opportunity 1.",
        image: "./images/sc2.jpg",
        link: "https://example.com/scholarship1"
    },
    {
        title: "Scholarship Opportunity 2",
        description: "This is a description of Scholarship Opportunity 2.",
        image: "./images/sc1.jpg",
        link: "https://example.com/scholarship2"
    },
    {
        title: "Scholarship Opportunity 3",
        description: "This is a description of Scholarship Opportunity 3.",
        image: "./images/sc3.webp",
        link: "https://example.com/scholarship3"
    },
{ "title": "Post-Matric Scholarship Scheme for Transgender Students", "description": "A scholarship scheme for transgender students studying in classes IX and above, providing financial assistance for tuition, examination fees, maintenance allowance, and other study-related expenses.", "image": "https://via.placeholder.com/150", "link": "https://scholarships.gov.in/" }, { "title": "PM Poshan Scholarship Scheme", "description": "A scholarship scheme for students from Scheduled Castes, Scheduled Tribes, Other Backward Classes, and Economically Weaker Sections, including transgender students, with merit and top-class scholarship opportunities.", "image": "https://via.placeholder.com/150", "link": "https://socialjustice.gov.in/" }, { "title": "TG Certificate and ID Card Facility for Transgender People in India", "description": "A national portal for transgender persons to apply for a TG Certificate and ID Card, recognizing their self-identified gender and providing crucial documentation for accessing various rights and benefits.", "image": "https://via.placeholder.com/150", "link": "https://transgender.dosje.gov.in/Applicant/" }, { "title": "Skill Development Training for Transgenders in India by the Government", "description": "Various skill development training programs for transgender individuals, empowering them with the necessary tools to secure employment and achieve financial independence.", "image": "https://via.placeholder.com/150", "link": "https://nsdcindia.org/" }, { "title": "Composite Medical Health for Transgenders in India", "description": "A comprehensive health insurance program specifically designed for transgender individuals, covering hormone therapy, sex reassignment surgery, mental health services, and other medical needs.", "image": "https://via.placeholder.com/150", "link": "https://transgender.dosje.gov.in/Applicant/Registration/DisplayForm4" }];

const scholarshipsContainer = document.getElementById("scholarships");
const searchInput = document.getElementById("search");

scholarships.forEach(scholarship => {
    const scholarshipBox = document.createElement("div");
    scholarshipBox.classList.add("scholarship-box");

    const scholarshipImage = document.createElement("img");
    scholarshipImage.src = scholarship.image;
    scholarshipBox.appendChild(scholarshipImage);

    const scholarshipInfo = document.createElement("div");
    scholarshipInfo.classList.add("scholarship-info");
    scholarshipBox.appendChild(scholarshipInfo);

    const scholarshipTitle = document.createElement("h2");
    scholarshipTitle.textContent = scholarship.title;
    scholarshipInfo.appendChild(scholarshipTitle);

    const scholarshipDescription = document.createElement("p");
    scholarshipDescription.textContent = scholarship.description;
    scholarshipInfo.appendChild(scholarshipDescription);

    const scholarshipButton = document.createElement("button");
    scholarshipButton.textContent = "Apply";
    scholarshipButton.addEventListener("click", () => {
        window.location.href = scholarship.link;
    });
    scholarshipInfo.appendChild(scholarshipButton);

    scholarshipsContainer.appendChild(scholarshipBox);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const scBoxes = document.getElementsByClassName("scholarship-box");

    for (let i = 0; i < scBoxes.length; i++) {
        const scBox = scBoxes[i];
        const scTitle = scBox.querySelector(".scholarship-info h2");

        if (scTitle.textContent.toLowerCase().includes(searchTerm)) {
            scBox.style.display = "block";
        } else {
            scBox.style.display = "none";
        }
    }
});