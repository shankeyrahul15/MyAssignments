import test, { chromium } from '@playwright/test'

test("Create a new account",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.getByLabel("username").fill("ravindran.ramdas@testleaf.com")
    await page.getByLabel("password").fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.waitForTimeout(2000);
    const title =await page.title()
    const url=await page.url()
    console.log('title is '+title)
    console.log('url is '+url)
    await page.locator('.slds-icon-waffle').click()
    await page.getByText("View All").click()
    await page.getByPlaceholder("Search apps or items...").fill('Service')
    await page.locator(`(//mark[text()='Service'])[1]`).click()
    await page.locator(`a[title='Accounts']`).click()
    //await page.getByRole('button',{name:'New'}).click() ---need help
    await page.locator(`//div[@title='New']`).click()
    await page.locator(`input[name='Name']`).fill('Test Account')
    await page.locator(`//button[text()='Save']`).click()
    await page.waitForTimeout(2000)
})