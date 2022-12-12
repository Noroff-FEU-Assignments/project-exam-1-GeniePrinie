# Project Exam 1 by Prinyapon Prinyanut

![img3](https://user-images.githubusercontent.com/100139381/206424407-d7ed0fac-d297-4966-9026-bffcc9fc2973.jpg)

This is the home page of Living Organically website (LO), a recipe blog website.

## Description

This website is based on a school project. The project was to create an blog type website. I chose recipes to be my blog posts. The purpose of this project was to make the website easy to use, and to use the REST API from WordPress. The site was built using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch the data. The hamburger bar menu navigation is used for the phone-view.

### This project has two aspects:
-	Website built with HTML, CSS and JavaScript
-	API from my WordPress installation

### The pages are:

1.	Home page
2.	About page
3.	List of blog posts (recipes)
4.	Blog post specific pages (individual recipe when clicked from the recipes page)
5.	Contact page.

#### Home Page
The home page have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. The user can also click back to view results they had previously seen.

#### Blog Page

The blog posts page shows the first 10 blogs, and the user can click to view more results which is then shown underneath the first 10 blogs. This page gets the data from the WordPress REST API. The search bar is at the top of the page. It is fully functional and allows users to find the blog post (recipe) that exists in the date from the API.

#### Blog Specific Page (recipes)

The content of the blog specific page is dynamically built by using a query string parameter based on whatever link the user clicked. The title of the blog specific page will change based on the blog that has been clicked on e.g. “LO. | Recipe name”.

When the image on this page is clicked, a modal will appear giving the user a bigger view of that image and when clicking outside the image, it will hide the modal.

#### Contact page

There are four textboxes on this page.
-	Name (When submit , the name has to be more than 5 characters long)
-	Email address (When submit , the email must be a valid email address)
-	Subject (When submit , the subject has to be more than 15 characters long)
-	Message content (When submit , the message has to be more than 25 characters long)

JavaScript was used for validation. It will show an error message if the values in the textboxes do not meet the requirements.

## WordPress

The WordPress was installed on my web host, and then I added the blogs on the admin panel. The content for the website is stored on a WordPress installation used as a Headless CMS. WordPress is only used to provide an API and to add content for the blog.

The JavaScript code makes a call to the WordPress REST API to fetch the data (recipes).

## Hotjar

Hotjar was installed on the website. I asked users to test my website, and adjust based on their feedback and any insights from Hotjar.

## Contact

[My Linkedin page](https://www.linkedin.com/in/genie-prinyanut-ab3441257/)

[My Website](https://genieprinyanut.netlify.app/)

