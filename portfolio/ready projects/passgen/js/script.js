var keylist='abcdeghjijklmnopqrstyvwxyz1234567890!@#$%^&*';
var tmp='';

function generatepass(plength){
    tmp='';
for (let i = 0; i < plength; i++) {
    tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
}
return tmp;
}

function populateform(enterlength) {
    document.PassGen.output.value = generatepass(enterlength)
}