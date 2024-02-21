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
    }
];

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