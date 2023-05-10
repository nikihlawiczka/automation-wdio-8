//S použitím $ najdi na stránce elementy:
/*------------------PODLE tagu---------------------------*/

// form element podle tagu 
const form = await $('form');
console.log(await form.getHTML());

//input element podle tagu
const input = await $('INPUT');
console.log(await input.getHTML());


//button element podle tagu
const button = $('button');
console.log(await button.getHTML());

/*------------------PODLE ID---------------------------*/
//políčko email podle ID
const email = await $('#email');
console.log(await email.getHTML());

//políčko password podle ID
const password = await $('#password');
console.log(await password.getHTML());

/*------------------PODLE třídy---------------------------*/
//tlačítko na odeslání formuláře pomocí třídy
const primybutton = await $('.btn-primary');
console.log(await primarybutton.getHTML());

//políčko email podle atributu name
const nameemail = await $('[name="email"]');
console.log(await nameemail.getHTML());


/*------------------PODLE atributu---------------------------*/
//políčko password podle attributu type
const typepasword = await $('[type="password"]');
console.log(await typepasword.getHTML());

//políčko podle atributu jehož honota obsahuje “ass”
const atribut_ass = await $('[type*="ass"]');
console.log(await atribut_ass.getHTML());

//políčko podle atributu jehož honota končí na na “word”
const atribut_word = await $('[type$="word"]');
console.log(await atribut_word.getHTML());

//políčko podle atributu jehož honota začíná na “pass”
const atribut_pass = await $('[type^="pass"]');
console.log(await atribut_pass.getHTML());

/*------------------kombinace---------------------------*/
//podle kombinovaného selektoru pro tag input a id email
const kombinaceTagID = await $('input#email');
console.log(await kombinaceTagID.getHTML());


//podle kombinovaného selektoru pro tag input a atribut type s hodnotou password
const kombinaceInputAtribut = await $('input[type="password"]');
console.log(await kombinaceInputAtribut.getHTML());


//podle kombinovaného selektoru pro tag button a třídu btn-primary
const kombinaceTagTrida = await $('button.btn-primary');
console.log(await kombinaceInputAtribut.getHTML());


/*------------------Řazení selektrorů---------------------------*/
//vytvoř řetězení $ pro tag div > form > input[type$="word"]
const retez = await $('div').$('form').$('input[type$="word"]');
console.log(await retez.getHTML());
      
/*------------------WDIO SELEKTORY---------------------------*/
//najdi element podle textu "Zapomněli jste své heslo?"
const otazka = await $('=Zapomněli jste své heslo?');
console.log(await otazka.getHTML());
