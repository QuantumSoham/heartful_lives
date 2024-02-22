const doctors = [
    {
      name: "Dr. John Doe",
      contact: "123-456-7890",
      location: { lat: 40.7128, lng: -74.0060 }, // New York
    },
    // Add more doctors here...
  ];
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: doctors[0].location,
    });
  
    doctors.forEach(doctor => {
      const marker = new google.maps.Marker({
        position: doctor.location,
        map: map,
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${doctor.name}</h3><p>Contact: ${doctor.contact}</p>`,
      });
  
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }
  
  function renderDoctors() {
    const doctorsList = document.getElementById('doctors-list');
  
    doctors.forEach(doctor => {
      const doctorItem = document.createElement('div');
      doctorItem.classList.add('doctor-item');
      doctorItem.innerHTML = `
        <h3>${doctor.name}</h3>
        <p>Contact: ${doctor.contact}</p>
      `;
  
      doctorsList.appendChild(doctorItem);
    });
  }
  
  renderDoctors();