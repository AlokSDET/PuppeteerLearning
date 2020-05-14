/*

IIFE: Immediately invoked functional expression  

EC5: ECMA Script 5
using await : puppeteer.launch method is asynchronous method retruns promise of browser.to resolve this we can use await.

by default its headless.

*/
const puppeteer = require('puppeteer');
(async() =>{

    console.log("Hi Guys");

    const browser = await puppeteer.launch({


        "headless": false
    });

    const page = await browser.newPage();

    await page.goto("https://www.google.com");
    await browser.close();

})();