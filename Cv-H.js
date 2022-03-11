// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'A la conquête du monde !';

let myHeading = document.querySelector('h1');
    myHeading.textContent === 'A la conquête du monde!!';







// LET MYIMAGE = DOCUMENT.QUERYSELECTOR('IMG');

// MYIMAGE.ADDEVENTLISTENER('CLICK', FUNCTION() {
//     LET MYSRC = MYIMAGE.GETATTRIBUTE('SRC');
//     IF (MYSRC === "5.JPG") {
//       MYIMAGE.SETATTRIBUTE('SRC', "4.JPG");
//     } ELSE {
//       MYIMAGE.SETATTRIBUTE('SRC', "5.JPG");
//     }
// });






// function myFunction() {
//     document.getElementById("change").style.filter = "grayscales(100%)";
//     document.body.style.backgroundColor = "gray"
//     }


// $( ".change" ).on("click", function() {
//     if( $( "body" ).hasClass( "dark" )) {
//         $( "body" ).removeClass( "dark" );
//         $( ".change" ).text( "OFF" );
//     } else {
//         $( "body" ).addClass( "dark" );
//         $( ".change" ).text( "ON" );
//     }
// });

let button = document.querySelector('.btn')
button.addEventListener('click', () =>(
    document.documentElement.classList.toggle('dark-mode')
))




function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "5.jpg") 
    {
        document.getElementById("imgClickAndChange").src = "4.jpg";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "5.jpg";
    }
    or
    {
        document.getElementById("imgClickAndChange").src = "4.jpg";
    }
}