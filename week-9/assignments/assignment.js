const table = document.getElementById(`table-body`);  //access table

//load data using XMLHttpRequest
const loadData = path => new Promise(resolve =>
     {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) =>
     {
      if (target.readyState == 4 && target.status == 200)
       {
        resolve(target.response);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});
//filter according to name
const isFiltered = (name, nameTerm) => !name.toLowerCase().includes(nameTerm.toLowerCase());

//render table
const renderTable = (source, nameTerm) => {
    const htmlString = JSON.parse(source).reduce((previous, next) => 
    {
        const fullName = `${next.first_name} ${next.last_name}`;
        if (nameTerm && isFiltered(fullName, nameTerm)) return previous;

        return previous + `<tr>
            <td>${next.id}</td>
            <td>${fullName}</td>
            <td>${next.email}</td>
            <td>${next.gender}</td>
            <td>${next.ip_address}</td>
        </tr>`;
    }, "");
    table.innerHTML = htmlString;
}

//onSubmit function
const onSubmit = (event) => { 
    //prevent page reload on submit
    event.preventDefault();

    //mapping values of filterNames to nameTerm
    const nameTerm = event.target.name.value;
    
     //displaying filtered data
    loadData(`./data.json`).then((source) => renderTable(source, nameTerm));
};

//onReset function 
const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));
};

onReset();