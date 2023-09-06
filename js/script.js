/* TITLE */
/*  */
const outputTitle = document.getElementById('heading');

const name = prompt('Inserire il nome');
const lastname = prompt('Inserire il cognome');
const favouriteColor = prompt('Inserire il colore preferito');

const titleMessage =
`Ciao ${name} ${lastname}. <br/>
Bel colore il ${favouriteColor}!`;

outputTitle.innerHTML = titleMessage;

/* PASSWORD GENERATED */
const outputPsw = document.getElementById('pswgen');
const psw= `La passworld per te generata è ${name}${lastname}${favouriteColor}23`;

outputPsw.innerHTML = psw;