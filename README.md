# CS-465-Full-Stack-Development-I
## Course Description
Students will design and develop a full stack application through the utilization of programming 
language frameworks. In creating a full stack application, students will also be responsible for 
developing a database as well as the code that interfaces their application to the database. This 
course is the first course in a two-course sequence.
## Course Competencies
This course covers the following competencies, which represent the knowledge and skills 
relevant to your field:
- CS-30427: Design the architecture of a web application
- CS-40428: Build a web application using frameworks
- CS-40429: Develop and integrate a database using frameworks

## Project
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
We used Express HTML instead of traditional HTML for the customer facing web page. This allowed us to dynamically render the page with trips that we fetched from the MongoDB database. We used Handlebars as a template to help in creating the HTML. We used Angular to implement the SPA since it can dynamically render content and does not require a reload or refresh in the browser. We used Node.js for the javascript and used it on both the front and back end.

Why did the backend use a NoSQL MongoDB database?
The backend used a NoSQL MongoDB database because it is easy to modify the schema since it is non-relational. Honestly I think that a relational SQL database would have worked just as well since we had very specific requirements for the database and it seems that columns would have worked just as good. I guess it boils down to if we wanted to change something later, it might be a little easier with a non-relational database.

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a format used to represent data structures, and it is language-independent, meaning it can be utilized with different programming languages. While JSON's syntax is derived from JavaScript, it is not exclusive to JavaScript. It is commonly used in APIs to facilitate the exchange of information between the frontend and backend of applications, and JavaScript is one of the languages that can easily work with JSON data.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
We used Handlebars to refactor some of the HTML, specifically the header and footer. It makes the code less prone to errors, shorter, and quicker to write. The cards for the trips were also refactored to inlude an array of trips of any length instead of three static cards.

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Testing a API with Postman is fairly easy without security. You just need to choose the request type and add a body if necessary. With security it is a bit more complicated. You have to add a valid authorization web token, and make sure it stays safe since you can use it can be used to access the web application.

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I really enjoyed this course. I had previous knowledge of just about all the tools used in the course, but this helped me tie them together. I have also used MVC architecture before, but this project was much needed practice.
