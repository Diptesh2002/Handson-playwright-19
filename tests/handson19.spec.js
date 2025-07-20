import {test,expect} from '@playwright/test'
test('Handson19',async({page})=>{
    await page.goto("https://formy-project.herokuapp.com/");
    await page.locator("//a[@class='btn btn-lg'][normalize-space()='Complete Web Form']").click();
    await page.getByPlaceholder('Enter first name').fill('Diptesh');
    await page.getByPlaceholder('Enter last name').fill('Panda');
    await page.getByPlaceholder('Enter your job title').fill('Automation Testing');
    await expect(page.locator("//input[@id='radio-button-3']")).not.toBeChecked();
    await page.locator("//input[@id='radio-button-3']").check();
    await page.locator("//input[@id='checkbox-1']").click();
    await page.locator("//select[@id='select-menu']").selectOption({value:'1'});
    await page.getByPlaceholder("mm/dd/yyyy").click();
    await page.locator("//td[@class='today day']").scrollIntoViewIfNeeded();
    await page.locator("//td[@class='today day']").click();
    await page.locator("//a[normalize-space()='Submit']").click();
    await page.pause();
})