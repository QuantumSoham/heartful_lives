const rights = [
    {
      name: "Right to Self-Identification",
      description: "Transgender individuals have the right to self-identify their gender, regardless of the sex assigned to them at birth...",
      link: "https://transgenderlawcenter.org/self-id"
    },
    {
      name: "Right to Non-Discrimination",
      description: "Transgender individuals have the right to be free from discrimination on the basis of their gender identity or expression...",
      link: "https://www.hrw.org/topic/lgbt-rights/transgender-rights"
    },
    {
      name: "Right to Privacy",
      description: "Transgender individuals have the right to privacy regarding their gender identity and expression...",
      link: "https://www.aclu.org/know-your-rights/transgender-rights/"
    },
    {
      name: "Right to Health Care",
      description: "Transgender individuals have the right to access healthcare that is appropriate for their gender identity and expression...",
      link: "https://www.lambdalegal.org/know-your-rights/transgender-rights/transgender-health-care"
    },
    {
      name: "Right to Education",
      description: "Transgender individuals have the right to access education on an equal basis with others, regardless of their gender identity or expression...",
      link: "https://www.glsen.org/article/transgender-students-rights-schools"
    },
    {
      name: "Right to Employment",
      description: "Transgender individuals have the right to work and to be free from discrimination on the basis of their gender identity or expression...",
      link: "https://www.eeoc.gov/laws/guidance/transgender-employees"
    },
    {
      name: "Right to Housing",
      description: "Transgender individuals have the right to access housing on an equal basis with others, regardless of their gender identity or expression...",
      link: "https://www.hud.gov/program_offices/fair_housing_equal_opp/LGBTQ"
    },
    {
      name: "Right to Marriage",
      description: "Transgender individuals have the right to marry the person of their choice, regardless of their gender identity or expression...",
      link: "https://www.hrc.org/resources/marriage-equality-and-the-transgender-community"
    }
  ];
  
  const rightsList = document.querySelector('.rights-list');
  const searchInput = document.getElementById('search');
  
  function renderRights() {
    rightsList.innerHTML = '';
  
    rights.forEach(right => {
      const rightItem = document.createElement('div');
      rightItem.classList.add('right-item');
      rightItem.innerHTML = `
        <h3>${right.name}</h3>
        <p>${right.description}</p>
        <a href="${right.link}" target="_blank">Read more</a>
      `;
  
      rightsList.appendChild(rightItem);
    });
  }
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
  
    rightsList.innerHTML = '';
  
    rights.forEach(right => {
      if (right.name.toLowerCase().includes(searchTerm) || right.description.toLowerCase().includes(searchTerm)) {
        const rightItem = document.createElement('div');
        rightItem.classList.add('right-item');
        rightItem.innerHTML = `
          <h3>${right.name}</h3>
          <p>${right.description}</p>
          <a href="${right.link}" target="_blank">Read more</a>
        `;
  
        rightsList.appendChild(rightItem);
      }
    });
  });
  
  renderRights();