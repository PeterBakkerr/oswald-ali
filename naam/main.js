const button = document.querySelector('.btn');
const inpt = document.querySelector('.input');
const rsult = document.querySelector('.result')

button.addEventListener("click",showinput);

    function showinput(){

    const inpt = document.querySelector('.input');
    const naam = inpt.value;
    rsult.innerHTML = naam;

if (naam == "oswald ali" ) {
        alert ('je bent cool')
        const img = document.querySelector(".foto")
        img.classList.toggle ('hidden');
}
else {
    alert ('coole naam')
    const img = document.querySelector(".fotoo")
    img.classList.toggle ('hidden');
}



};