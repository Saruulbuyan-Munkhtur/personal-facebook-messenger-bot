const puppeteer = require('puppeteer');
async function getJobTitles(){
    const browser = await puppeteer.launch({ headless: false }); // for test disable the headlels mode,
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto("https://www.naukri.com/software-engineer-jobs",{waitUntil: 'networkidle2'});

    console.log("start evaluate javascript")
    /** @type {string[]} */
    const productNames = await page.evaluate(()=>{
        const div = document.querySelectorAll('.jobTuple');
        console.log(div) // console.log inside evaluate, will show on browser console not on node console
        
        const productnames = [] 
        div.forEach(element => { 
            const titleelem = element.querySelector('.title');
            if(titleelem != null){
                productnames.push(titleelem.textContent);
            }
        });

        return productnames
    })

    console.log(productNames)
    browser.close()
} 

getJobTitles();