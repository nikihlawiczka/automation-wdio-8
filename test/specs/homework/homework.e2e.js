describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.getWindowSize();

        await browser.saveScreenshot('registrace.png');

    });

});
