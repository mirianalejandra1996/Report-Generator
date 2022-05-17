# Reports Generator 📄

This web application has been developed with the [Vue Framework](https://vuejs.org/)  following a technical challenge 🚀

The purpose is to create an interface that allows the user to view a list of reports that have been generated, and allows these reports to be downloaded in .xls (Excel) format files 📝

## Requirements

+ Develop a SPA application in Vue Js, which has as an interface a button to generate user reports and a table that lists the generated reports.

+ Consider responsive design and fidelity to the proposed design.

+ Each time the “generate report” button is pressed, a form will open to create a new user report filtered by date, having to enter the “report title” as well as the “start date” and “end date” based on the date of birth (birth_date) of the users.

    Consider all the security validations that you think are convenient.

+ Publish it as a static page on github, and simulate the information with static data (the list of reports or use localstorage, etc) to be able to evaluate the finish of the design. (simulates the back-end with static data).

## Development Considerations

For error handling, respective validations were carried out so that the user cannot enter numbers in the first field, leave no empty space, or that the value of the final date is less than the value of the initial date.

A component from the
[Vue 3 datepicker](https://vue3datepicker.com/) package was implemented to provide the functionality, but some modifications were made by manipulating the styles to make it as close as possible to the requested prototype.

Similarly, properties were added so that the format was "DD/MM/YYYY", since it initially showed "MM/DD/YYYY, HH:MM"

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168896000-667051ac-ecb0-42e6-ab0c-c83bf80e8fba.png" ></div>

So it finally became the next pickerdate

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168896457-90088c8a-a973-49ab-94e0-8ef49500a305.png" ></div>

As for the excel files, these are downloaded by clicking "Download" on the corresponding row, and the file name would be REPORT + ID number. (Example: REPORT0001)

## Final result of the project 🎯

The views are as follows:

### Initial view without records

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168897420-84578356-8846-4f82-af55-c39756fd164d.png" ></div>

### Create new record

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168899736-02543fbc-093b-4376-914e-58da5ea7b6f6.png" ></div>

### Listed Records

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168898214-a27fadb5-111f-46cb-a794-32abe4a6fbd1.png" ></div>

### Excel report

<div align=center><img width="100%" src="https://user-images.githubusercontent.com/91838806/168897267-466d0ba3-c8ca-48e7-a307-9a8f266bd7f7.png" ></div>


This application was deployed in [Github Pages](https://github.com), in which you have access in the following [Link](https://mirianalejandra1996.github.io/Report-Generator/)

https://mirianalejandra1996.github.io/Report-Generator/

## Author 🎇

[🙋🏽‍♀️ Mirian Alejandra Arévalo](https://github.com/mirianalejandra1996).

📧 Contact me on: mirianalejandra1996@gmail.com
