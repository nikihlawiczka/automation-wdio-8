
//UKOL Z PRVNÍ LEKCE, SCREENSHOT
describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.getWindowSize();

        await browser.saveScreenshot('registrace.png');

    });

});


/*UKOL Z DRUHÉ LEKCE, NAJÍT selektory

---------Políčko pro jméno a příjmení; #name (ID)
const name = await $('#name');
console.log(await name.getHTML());

---------Políčko pro email; #email (ID)
const email = await $('#email');
console.log(await email.getHTML());

---------Políčko pro zadání hesla; #password (ID)
const password = await $('#password');
console.log(await password.getHTML());

---------Políčko pro kontrolu zadaného hesla; #password-confirm (ID)
const password-confirm = await $('#password-confirm');
console.log(await password-confirm.getHTML());

---------Tlačítko na registraci; .btn-primary (třída)
const btn-primary = await $('.btn-primary');
console.log(await btn-primary.getHTML()); 
*/