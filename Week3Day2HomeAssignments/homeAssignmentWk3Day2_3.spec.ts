import test, { chromium } from '@playwright/test'

test("Create Individuals",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.locator('.slds-icon-waffle').click()
    await page.locator(`//button[@aria-label='View All Applications']`).click()
    await page.locator(`//p[text()='Individuals']`).click()
    await page.locator(`//div[@title='New']`).click()//need help
    await page.locator(`input[placeholder='Last Name']`).fill('Sahu')
    await page.locator(`//button[@title='Save']`).last().click()
    await page.waitForTimeout(2000)
})