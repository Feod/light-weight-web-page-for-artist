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
        } else if (section === 'sudoku') {
            contentElement.innerHTML = document.getElementById('sudoku').innerHTML;
        } else if (section === 'timelapse') {
            contentElement.innerHTML = document.getElementById('timelapse').innerHTML;
            fetchAndDisplayTimelapse();
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

    // Function to handle menu button selection
    function handleMenuSelection(event) {
        // Remove 'selected' class from all menu buttons
        const menuButtons = document.querySelectorAll('nav ul li a');
        menuButtons.forEach(button => {
            button.classList.remove('selected');
        });

        // Add 'selected' class to the clicked menu button
        event.target.classList.add('selected');
    }

    // Add event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function(event) {
        updateContent('home');
        handleMenuSelection(event);
    });

    document.getElementById('about-link').addEventListener('click', function(event) {
        updateContent('about');
        handleMenuSelection(event);
    });

    document.getElementById('store-link').addEventListener('click', function(event) {
        updateContent('store');
        handleMenuSelection(event);
    });

    document.getElementById('blog-link').addEventListener('click', function(event) {
        updateContent('blog');
        handleMenuSelection(event);
    });

    document.getElementById('sudoku-link').addEventListener('click', function(event) {
        updateContent('sudoku');
        handleMenuSelection(event);
    });

    document.getElementById('timelapse-link').addEventListener('click', function(event) {
        updateContent('timelapse');
        handleMenuSelection(event);
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

    // Function to handle aspect ratio scaling
    function handleAspectRatioScaling() {
        const aspectRatio = window.innerWidth / window.innerHeight;
        const elementsToScale = document.querySelectorAll('.scale-aspect-ratio');

        elementsToScale.forEach(element => {
            element.style.width = `${aspectRatio * 100}vw`;
            element.style.height = `${aspectRatio * 100}vh`;
        });
    }

    // Call the handleAspectRatioScaling function on window resize
    window.addEventListener('resize', handleAspectRatioScaling);

    // Initial call to handleAspectRatioScaling
    handleAspectRatioScaling();

    // Function to handle sudoku logic
    function handleSudokuLogic() {
        const sudokuGrid = document.querySelectorAll('.sudoku-grid input');

        sudokuGrid.forEach(cell => {
            cell.addEventListener('input', function() {
                const value = this.value;
                if (!/^[1-9]$/.test(value)) {
                    this.value = '';
                }
            });
        });
    }

    // Call the handleSudokuLogic function
    handleSudokuLogic();

    // Function to fetch and display images in a timelapse format using three.js
    function fetchAndDisplayTimelapse() {
        const timelapseContentElement = document.getElementById('timelapse-content');
        const imageUrls = [];
        for (let i = 0; i <= 100; i++) {
            imageUrls.push(`https://www.example.com/snapshot${i}.png`);
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        timelapseContentElement.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const textures = imageUrls.map(url => textureLoader.load(url));
        let currentTextureIndex = 0;

        const material = new THREE.MeshBasicMaterial({ map: textures[currentTextureIndex] });
        const geometry = new THREE.PlaneGeometry(5, 5);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            currentTextureIndex = (currentTextureIndex + 1) % textures.length;
            material.map = textures[currentTextureIndex];
            renderer.render(scene, camera);
        }

        animate();
    }
});
