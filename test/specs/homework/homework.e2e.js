
/* //UKOL Z PRVNÍ LEKCE, SCREENSHOT
describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.getWindowSize();

        await browser.saveScreenshot('registrace.png');

    });

}); */


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

/* //ÚKOL ZE TŘETÍ LEKCE

Prohldédni si strnánku pro registraci Otevřít stránku pro registraci https://team8-2022brno.herokuapp.com/registrace.

Vycházej z úkolu z lekce 2 a napiš kód který na stránce pro registraci
Vyplní jméno a příjmení
Vyplní email
Vyplní a potvrdí heslo
Klikne na tlačítko pro odeslání registračního formuláře
*/

describe ('Registracion page', async () => {
    it ('should register new user', async () => {
        
        await browser.reloadSession();
        await browser.url('/registrace');
         
        const nameField = $('#name');
        await nameField.setValue('Svetřík Teplý');

        const emailField = $('#email');
        await emailField.setValue('nosimsvetrik@seznam.cz');

        const passwordField = $('#password');
        await passwordField.setValue('užminenízima');

        const passwordFieldConf = $('#password-confirm');
        await passwordFieldConf.setValue('užminenízima');

        const registrationButton = $('.btn-primary');
        await registrationButton.click();

    })
});






