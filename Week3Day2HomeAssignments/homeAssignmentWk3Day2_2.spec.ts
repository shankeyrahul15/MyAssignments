import test, { chromium } from '@playwright/test'

test("Edit Lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSalesManager")
    await page.locator('[name=PASSWORD]').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text='Leads'`).click()
    await page.locator(`//a[text()='Create Lead']`).click()
    await page.locator(`[id=createLeadForm_companyName]`).fill('Testleaf')
    await page.locator(`[id=createLeadForm_firstName]`).fill('Rahul')
    await page.locator('[id=createLeadForm_lastName]').fill('Sahu')
    await page.locator('[name=submitButton]').click()
    await page.locator(`//a[text()='Edit']`).click()
    await page.locator(`#updateLeadForm_companyName`).fill('Update Company Name Test')
    await page.locator(`.smallSubmit`).first().click()
    await page.waitForTimeout(2000)
})