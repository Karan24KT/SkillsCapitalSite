document.addEventListener("DOMContentLoaded", function () {
    // JSON data directly embedded in the script
    const developersData = [
     
      {
        "name": "Taylor Jonathan",
        "profile_pic_url" : "https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?w=996&t=st=1700824700~exp=1700825300~hmac=5eb61d8065c67ef80a166d6cb8edb22399b094a8207c6a032c904ede0a345655",
        "designation": "Cloud Developer",
        "bio": "[Developer's Name] is a seasoned Cloud Developer, bringing five years of expertise in architecting and implementing robust cloud solutions. Proficient in AWS and Azure, they excel in optimizing infrastructure for peak performance, enhancing security protocols, and orchestrating seamless deployments.",
        "hourlyRate": 60,
        "yearsOfExperience": 2,
        "location": "Pune",
        "availability": "Available",
        
        "skills": ["AWS", "Amazon S3 ", "AWS Lambda" , "Load balancing" , "Amazon EC2"  , ],
        "filter": "cloud",
        "profileLink" : "https://www.google.com/"
      },
      {
        "name": "Walter White",
        "profile_pic_url" : "assets/img/team/team-1.jpg",
        "designation": "SAP Developer",
        "bio": "[Developer's Name] is a seasoned SAP developer with seven years of expertise in SAP ERP, SAP HANA, SAP Fiori, and SAP ABAP. Armed with a [Degree] in [Field of Study] from [University], they've navigated diverse industries, excelling in custom solution design, implementation, and project management. ",
        "hourlyRate": 80,
        "yearsOfExperience": 7,
        "location": "Delhi",
        "availability": "Available",
        "skills": ["SAP ERP", "SAP HANA", "SAP Fiori" , "SAP BW" , "SAP CRM" , "SAP Security" , "SAP BI"],
        "filter": "sap",
        "profileLink" : "https://www.google.com/"
      },
      {
        "name": "John Peter",
        "profile_pic_url" : "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=996&t=st=1700825053~exp=1700825653~hmac=268fe4411e89dc687e95565d4cf16deb48f4fdfc71688e3f44e5e9bdaebf6553",
        "designation": "Legacy Specialists",
        "bio": "[Developer's Name] is a seasoned Cloud Developer, bringing five years of expertise in architecting and implementing robust cloud solutions. Proficient in AWS and Azure, they excel in optimizing infrastructure for peak performance, enhancing security protocols, and orchestrating seamless deployments.",
        "hourlyRate": 45,
        "yearsOfExperience": 8,
        "location": "Bangalore",
        "availability": "Available",
        "skills": ["COBOL ", "Mainframe Technologies", "Legacy Database" , "Client/Server Architecture"],
        "filter": "legacy",
        "profileLink" : "https://www.google.com/"
      },
      {
        "name": "Walter White",
        "profile_pic_url" : "assets/img/team/team-1.jpg",
        "designation": "Cloud Developer",
        "bio": "[Developer's Name] is a seasoned SAP developer with seven years of expertise in SAP ERP, SAP HANA, SAP Fiori, and SAP ABAP. Armed with a [Degree] in [Field of Study] from [University], they've navigated diverse industries, excelling in custom solution design, implementation, and project management.",
        "hourlyRate": 80,
        "yearsOfExperience": 7,
        "location": "Delhi",
        "availability": "Available",
        "skills": ["SAP ERP", "SAP HANA", "SAP Fiori" , "SAP BW" , "SAP CRM" , "SAP Security" , "SAP BI"],
        "filter": "cloud",
        "profileLink" : "https://www.google.com/"
      },
      {
        "name": "John Micle",
        "profile_pic_url" : "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=996&t=st=1700825053~exp=1700825653~hmac=268fe4411e89dc687e95565d4cf16deb48f4fdfc71688e3f44e5e9bdaebf6553",
        "designation": "SAP Specialists",
        "bio": "[Developer's Name] is a seasoned Cloud Developer, bringing five years of expertise in architecting and implementing robust cloud solutions. Proficient in AWS and Azure, they excel in optimizing infrastructure for peak performance, enhancing security protocols, and orchestrating seamless deployments. Their passion lies in harnessing the power of cloud technology to drive innovation and streamline business operations.",
        "hourlyRate": 45,
        "yearsOfExperience": 8,
        "location": "Bangalore",
        "availability": "Available",
        "skills": ["COBOL ", "Mainframe Technologies", "Legacy Database" , "Client/Server Architecture"],
        "filter": "sap",
        "profileLink" : "https://www.google.com/"
      },
      // Add more entries if needed
    ];
  
    // Iterate over each developer entry and dynamically add to HTML
    developersData.forEach(developer => {
      const portfolioContainer = document.querySelector(".portfolio-container");
  
      const portfolioItem = document.createElement("div");
      portfolioItem.classList.add("col-lg-12", "col-md-12", "portfolio-item",  `filter-${developer.filter}`);
  
      portfolioItem.innerHTML = `
        <div class="member container d-flex align-items-start">
          <div class="pic"><img src="${developer.profile_pic_url}" class="" alt=""></div>
          <div class="member-info profile_info">
            <h4 class="profile_name">${developer.name}</h4>
            <span class="profile_designation">${developer.designation}</span>
            <br><br>
            <p class="profile_bio">${developer.bio}</p>
            
            <div class="profile_status">
              <div class="hourly_rate">
                <div class="profile_status_data">$${developer.hourlyRate}</div>
                <span class="profile_status_query">Hourly Rate</span>
              </div>
              <div class="YOE">
                <div class="profile_status_data">${developer.yearsOfExperience}</div>
                <span class="profile_status_query">Years of Experience</span>
              </div>
              <div class="location">
                <div class="profile_status_data">${developer.location}</div>
                <span class="profile_status_query">Current Location</span>
              </div>
              <div class="availability">
                <div class="profile_status_data">${developer.availability}</div>
                <span class="profile_status_query">Availability</span>
              </div>
            </div>
            <br><br>
            <div class="skills">${developer.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
            <div class="view_Profile">
              <a target="_blank" href="${developer.profileLink}">View-Profile <i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      `;
  
      portfolioContainer.appendChild(portfolioItem);
    });
  });
  