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
        } else if (section === 'blog') {
            fetchTumblrBlogFeed();
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

    document.getElementById('blog-link').addEventListener('click', function() {
        updateContent('blog');
    });

    // Function to fetch and display Tumblr blog feed
    function fetchTumblrBlogFeed() {
        const blogContentElement = document.getElementById('blog-content');
        const apiKey = 'YOUR_TUMBLR_API_KEY';
        const blogIdentifier = 'YOUR_TUMBLR_BLOG_IDENTIFIER';
        const url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/posts?api_key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const posts = data.response.posts;
                let blogContent = '';
                posts.forEach(post => {
                    blogContent += `<h3>${post.title}</h3><p>${post.body}</p>`;
                });
                blogContentElement.innerHTML = blogContent;
            })
            .catch(error => {
                console.error('Error fetching Tumblr blog feed:', error);
                blogContentElement.innerHTML = '<p>Failed to load blog feed. Please try again later.</p>';
            });
    }
});
