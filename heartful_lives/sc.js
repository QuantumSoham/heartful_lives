const scholarships = [
    {
        title: "Scholarship Opportunity 1",
        description: "This is a description of Scholarship Opportunity 1.",
        image: "./images/sc2.jpg"
    },
    {
        title: "Scholarship Opportunity 2",
        description: "This is a description of Scholarship Opportunity 2.",
        image: "./images/sc1.jpg"
    },
    {
        title: "Scholarship Opportunity 3",
        description: "This is a description of Scholarship Opportunity 3.",
        image: "./images/sc3.webp"
    }
];

const scholarshipsContainer = document.getElementById("scholarships");

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
    scholarshipInfo.appendChild(scholarshipButton);

    scholarshipsContainer.appendChild(scholarshipBox);
});