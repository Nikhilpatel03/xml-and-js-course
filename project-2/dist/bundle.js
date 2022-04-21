
    (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
        
        const apps = require("../data/app_data");
        
        const getAllData =  (App_Name, App_Version, App_Country) =>
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
    const app = apps.find(( app ) => {return app.App_Bundle_ID === (appId)});
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
        
        },{"../data/app_data":2}],2:[function(require,module,exports){
        module.exports=[
            {
                "App_Bundle_ID": "net.furl.Bytecard",
                "App_Name": "Domainer",
                "App_Version": "7.2",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "org.wordpress.Namfix",
                "App_Name": "Zaam-Dox",
                "App_Version": "0.8.3",
                "App_Country": "Slovenia"
            },
            {
                "App_Bundle_ID": "cc.tiny.Pannier",
                "App_Name": "Daltfresh",
                "App_Version": "0.37",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.prweb.Duobam",
                "App_Name": "Rank",
                "App_Version": "0.8.4",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "jp.i2i.Quo Lux",
                "App_Name": "Zathin",
                "App_Version": "7.75",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "de.t-online.Zontrax",
                "App_Name": "Tin",
                "App_Version": "2.4.0",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "cn.com.china.Konklab",
                "App_Name": "Zontrax",
                "App_Version": "5.3",
                "App_Country": "Sudan"
            },
            {
                "App_Bundle_ID": "com.bloglines.Cardguard",
                "App_Name": "Otcom",
                "App_Version": "2.5.5",
                "App_Country": "Greece"
            },
            {
                "App_Bundle_ID": "fr.unblog.It",
                "App_Name": "Biodex",
                "App_Version": "8.54",
                "App_Country": "Costa Rica"
            },
            {
                "App_Bundle_ID": "me.flavors.Fintone",
                "App_Name": "Konklux",
                "App_Version": "8.2",
                "App_Country": "Afghanistan"
            },
            {
                "App_Bundle_ID": "com.jimdo.Asoka",
                "App_Name": "Transcof",
                "App_Version": "3.8.5",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.stumbleupon.Konklux",
                "App_Name": "Alphazap",
                "App_Version": "4.2.5",
                "App_Country": "Uzbekistan"
            },
            {
                "App_Bundle_ID": "mil.army.Matsoft",
                "App_Name": "It",
                "App_Version": "8.17",
                "App_Country": "Kosovo"
            },
            {
                "App_Bundle_ID": "com.java.Fix San",
                "App_Name": "Fix San",
                "App_Version": "0.88",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.msn.Andalax",
                "App_Name": "Greenlam",
                "App_Version": "6.32",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.vimeo.Viva",
                "App_Name": "Mat Lam Tam",
                "App_Version": "7.0",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "com.hao123.It",
                "App_Name": "Tempsoft",
                "App_Version": "4.9",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.goodreads.Voyatouch",
                "App_Name": "Cardguard",
                "App_Version": "2.4",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.hc360.Tin",
                "App_Name": "Bytecard",
                "App_Version": "0.55",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.blogger.It",
                "App_Name": "It",
                "App_Version": "3.3.1",
                "App_Country": "Somalia"
            },
            {
                "App_Bundle_ID": "gov.ftc.Andalax",
                "App_Name": "Veribet",
                "App_Version": "6.3.0",
                "App_Country": "Palestinian Territory"
            },
            {
                "App_Bundle_ID": "com.youku.Solarbreeze",
                "App_Name": "Bigtax",
                "App_Version": "1.90",
                "App_Country": "Ukraine"
            },
            {
                "App_Bundle_ID": "com.ucoz.Stim",
                "App_Name": "Rank",
                "App_Version": "6.50",
                "App_Country": "Costa Rica"
            },
            {
                "App_Bundle_ID": "edu.umich.Kanlam",
                "App_Name": "Bytecard",
                "App_Version": "4.9.7",
                "App_Country": "Czech Republic"
            },
            {
                "App_Bundle_ID": "hk.com.google.Holdlamis",
                "App_Name": "Otcom",
                "App_Version": "5.7.5",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "edu.mit.Tin",
                "App_Name": "Vagram",
                "App_Version": "5.31",
                "App_Country": "Argentina"
            },
            {
                "App_Bundle_ID": "com.nifty.Overhold",
                "App_Name": "Fixflex",
                "App_Version": "0.8.6",
                "App_Country": "Syria"
            },
            {
                "App_Bundle_ID": "uk.co.guardian.Asoka",
                "App_Name": "Greenlam",
                "App_Version": "6.4.9",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "gov.fda.Bitwolf",
                "App_Name": "Matsoft",
                "App_Version": "2.95",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.globo.Bigtax",
                "App_Name": "Aerified",
                "App_Version": "5.2",
                "App_Country": "French Polynesia"
            },
            {
                "App_Bundle_ID": "org.wordpress.Bamity",
                "App_Name": "Wrapsafe",
                "App_Version": "3.37",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.wp.Fintone",
                "App_Name": "Bitchip",
                "App_Version": "0.3.0",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.xing.Matsoft",
                "App_Name": "Gembucket",
                "App_Version": "1.42",
                "App_Country": "Malaysia"
            },
            {
                "App_Bundle_ID": "com.xing.Lotlux",
                "App_Name": "Andalax",
                "App_Version": "5.42",
                "App_Country": "South Africa"
            },
            {
                "App_Bundle_ID": "gov.ftc.Span",
                "App_Name": "Latlux",
                "App_Version": "0.7.5",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.statcounter.Biodex",
                "App_Name": "Cardify",
                "App_Version": "7.6.1",
                "App_Country": "Slovenia"
            },
            {
                "App_Bundle_ID": "com.salon.Aerified",
                "App_Name": "Bigtax",
                "App_Version": "0.2.9",
                "App_Country": "Thailand"
            },
            {
                "App_Bundle_ID": "com.vistaprint.Sub-Ex",
                "App_Name": "Prodder",
                "App_Version": "0.4.9",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.economist.Y-Solowarm",
                "App_Name": "Latlux",
                "App_Version": "0.78",
                "App_Country": "Mexico"
            },
            {
                "App_Bundle_ID": "jp.ameblo.Greenlam",
                "App_Name": "Duobam",
                "App_Version": "7.8",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.go.Zaam-Dox",
                "App_Name": "Holdlamis",
                "App_Version": "0.9.5",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.eventbrite.Lotlux",
                "App_Name": "Zaam-Dox",
                "App_Version": "6.80",
                "App_Country": "Syria"
            },
            {
                "App_Bundle_ID": "jp.co.yahoo.Pannier",
                "App_Name": "Cookley",
                "App_Version": "7.24",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "org.mozilla.Ronstring",
                "App_Name": "Bytecard",
                "App_Version": "3.92",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "cz.phoca.Keylex",
                "App_Name": "Transcof",
                "App_Version": "4.19",
                "App_Country": "Estonia"
            },
            {
                "App_Bundle_ID": "com.flickr.Alpha",
                "App_Name": "Keylex",
                "App_Version": "0.6.3",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "com.trellian.Job",
                "App_Name": "Konklux",
                "App_Version": "0.18",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "com.histats.Transcof",
                "App_Name": "Greenlam",
                "App_Version": "5.0.5",
                "App_Country": "Argentina"
            },
            {
                "App_Bundle_ID": "gov.nasa.Mat Lam Tam",
                "App_Name": "Zontrax",
                "App_Version": "0.6.5",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.constantcontact.Lotlux",
                "App_Name": "Ventosanzap",
                "App_Version": "0.4.6",
                "App_Country": "Poland"
            },
            {
                "App_Bundle_ID": "me.about.Sonsing",
                "App_Name": "Overhold",
                "App_Version": "7.0.4",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.yahoo.Quo Lux",
                "App_Name": "Redhold",
                "App_Version": "0.40",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.sun.Mat Lam Tam",
                "App_Name": "Tres-Zap",
                "App_Version": "5.5",
                "App_Country": "Croatia"
            },
            {
                "App_Bundle_ID": "gl.goo.Prodder",
                "App_Name": "Stringtough",
                "App_Version": "0.2.5",
                "App_Country": "Peru"
            },
            {
                "App_Bundle_ID": "nl.google.Zontrax",
                "App_Name": "Lotstring",
                "App_Version": "9.3",
                "App_Country": "Chile"
            },
            {
                "App_Bundle_ID": "com.tumblr.Matsoft",
                "App_Name": "Asoka",
                "App_Version": "9.6",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "org.bbb.Voyatouch",
                "App_Name": "Regrant",
                "App_Version": "7.8",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.mashable.Bamity",
                "App_Name": "Voltsillam",
                "App_Version": "3.38",
                "App_Country": "Peru"
            },
            {
                "App_Bundle_ID": "com.woothemes.Subin",
                "App_Name": "Namfix",
                "App_Version": "4.8.1",
                "App_Country": "Palestinian Territory"
            },
            {
                "App_Bundle_ID": "br.com.google.Tresom",
                "App_Name": "Bitwolf",
                "App_Version": "1.06",
                "App_Country": "Canada"
            },
            {
                "App_Bundle_ID": "com.nbcnews.Vagram",
                "App_Name": "Otcom",
                "App_Version": "0.6.7",
                "App_Country": "Japan"
            },
            {
                "App_Bundle_ID": "fm.last.Sonsing",
                "App_Name": "Domainer",
                "App_Version": "0.97",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "hk.com.google.Zamit",
                "App_Name": "Latlux",
                "App_Version": "6.4",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "com.usatoday.Redhold",
                "App_Name": "Andalax",
                "App_Version": "2.6.8",
                "App_Country": "Micronesia"
            },
            {
                "App_Bundle_ID": "com.blog.Viva",
                "App_Name": "Home Ing",
                "App_Version": "1.36",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "ca.cbc.Gembucket",
                "App_Name": "Domainer",
                "App_Version": "3.6",
                "App_Country": "Austria"
            },
            {
                "App_Bundle_ID": "com.ted.Regrant",
                "App_Name": "Biodex",
                "App_Version": "0.39",
                "App_Country": "Latvia"
            },
            {
                "App_Bundle_ID": "com.indiatimes.Andalax",
                "App_Name": "Overhold",
                "App_Version": "4.7",
                "App_Country": "Nigeria"
            },
            {
                "App_Bundle_ID": "cn.360.Voyatouch",
                "App_Name": "Gembucket",
                "App_Version": "9.4",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.nba.Fintone",
                "App_Name": "Cardguard",
                "App_Version": "2.61",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.cdbaby.Andalax",
                "App_Name": "Home Ing",
                "App_Version": "0.17",
                "App_Country": "Sierra Leone"
            },
            {
                "App_Bundle_ID": "com.theatlantic.Y-Solowarm",
                "App_Name": "Domainer",
                "App_Version": "4.7",
                "App_Country": "Mexico"
            },
            {
                "App_Bundle_ID": "com.devhub.Stim",
                "App_Name": "Opela",
                "App_Version": "0.1.1",
                "App_Country": "Kazakhstan"
            },
            {
                "App_Bundle_ID": "com.prnewswire.Domainer",
                "App_Name": "Biodex",
                "App_Version": "6.7.7",
                "App_Country": "Samoa"
            },
            {
                "App_Bundle_ID": "de.spiegel.Stronghold",
                "App_Name": "Opela",
                "App_Version": "8.28",
                "App_Country": "Madagascar"
            },
            {
                "App_Bundle_ID": "gov.whitehouse.Sonsing",
                "App_Name": "Hatity",
                "App_Version": "0.84",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.nytimes.Andalax",
                "App_Name": "Vagram",
                "App_Version": "2.0",
                "App_Country": "Czech Republic"
            },
            {
                "App_Bundle_ID": "com.flickr.Fintone",
                "App_Name": "Cookley",
                "App_Version": "0.8.8",
                "App_Country": "Greece"
            },
            {
                "App_Bundle_ID": "com.zdnet.Solarbreeze",
                "App_Name": "Temp",
                "App_Version": "6.36",
                "App_Country": "Cambodia"
            },
            {
                "App_Bundle_ID": "gov.ftc.Redhold",
                "App_Name": "Fixflex",
                "App_Version": "1.8.9",
                "App_Country": "Panama"
            },
            {
                "App_Bundle_ID": "com.cnbc.Stronghold",
                "App_Name": "Subin",
                "App_Version": "0.1.8",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.squidoo.Flexidy",
                "App_Name": "Flowdesk",
                "App_Version": "0.19",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.mysql.Tempsoft",
                "App_Name": "Y-Solowarm",
                "App_Version": "1.5",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "co.g.Pannier",
                "App_Name": "Bytecard",
                "App_Version": "9.9",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.eepurl.Sonsing",
                "App_Name": "Toughjoyfax",
                "App_Version": "8.0.5",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.squarespace.Zathin",
                "App_Name": "Opela",
                "App_Version": "0.4.4",
                "App_Country": "Iran"
            },
            {
                "App_Bundle_ID": "gov.whitehouse.Alpha",
                "App_Name": "Zaam-Dox",
                "App_Version": "7.8",
                "App_Country": "Czech Republic"
            },
            {
                "App_Bundle_ID": "com.twitpic.Duobam",
                "App_Name": "Stringtough",
                "App_Version": "0.38",
                "App_Country": "Kenya"
            },
            {
                "App_Bundle_ID": "com.qq.Rank",
                "App_Name": "Keylex",
                "App_Version": "0.35",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "com.mtv.Bamity",
                "App_Name": "Trippledex",
                "App_Version": "7.2",
                "App_Country": "Norway"
            },
            {
                "App_Bundle_ID": "org.un.Konklux",
                "App_Name": "Vagram",
                "App_Version": "6.7",
                "App_Country": "Norfolk Island"
            },
            {
                "App_Bundle_ID": "org.prlog.Prodder",
                "App_Name": "Matsoft",
                "App_Version": "4.4",
                "App_Country": "Serbia"
            },
            {
                "App_Bundle_ID": "com.geocities.Zontrax",
                "App_Name": "Duobam",
                "App_Version": "0.16",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "uk.gov.Regrant",
                "App_Name": "Aerified",
                "App_Version": "6.1.6",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "uk.co.amazon.Flowdesk",
                "App_Name": "Asoka",
                "App_Version": "0.21",
                "App_Country": "Nigeria"
            },
            {
                "App_Bundle_ID": "com.live.Ronstring",
                "App_Name": "Overhold",
                "App_Version": "0.7.9",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.yolasite.Keylex",
                "App_Name": "Quo Lux",
                "App_Version": "5.8",
                "App_Country": "Sweden"
            },
            {
                "App_Bundle_ID": "ru.narod.Keylex",
                "App_Name": "Bamity",
                "App_Version": "0.5.3",
                "App_Country": "Slovenia"
            },
            {
                "App_Bundle_ID": "io.pen.Zamit",
                "App_Name": "Sonair",
                "App_Version": "8.70",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "org.gmpg.Latlux",
                "App_Name": "Voyatouch",
                "App_Version": "0.1.4",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "co.g.Konklab",
                "App_Name": "Andalax",
                "App_Version": "4.44",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "org.redcross.Greenlam",
                "App_Name": "Bytecard",
                "App_Version": "1.4",
                "App_Country": "Poland"
            },
            {
                "App_Bundle_ID": "gov.census.Lotlux",
                "App_Name": "Bitchip",
                "App_Version": "0.9.3",
                "App_Country": "Mexico"
            },
            {
                "App_Bundle_ID": "com.jimdo.Viva",
                "App_Name": "Subin",
                "App_Version": "0.47",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "com.bloglovin.Rank",
                "App_Name": "Opela",
                "App_Version": "5.43",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "com.ehow.Duobam",
                "App_Name": "Cookley",
                "App_Version": "0.1.3",
                "App_Country": "Bulgaria"
            },
            {
                "App_Bundle_ID": "ru.google.Vagram",
                "App_Name": "Veribet",
                "App_Version": "0.7.8",
                "App_Country": "Sweden"
            },
            {
                "App_Bundle_ID": "com.blogtalkradio.Andalax",
                "App_Name": "Flexidy",
                "App_Version": "9.9.1",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "edu.unc.Zathin",
                "App_Name": "Keylex",
                "App_Version": "0.88",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.ning.Alpha",
                "App_Name": "Pannier",
                "App_Version": "4.0",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "edu.cornell.Veribet",
                "App_Name": "Tresom",
                "App_Version": "5.4.7",
                "App_Country": "Malaysia"
            },
            {
                "App_Bundle_ID": "hk.com.google.Gembucket",
                "App_Name": "Mat Lam Tam",
                "App_Version": "0.6.3",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.chicagotribune.Lotlux",
                "App_Name": "Vagram",
                "App_Version": "0.43",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.google.Stronghold",
                "App_Name": "Keylex",
                "App_Version": "0.1.4",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "gov.nih.Solarbreeze",
                "App_Name": "Bamity",
                "App_Version": "6.12",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.xrea.Bytecard",
                "App_Name": "Tampflex",
                "App_Version": "7.6",
                "App_Country": "Republic of the Congo"
            },
            {
                "App_Bundle_ID": "com.wordpress.Tampflex",
                "App_Name": "Bytecard",
                "App_Version": "0.2.2",
                "App_Country": "Nigeria"
            },
            {
                "App_Bundle_ID": "org.edublogs.Cardguard",
                "App_Name": "Flowdesk",
                "App_Version": "9.10",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.theatlantic.Stringtough",
                "App_Name": "It",
                "App_Version": "1.4",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.gravatar.Holdlamis",
                "App_Name": "Zontrax",
                "App_Version": "9.7.5",
                "App_Country": "Ireland"
            },
            {
                "App_Bundle_ID": "com.wordpress.Tin",
                "App_Name": "Bitchip",
                "App_Version": "0.5.1",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "com.scientificamerican.Stringtough",
                "App_Name": "Stronghold",
                "App_Version": "0.2.2",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.biblegateway.Stronghold",
                "App_Name": "Kanlam",
                "App_Version": "0.1.4",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.wunderground.Tempsoft",
                "App_Name": "Tampflex",
                "App_Version": "0.1.9",
                "App_Country": "Madagascar"
            },
            {
                "App_Bundle_ID": "com.1688.Bitwolf",
                "App_Name": "Viva",
                "App_Version": "8.53",
                "App_Country": "Japan"
            },
            {
                "App_Bundle_ID": "com.hugedomains.Ronstring",
                "App_Name": "Voltsillam",
                "App_Version": "6.88",
                "App_Country": "United Kingdom"
            },
            {
                "App_Bundle_ID": "net.behance.Andalax",
                "App_Name": "Tres-Zap",
                "App_Version": "0.5.1",
                "App_Country": "Democratic Republic of the Congo"
            },
            {
                "App_Bundle_ID": "com.feedburner.Sonair",
                "App_Name": "Pannier",
                "App_Version": "7.5",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.blogspot.Veribet",
                "App_Name": "Zathin",
                "App_Version": "4.90",
                "App_Country": "Bulgaria"
            },
            {
                "App_Bundle_ID": "br.com.google.Bitchip",
                "App_Name": "Tresom",
                "App_Version": "4.7",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.xrea.Tempsoft",
                "App_Name": "Otcom",
                "App_Version": "6.5",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "org.craigslist.Tampflex",
                "App_Name": "Domainer",
                "App_Version": "6.7.3",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "com.yellowbook.Bamity",
                "App_Name": "Ventosanzap",
                "App_Version": "4.9",
                "App_Country": "Sweden"
            },
            {
                "App_Bundle_ID": "com.wunderground.Tampflex",
                "App_Name": "Trippledex",
                "App_Version": "0.9.6",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.vistaprint.Rank",
                "App_Name": "Stringtough",
                "App_Version": "0.3.9",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.fc2.Alphazap",
                "App_Name": "Zaam-Dox",
                "App_Version": "0.55",
                "App_Country": "Ukraine"
            },
            {
                "App_Bundle_ID": "com.bloglovin.Stim",
                "App_Name": "Bytecard",
                "App_Version": "1.3",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "gov.nih.Treeflex",
                "App_Name": "Kanlam",
                "App_Version": "0.74",
                "App_Country": "Sweden"
            },
            {
                "App_Bundle_ID": "org.simplemachines.Alpha",
                "App_Name": "Rank",
                "App_Version": "8.54",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "edu.upenn.Sonsing",
                "App_Name": "Pannier",
                "App_Version": "4.9",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "net.php.Bigtax",
                "App_Name": "Job",
                "App_Version": "8.1.3",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "com.usnews.Bitwolf",
                "App_Name": "Greenlam",
                "App_Version": "0.2.5",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "me.about.Konklux",
                "App_Name": "Treeflex",
                "App_Version": "0.6.8",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.bizjournals.Zoolab",
                "App_Name": "Alphazap",
                "App_Version": "0.82",
                "App_Country": "Kuwait"
            },
            {
                "App_Bundle_ID": "io.github.Opela",
                "App_Name": "Wrapsafe",
                "App_Version": "3.3.6",
                "App_Country": "Bulgaria"
            },
            {
                "App_Bundle_ID": "com.geocities.Zontrax",
                "App_Name": "Cardguard",
                "App_Version": "4.7",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.salon.Fintone",
                "App_Name": "Cookley",
                "App_Version": "6.0.6",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "edu.illinois.It",
                "App_Name": "Mat Lam Tam",
                "App_Version": "5.1",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.mayoclinic.Mat Lam Tam",
                "App_Name": "Fixflex",
                "App_Version": "5.94",
                "App_Country": "Cameroon"
            },
            {
                "App_Bundle_ID": "com.seattletimes.Zaam-Dox",
                "App_Name": "Daltfresh",
                "App_Version": "0.38",
                "App_Country": "Thailand"
            },
            {
                "App_Bundle_ID": "com.yelp.Ronstring",
                "App_Name": "Tresom",
                "App_Version": "5.8.3",
                "App_Country": "Switzerland"
            },
            {
                "App_Bundle_ID": "com.biblegateway.Overhold",
                "App_Name": "Fixflex",
                "App_Version": "2.86",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "org.joomla.Quo Lux",
                "App_Name": "Bigtax",
                "App_Version": "0.64",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "jp.exblog.Transcof",
                "App_Name": "Voyatouch",
                "App_Version": "0.5.0",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "jp.or.plala.Home Ing",
                "App_Name": "Solarbreeze",
                "App_Version": "0.82",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "com.nature.Subin",
                "App_Name": "Ventosanzap",
                "App_Version": "5.0",
                "App_Country": "Nigeria"
            },
            {
                "App_Bundle_ID": "com.rediff.Cardify",
                "App_Name": "Toughjoyfax",
                "App_Version": "1.3",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "com.mysql.Opela",
                "App_Name": "Veribet",
                "App_Version": "4.64",
                "App_Country": "Bosnia and Herzegovina"
            },
            {
                "App_Bundle_ID": "com.eventbrite.It",
                "App_Name": "Ventosanzap",
                "App_Version": "9.81",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "edu.wisc.Ronstring",
                "App_Name": "Holdlamis",
                "App_Version": "7.31",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "ru.ucoz.Flexidy",
                "App_Name": "Sonsing",
                "App_Version": "0.80",
                "App_Country": "Peru"
            },
            {
                "App_Bundle_ID": "com.amazonaws.Zontrax",
                "App_Name": "Ventosanzap",
                "App_Version": "4.6.7",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.oakley.Y-find",
                "App_Name": "Fixflex",
                "App_Version": "0.87",
                "App_Country": "United Kingdom"
            },
            {
                "App_Bundle_ID": "com.macromedia.Redhold",
                "App_Name": "Opela",
                "App_Version": "3.52",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "it.paginegialle.Holdlamis",
                "App_Name": "Andalax",
                "App_Version": "3.71",
                "App_Country": "Vietnam"
            },
            {
                "App_Bundle_ID": "org.pbs.Tresom",
                "App_Name": "Tin",
                "App_Version": "0.64",
                "App_Country": "Japan"
            },
            {
                "App_Bundle_ID": "edu.msu.Zoolab",
                "App_Name": "Alpha",
                "App_Version": "4.4",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.usnews.Zaam-Dox",
                "App_Name": "Job",
                "App_Version": "2.51",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "gov.usgs.Wrapsafe",
                "App_Name": "Redhold",
                "App_Version": "0.6.1",
                "App_Country": "France"
            },
            {
                "App_Bundle_ID": "uk.co.dailymail.Y-find",
                "App_Name": "Flowdesk",
                "App_Version": "0.85",
                "App_Country": "Azerbaijan"
            },
            {
                "App_Bundle_ID": "com.bloomberg.Sonair",
                "App_Name": "Zaam-Dox",
                "App_Version": "7.7",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "mil.army.Aerified",
                "App_Name": "Stim",
                "App_Version": "1.4",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.domainmarket.Domainer",
                "App_Name": "Lotstring",
                "App_Version": "0.8.9",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "uk.co.independent.It",
                "App_Name": "Wrapsafe",
                "App_Version": "4.74",
                "App_Country": "Philippines"
            },
            {
                "App_Bundle_ID": "edu.cmu.Keylex",
                "App_Name": "Cardify",
                "App_Version": "8.7.5",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.domainmarket.Otcom",
                "App_Name": "Prodder",
                "App_Version": "8.1",
                "App_Country": "Poland"
            },
            {
                "App_Bundle_ID": "com.blog.Regrant",
                "App_Name": "Greenlam",
                "App_Version": "7.28",
                "App_Country": "United States"
            },
            {
                "App_Bundle_ID": "com.deviantart.Konklab",
                "App_Name": "Quo Lux",
                "App_Version": "0.58",
                "App_Country": "Uruguay"
            },
            {
                "App_Bundle_ID": "com.shareasale.Tres-Zap",
                "App_Name": "Bytecard",
                "App_Version": "0.75",
                "App_Country": "Nepal"
            },
            {
                "App_Bundle_ID": "org.unesco.Otcom",
                "App_Name": "Cardguard",
                "App_Version": "4.3",
                "App_Country": "Guatemala"
            },
            {
                "App_Bundle_ID": "com.zdnet.Konklux",
                "App_Name": "Voyatouch",
                "App_Version": "7.5.2",
                "App_Country": "Indonesia"
            },
            {
                "App_Bundle_ID": "de.google.Namfix",
                "App_Name": "Bytecard",
                "App_Version": "8.02",
                "App_Country": "Vietnam"
            },
            {
                "App_Bundle_ID": "com.issuu.Veribet",
                "App_Name": "Stim",
                "App_Version": "1.3",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.disqus.Domainer",
                "App_Name": "Otcom",
                "App_Version": "0.53",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.biblegateway.Span",
                "App_Name": "Job",
                "App_Version": "0.98",
                "App_Country": "Poland"
            },
            {
                "App_Bundle_ID": "edu.princeton.Asoka",
                "App_Name": "Tres-Zap",
                "App_Version": "4.2.9",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "org.archive.Lotlux",
                "App_Name": "Zontrax",
                "App_Version": "0.1.8",
                "App_Country": "Poland"
            },
            {
                "App_Bundle_ID": "com.squarespace.Opela",
                "App_Name": "Fintone",
                "App_Version": "1.78",
                "App_Country": "Egypt"
            },
            {
                "App_Bundle_ID": "com.sitemeter.Transcof",
                "App_Name": "Rank",
                "App_Version": "4.53",
                "App_Country": "Canada"
            },
            {
                "App_Bundle_ID": "com.woothemes.Y-find",
                "App_Name": "Quo Lux",
                "App_Version": "0.95",
                "App_Country": "Cameroon"
            },
            {
                "App_Bundle_ID": "ru.google.Toughjoyfax",
                "App_Name": "Tempsoft",
                "App_Version": "4.45",
                "App_Country": "Lithuania"
            },
            {
                "App_Bundle_ID": "com.bloomberg.Stringtough",
                "App_Name": "Asoka",
                "App_Version": "8.04",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.amazon.Job",
                "App_Name": "Trippledex",
                "App_Version": "0.79",
                "App_Country": "Brazil"
            },
            {
                "App_Bundle_ID": "com.reference.Otcom",
                "App_Name": "Greenlam",
                "App_Version": "0.6.1",
                "App_Country": "Norway"
            },
            {
                "App_Bundle_ID": "com.smugmug.Voltsillam",
                "App_Name": "Cookley",
                "App_Version": "0.26",
                "App_Country": "Portugal"
            },
            {
                "App_Bundle_ID": "com.bizjournals.Zaam-Dox",
                "App_Name": "Alpha",
                "App_Version": "0.5.1",
                "App_Country": "China"
            },
            {
                "App_Bundle_ID": "com.bloglines.Daltfresh",
                "App_Name": "Flexidy",
                "App_Version": "5.64",
                "App_Country": "Croatia"
            },
            {
                "App_Bundle_ID": "com.forbes.Zontrax",
                "App_Name": "Daltfresh",
                "App_Version": "8.6.6",
                "App_Country": "Russia"
            },
            {
                "App_Bundle_ID": "com.bing.Flexidy",
                "App_Name": "Tres-Zap",
                "App_Version": "2.5.0",
                "App_Country": "Mongolia"
            },
            {
                "App_Bundle_ID": "jp.geocities.Flexidy",
                "App_Name": "Toughjoyfax",
                "App_Version": "4.1.8",
                "App_Country": "Philippines"
            }
        ]
        
        },{}],3:[function(require,module,exports){
        const { getAllData,getAppById } = require("../controllers/app.js");
        
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
        
        },{"../controllers/app.js":1}]},{},[3]);
        