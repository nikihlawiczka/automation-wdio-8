import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'


// describe('Czechitas Login Page', async () => {

 //   it('should open login page', async () => {

  //      await browser.reloadSession();

 //       await browser.url('/prihlaseni');

  //      await browser.pause(5000);
//
 //   });

//});


//druhé cvičení

/* describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.pause(5000);

        const Form = await $('form')
        console.log(await Form.getHTML())

    });

});
 */

//třetí cvičení 

describe('Login And Applications Page', async () => {

    it('should login and list applications', async () => {

    await browser.reloadSession();

    await browser.url('/prihlaseni');

    const emailField = $('#email');

    const passwordField = $('#password');

    console.log('Email field is displayed: ' + await emailField.isDisplayed());

    console.log('Email field is enabled: ' + await emailField.isEnabled());

    console.log('Password field is displayed: ' + await passwordField.isDisplayed());

    console.log('Password field is enabled: ' + await passwordField.isEnabled());

    const loginButton = await $('.btn-primary');
    
    console.log('Login button text: ' + await loginButton.getText());

    const Link = $('form').$('a').getAttribute('href');

    console.log('Link for forgotten password: ' + await Link);

    await emailField.setValue('da-app.admin@czechitas.cz');

    await passwordField.setValue('Czechitas123');

    await loginButton.click();

    const currentUser = $('.navbar-right').$('strong');

    console.log(await currentUser.getText());

/* cvičení druhé*/

    await $('=Přihlášky').click();


    });
});


    




