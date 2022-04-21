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

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ App_Name }) => App_Name.toLowerCase().includes(nameTerm.toLowerCase()));
  }

  
  const rows = source.reduce(
    (acc, { App_Bundle_ID, App_Name, App_Version, App_Country }) =>
      acc +
      `<tr id="table-row-${App_Bundle_ID}"><td>${App_Bundle_ID}</td><td>${App_Name}</td><td>${App_Version}</td><td>${App_Country}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`./app_data.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  loadData(`./app_data.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
  loadData(`./app_data.json`).then((data) => renderTable(data));
};
