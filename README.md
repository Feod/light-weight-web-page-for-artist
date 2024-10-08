# Light Weight Web Page Template

This repository contains a light weight web-page template that you can use as a starting point for your web projects.

## How to Use the Template

1. Clone the repository:
    ```
    git clone https://github.com/githubnext/workspace-blank.git
    ```

2. Open the `index.html` file in a web browser to view the template.

3. Customize the template by modifying the `styles.css` and `script.js` files to suit your needs.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

Thank you for your contributions!

## Blog Feature

A new branch named `blog-feature` has been created for the blog feature. To switch to this branch, use the following command:

```
git checkout blog-feature
```

## Configuring the Tumblr Blog Feed

To configure the Tumblr blog feed, follow these steps:

1. Obtain a Tumblr API key from the [Tumblr API](https://www.tumblr.com/docs/en/api/v2) website.
2. Replace `YOUR_TUMBLR_API_KEY` in `web-page-template/script.js` with your actual Tumblr API key.
3. Replace `YOUR_TUMBLR_BLOG_IDENTIFIER` in `web-page-template/script.js` with your Tumblr blog identifier.

## Using the Blog Section

The blog section is included in the `index.html` file with an id of `blog`. To view the blog feed, click on the "Blog" link in the navigation menu. The blog feed will be fetched and displayed in the `blog` section.

## Sudoku Feature

The sudoku feature is included in the `index.html` file with an id of `sudoku`. To use the sudoku feature, follow these steps:

1. Open the `index.html` file in a web browser.
2. Click on the "Sudoku" link in the navigation menu to display the sudoku section.
3. Enter numbers (1-9) in the input fields to fill in the sudoku grid.
4. The input fields will only accept numbers from 1 to 9.
5. The sudoku logic, including validation and solving functionality, is handled by the JavaScript code in `web-page-template/script.js`.
