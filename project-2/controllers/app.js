const apps = require("../data/app_data");


const getAllData =  ( App_Name, App_Version, App_Country) =>
new Promise((resolve) => {
  let result = Array.from(apps);

    if (App_Name) {
    result = result.filter((item) => item.App_Name.toLowerCase().includes(App_Name.toLowerCase()));
    }

    if (App_Version) {
        result = result.filter((item) => item.App_Version.toLowerCase().includes(App_Version.toLowerCase()));
    }

    if (App_Country) {
        result = result.filter((item) => item.App_Country.toLowerCase().includes(App_Country.toLowerCase()));
    }

        resolve({ code: 200, data: result });
    });


const getAppById = (appId) => 
 new Promise((resolve) => {
    const app = apps.find(({ App_Bundle_ID }) => App_Bundle_ID === (appId));
    if (app) {
        resolve({ code: 200, data: app }); 
    } else {
        resolve({
            code: 404,
            data: { message: `No application found for id ${appId}` },
        });
    }
  });

module.exports = {
    getAllData,
    getAppById
};