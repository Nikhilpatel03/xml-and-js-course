const { getAllData,getAppById } = require("./controllers/app.js");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  const rows = data.reduce(
    (acc, { App_Bundle_ID, App_Name, App_Version, App_Country }) =>
      acc +
      `<tr id="table-row-${App_Bundle_ID}"><td>${App_Bundle_ID}</td><td>${App_Name}</td><td>${App_Version}</td><td>${App_Country}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAllData().then(({ data}) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const version = event.target.version.value;
  const country = event.target.country.value;

  getAllData(name,version,country).then(({ data }) => renderTable(data));
};
const onReset = () => {
    getAllData().then(({ data }) => renderTable(data));
};

const form = document.getElementById("search-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("reset", onReset);

const onSubmitApplicationById = (event) => {
event.preventDefault();
const id = event.target.id.value;
getAppById(id).then(({ data }) => {
if (data.message) {
alert(data.message);
} else {
renderTable([data]);
}
});
};

const appIdForm = document.getElementById("search-form-id");

appIdForm.addEventListener("submit", onSubmitApplicationById);
appIdForm.addEventListener("reset", onReset);

