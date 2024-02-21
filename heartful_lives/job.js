const jobs = [
    {
        title: "Job Opportunity 1",
        description: "This is a description of Job Opportunity 1.",
        image: "job1.jpg",
        link: "https://example.com/job1",
        id: 1
    },
    {
        title: "Job Opportunity 2",
        description: "This is a description of Job Opportunity 2.",
        image: "job2.jpg",
        link: "https://example.com/job2",
        id: 2
    },
    {
        title: "Job Opportunity 3",
        description: "This is a description of Job Opportunity 3.",
        image: "job3.jpg",
        link: "https://example.com/job3",
        id: 3
    }
];

const jobsContainer = document.getElementById("jobs");
const searchInput = document.getElementById("search");

jobs.forEach(job => {
    const jobBox = document.createElement("div");
    jobBox.classList.add("job-box");
    jobBox.setAttribute("data-id", job.id);

    const jobImage = document.createElement("img");
    jobImage.src = job.image;
    jobBox.appendChild(jobImage);

    const jobInfo = document.createElement("div");
    jobInfo.classList.add("job-info");
    jobBox.appendChild(jobInfo);

    const jobTitle = document.createElement("h2");
    jobTitle.textContent = job.title;
    jobInfo.appendChild(jobTitle);

    const jobDescription = document.createElement("p");
    jobDescription.textContent = job.description;
    jobInfo.appendChild(jobDescription);

    const jobButton = document.createElement("button");
    jobButton.textContent = "Apply";
    jobButton.addEventListener("click", () => {
        window.location.href = job.link;
    });
    jobInfo.appendChild(jobButton);

    jobsContainer.appendChild(jobBox);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const jobBoxes = document.getElementsByClassName("job-box");

    for (let i = 0; i < jobBoxes.length; i++) {
        const jobBox = jobBoxes[i];
        const jobTitle = jobBox.querySelector(".job-info h2");

        if (jobTitle.textContent.toLowerCase().includes(searchTerm)) {
            jobBox.style.display = "block";
        } else {
            jobBox.style.display = "none";
        }
    }
});