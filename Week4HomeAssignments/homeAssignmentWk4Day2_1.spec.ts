import test, { expect } from '@playwright/test'
test("Automating Alert & Frame Interactions", async({page})=>{

    await page.on('dialog', async alertName=>{
        console.log(alertName.message())
        const alertType = alertName.type()
        console.log(alertType)
        await alertName.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const frame = page.frameLocator('(//iframe)[2]')
    await frame.locator(`//button[text()='Try it']`).click()
    await expect(frame.locator(`//p[text()='You pressed OK!']`)).toHaveText('You pressed OK!');
})