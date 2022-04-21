# Project 2

Project Description:
In this project the html file 'index.html' is loaded with the json data from 'app_data.json'.
This html file displays the data in a table and consists of filtering options to filter the data.

Data:
The data file app_data.json stored inside data folder consists of application data with 200 records having 4 application fields 
App_Bundle_ID,   App_Name,    App_Version,     App_Country 

API:
There is a app.js file stored inside controllers folder which consists of getAllData and getAppById functions which are used for filtering.
getAllData takes multiple parameters and filters the data according to those parameters.
getAppById takes one parameter, App_Bundle_ID, and filters the data on the exact match of the this parameter.
main.js file is used for loading the data using the controllers.

Displaying the data:
There is index.html file stored inside dist folder which contains form elements to filter the data and a table element to display the json data that is fetched from app_data.json file.
The table consists of all the columns present in the json data.

The filtering can be done based on all the columns as their is input field for all columns to do the filteration.
The form consists of two parts:
- Filter based on Application Bundle ID
- Filter based on Application Name, Application Version and/or Application Country
Each of this consists of two buttons Submit and Reset.
When the Submit is clicked the filtered data is displayed and when the Reset button is pressed all the data is displayed in the table and all input fields become empty.

bundle.js file helps to bundle everything together and then it is used in the html file.

Finally I have deployed the project on netlify.
LINK - https://incredible-daffodil-8a38fb.netlify.app

