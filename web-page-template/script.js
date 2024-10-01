document.addEventListener('DOMContentLoaded', function() {
    console.log('Script is running');

    // Function to update the content of the #content element
    function updateContent() {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = '<p>Welcome to the Light Weight Web Page!</p>';
    }

    // Call the updateContent function
    updateContent();

    // Function to handle any additional JavaScript functionality
    function additionalFunctionality() {
        // Add your additional JavaScript code here
    }

    // Call the additionalFunctionality function
    additionalFunctionality();
});
