INSTRUCTIONS
This is a Project based Playground Question.
If you need help in submitting the solution then Watch this Video, If you are a Windows user and have Git installed on your system, then you may use Powershell or Git bash terminal instead of Mac OS Terminal shown in the video.


or follow the Steps mentioned below to submit your solution

Clone the GitHub Repo to get the boilerplate code by selecting the Boilerplate repo from the GitHub link dropdown and then click on clone

Solve the solution on your system locally using an IDE of your choice

Push your solution to the cloned repository in your GitHub profile

Paste the GitHub Repository link in the Text input for hosted project link

Save and Run Test Cases

Question 1
Responsive Resume using CSS Grid
The Question has been divided into 5 parts. Please refer to the video file attached for each part to understand the specifications of the Resume



Part 1: Dividing the Resume into the left and right sections using the CSS grid properties.

The whole Resume should be divided into 2 sections using CSS grid. Use the main HTML element inside HTML body tag with class 'main-content' to have 2 grid columns of 300px and 700px respectively. Also, the main- content must have a minimum height of 1000px.

The main HTML element with class 'main- content' should have two HTML sections. The left section should have class 'left- section and it should span till 1st grid column (till 300px). Similarly,, the other section i. e. the right section should have class 'right- section' and it's grid column should span from the end of the 1st column till 2nd column (from 300px to 1000px). It must have a width of 90 percent.
You may choose a color of your choice for both the left and right sections. After completing part 1 your Resume should look similar to the image/gif for part 1 shown here.




Part 2: Add basic profile details and contact information.

HTML: Add a div element of class name left-content inside section of class name . All the elements mentioned in the part 2 and part 3 should be place inside this div.
Add a profile picture, name, designation, description, and contact information including social media links with class names profile-image, name, designation, description, contact-item respectively in a div of class name profile-details which is placed inside another div of class name .


Give padding of 1 rem on all sides in class left-content

1. Profile Image
(a) Set padding of 1 rem on all sides in class left-content
(b) profile-image should be centered using display block property and margin as auto. (do not give any value in px for margin, otherwise test case will not pass)
(c) It should have a border of 5px white solid and a border-radius of 30 percent.
(d) Give it a width of 60 percent.

2. Name
The name should have the following CSS properties
(a) It should have a font size and weight of 1.2 rem and 700.
(b) its text should be center-aligned and uppercase with a space of 0.02px between the letters and padding of 0.8rem in all directions.

3. Designation
(a)It should have a font size of 1 rem
(b) its text should be center-aligned and uppercase (using CSS)
(c) It should have a padding of 0.5rem at the bottom only

4. Description
(a) It should have a font size of 0.75 rem
(b) its text should be center-aligned
(c) It should have a padding of 1 rem on all the sides.

Part 3: Add Social media links, Skills title, Skill names and progress bars
The element with the class 'contact-item' which you added in part 3 should have your social media links and also have 'SKILLS' title along with the name of skills and a progress bar defining your proficiency in that skill, similar to as shown in the picture/ gif.

1 Social Media Icons
(a) The social media icons should have class name 'icon' and when the icons are clicked it should redirect to your social media profile of Linkedin and Github.
(b) Optional - Also, add icons for contact number and location.

2. Skills Title
The Skills title should have class name 'skills' and should have the following CSS properties
(a) It should have a font size of 0.75 rem
(b) its text should be center-aligned and uppercase
(c) It should have a padding of 1rem on top and bottom and 0.5rem on left and right.

3. Skill Name
The Skills Name should have class name 'skill-name' and should have the following CSS properties
(a) It should have a font size and weight of 0.65 rem
(b) its text should be left-aligned.
(c) It should have a padding of 0.5 rem at bottom

4. Progress Bar
The Progress Bar should have the class name 'progress-bar' and should have the following CSS properties:
(a) Give it a border of '1px white solid' and a height of '4px'


Part 4: Complete the right section of the Resume
The right section of the resume should have the following CSS properties.

1. Right content padding
Add an element of class 'right-main-content' inside the right section having class 'right-section' in the resume.

1. It should have a padding of 2rem (32px) on top and bottom and a padding of 3rem (48px) on left and right.

2. Right Title - ABOUT ME, Education, Experience
(a) All the titles like About me, Education, Experience should have a heading with class 'right-title'.
(b) It should be in uppercase (using CSS)
(c) It should have a font size of 1.2rem and font-weight of 700, padding of 0.5 rem and letter-spacing of 1px



Part 5: Make the Resume Responsive using Media queries


When the width of the resume is greater than or equal to 674px, then there should be 2 grid columns of size 300px and 700px.
Apply media queries such that when the width of the resume is reduced below 674 px, the left section should stack above the right section using CSS Grid template columns property equal to 'repeat(1, 1fr);'. So, when the width of the resume is decreased below 674 px, then there should only be 1 Grid column. Please check out the part 5 video to understand how your resume should look like.

The class 'main-content' must have a width of 90% and a minimum height of 1000px for the test cases of the part 5 to pass.


Optional: Similarly you can apply other properties like reducing font size when the width of the device is reduced below a certain threshold using media queries.

Optional: You may add contenteditable="true" in HTML tags to make the text editable on double click
