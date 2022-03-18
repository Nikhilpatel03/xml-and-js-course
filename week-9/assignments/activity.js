const table = document.getElementById("table-body");  //access table
const filterNames = ['first_name', 
'last_name', 
'email', 
'gender',
 'ip_address'];

 //load data using XMLHttpRequest
 const loadData = (path) =>
 new Promise((resolve) => {
   const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = ({ target }) => {
     if (target.readyState == 4 && target.status == 200) {
       resolve(JSON.parse(target.response));
     }
   };
   xhttp.open("GET", path, true);
   xhttp.send();
 });

 //creating table row by passing values to respective columns
const generateHtmlRow = (x) => {
    return `<tr><td>${x.id}</td>` +
    `<td>${x.first_name}</td>` +
    `<td>${x.last_name}</td>` +
    `<td>${x.email}</td>` +
    `<td>${x.gender}</td>` +
    `<td>${x.ip_address}</td></tr>`
}

//displaying data in the table
const renderTable = (data, nameTerm) => {
    let source = data;

    if (nameTerm) {
        nameTerm.forEach(term => {
            if (term.value.length > 0) {
                source = source.filter(entry => entry[term.name].toLowerCase().includes(term.value));
            }
           });
    }
    const htmlString = source.reduce(((prev, next) => prev + generateHtmlRow(next)),"");
    table.innerHTML = htmlString;
}



loadData(`./data.json`).then((data) => renderTable(data));


//onSubmit function
const onSubmit = (event) => {
  //prevent page reload on submit
    event.preventDefault();

    //mapping values of filterNames to nameTerm
    const nameTerm = filterNames.map(name => {
      return { name, value: event.target[name].value }
    });

    //displaying filtered data
    loadData(`./data.json`).then((data) => renderTable(data, nameTerm));
};


//onReset fucntion 
const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));
};