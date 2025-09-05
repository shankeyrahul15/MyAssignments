import test, { chromium } from '@playwright/test'

test("Create Individuals",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.locator('.slds-icon-waffle').click()
    await page.locator(`//button[@aria-label='View All Applications']`).click()
    await page.locator(`//p[text()='Individuals']`).click()
    await page.locator(`input[placeholder='Search this list...']`).last().fill('Sahu')
    await page.locator(`input[placeholder='Search this list...']`).last().press('Enter')//is this right?
    await page.locator(`//span[@data-cell-type='lstOutputLookup']`).last().click()//need help unable to click
    await page.locator(`//div[@title='Edit']`).last().click()//need help
    await page.locator(`//a[text()='--None--']`).first().click()
    await page.locator(`//a[contains(text(),'Mr.')]`).click()
    await page.locator(`input[placeholder='First Name']`).fill('Rahul')
    await page.locator(`//span[text()='Save']`).click()
    await page.waitForTimeout(2000)
})