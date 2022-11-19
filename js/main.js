let menuBtn = document.querySelector('.head__menu--toggle');
let popUpMenu = document.querySelector('.popupMenu');
let section = document.querySelectorAll( "section" );


let menuOpen = false;

menuBtn.addEventListener('click', () => {

    if( !menuOpen ) {
        for( let prop of section ) {
            prop.classList.add('hide');
        }
    } else {
        for( let prop of section ) {
            prop.classList.remove('hide');
        }
    }

    if(!menuOpen) {
        menuBtn.classList.add('change');
        popUpMenu.classList.add('change');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('change');
        popUpMenu.classList.remove('change');
        menuOpen = false;
    }

});