// Add the following script to handle dynamic addition of skills as badges
document.addEventListener('DOMContentLoaded', function () {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillInput = document.getElementById('skillInput');
  
    skillInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && skillInput.value.trim() !== '') {
        const skillBadge = createSkillBadge(skillInput.value.trim());
        skillsContainer.appendChild(skillBadge);
        skillInput.value = '';
      }
    });
  
    function createSkillBadge(skill) {
      const badge = document.createElement('span');
      badge.classList.add('badge', 'badge-primary', 'mr-2', 'mb-2');
      badge.textContent = skill;
  
      // Add event listener to remove the badge when clicked
      badge.addEventListener('click', function () {
        skillsContainer.removeChild(badge);
      });
  
      return badge;
    }
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission
      // Your form handling logic here
      performSearch(); // Call a function to execute the search functionality
    });
  
    function performSearch() {
      // This function should contain the logic for your search functionality
      // For example, you can gather form data and perform an AJAX request to a server-side script
      // Or perform any other action based on the form input values
      console.log('Performing search...'); // For demonstration, logs a message to the console
      alert("Searching Candidates")
    }
  });
  
  function validateForm() {
    const form = document.getElementById('searchForm');
    if (form.checkValidity()) {
      // If the form is valid, you can submit the form or perform other actions
      alert('Form is valid. Implement your form submission logic here.');
    } else {
      // If the form is not valid, you can display an error message or take other actions
      alert('Form is not valid. Please fill in all required fields.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var yearsDropdown = document.getElementById('yearsOfExperience');
  
    for (var i = 1; i <= 30; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearsDropdown.appendChild(option);
    }
  });
  
  function addSkill() {
    // Get values from input fields
    var skill = document.getElementById('skillInput').value;
    var experience = document.getElementById('experienceInput').value;
  
    // Validate input
    if (skill.trim() === '' || isNaN(experience) || experience < 0) {
      alert('Please enter a valid skill and years of experience.');
      return;
    }
  
    // Display added skill in the list
    var addedSkillsList = document.getElementById('addedSkillsList');
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = skill + ' - ' + experience + ' YOE';
    addedSkillsList.appendChild(listItem);
  
    // Clear input fields
    document.getElementById('skillInput').value = '';
    document.getElementById('experienceInput').value = '';
  }


  document.addEventListener('DOMContentLoaded', function () {
    // Handle click events on example texts
    var exampleTexts = document.querySelectorAll('.example-text');
    exampleTexts.forEach(function (exampleText) {
      exampleText.addEventListener('click', function () {
        // Get the search query from the data attribute
        var query = exampleText.getAttribute('data-query');

        // Update the search box with the selected query
        document.getElementById('searchInput').value = query;

        // Trigger the search button click
        document.getElementById('searchButton').click();
      });
    });

    // Handle click event on the search button
    document.getElementById('searchButton').addEventListener('click', function () {
      // Perform the search operation here
      // You can add your search logic or redirect to a search results page
      var searchQuery = document.getElementById('searchInput').value;
      alert('Performing search for: ' + searchQuery);
    });
  });