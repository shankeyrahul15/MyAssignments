import test, { expect } from '@playwright/test'
test("Frame", async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")

    const frame=page.frames()
    const frame1=frame[1]
    frame1.locator("#Click").click()
    await expect(frame1.locator("#Click")).toHaveText('Hurray! You Clicked Me.')

    console.log(`The total frame count present in this page is:${frame.length}`)

    const nestFrame=frame[4]
    nestFrame.locator("#Click").click()
    await expect(nestFrame.locator("#Click")).toHaveText('Hurray! You Clicked Me.')
})