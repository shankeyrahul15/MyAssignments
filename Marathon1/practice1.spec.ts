import test, { chromium } from '@playwright/test'

test("Create and verify a New Case in Chatter",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill("ravindran.ramdas@testleaf.com")
    await page.locator('[name=pw]').fill("RaviTestleaf#1432")
    await page.locator('#Login').click()
    await page.locator('.slds-icon-waffle').click()
    await page.locator(`//button[@aria-label='View All Applications']`).click()
    await page.locator(`//input[@class='slds-input']`).fill('Service')//not stable
    await page.locator(`//p[@title='Manage customer service with accounts, contacts, cases, and more']`).click()
    await page.locator(`//a[@title='Cases']`).click()
    await page.locator(`//div[@title='New']`).click()
    await page.locator(`//input[@placeholder ='Search Contacts...']`).click()
    await page.click(`//span[contains (text(),'New Contact')]`)
    await page.locator(`[name=salutation]`).click()
    await page.locator(`//span[contains(text(),'Mr.')]`).click()
    await page.locator(`[name=firstName]`).fill('Rahul')
    await page.locator(`[name=lastName]`).fill('Sahu')
    await page.locator(`.slds-button.slds-button_brand`).last().click()//doesn't click
    //await page.click(`//input[@placeholder ='Search Accounts...']`)
    await page.getByPlaceholder(`Search Accounts...`).first().click()
    await page.locator(`//span[contains (text(),'New Account')]`).click()
    await page.locator(`[name=Name]`).fill('test')
    await page.locator(`[name=AccountNumber]`).fill(`12345677`)
    await page.locator(`//button[@aria-label='Rating']`).click()
    await page.click(`//span[@title='Hot']`)
    await page.locator(`.slds-button.slds-button_brand`).last().click()

    await page.locator(`//button[@aria-label='Status']`).click()
    await page.locator(`//span[@title='New']`).last().click()
    await page.locator(`//button[@aria-label='Priority']`).click()
    await page.locator(`//span[@title='High']`).click()
    await page.locator(`//button[@aria-label='Case Origin']`).click()
    await page.locator(`//span[@title='Email']`).click()
    await page.locator('[name=Subject]').fill('Product Return Request')
    await page.locator(`(//textarea[@class='slds-textarea'])[1]`).fill('Requesting a return for a defective product')
    await page.locator(`//button[text()='Save']`).click()

    await page.locator(`[name=Edit]`).click()
    await page.locator(`//button[@aria-label='Status']`).click()
    await page.locator(`//span[@title='Escalated']`).last().click()
    await page.locator(`//button[text()='Save']`).click()

    await page.locator(`//span[text()='Share an update...']`).click()
    await page.locator(`//div[@data-placeholder='Share an update...']`).fill('test share')

    await page.locator(`//button[text()='Share']`).click()
    await page.locator(`//div[@data-aura-class='forceChatterOverflowActionMenu supportCompactFeedOverflowActionMenu']`).last().click()//unable to click
    await page.locator(`//a[@role='menuitem']`).first().click()
    await page.locator(`//span[text()='Chatter']`).click()
    const status=await page.locator(`(//span[@title='Unlike'])[1]`).textContent()
    console.log(status)


    await page.waitForTimeout(3000)
})