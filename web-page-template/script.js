document.addEventListener('DOMContentLoaded', function() {
    console.log('Script is running');

    // Function to update the content of the #content element
    function updateContent(section) {
        const contentElement = document.getElementById('content');
        if (section === 'home') {
            contentElement.innerHTML = '<p>Welcome to the Light Weight Web Page!</p>';
        } else if (section === 'about') {
            contentElement.innerHTML = document.getElementById('about').innerHTML;
        } else if (section === 'store') {
            contentElement.innerHTML = document.getElementById('store').innerHTML;
        }
    }

    // Call the updateContent function for the home section
    updateContent('home');

    // Function to handle any additional JavaScript functionality
    function additionalFunctionality() {
        // Add your additional JavaScript code here
    }

    // Call the additionalFunctionality function
    additionalFunctionality();

    // Add event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function() {
        updateContent('home');
    });

    document.getElementById('about-link').addEventListener('click', function() {
        updateContent('about');
    });

    document.getElementById('store-link').addEventListener('click', function() {
        updateContent('store');
    });
});
