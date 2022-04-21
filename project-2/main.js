const { getAll } = require("./controllers/app.js");

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

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  getAll().then(({ data }) => renderTable(data, term));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};
