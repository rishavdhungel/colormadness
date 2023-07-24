const selections = document.querySelectorAll(".optionbtn");
const mainbtn  = document.querySelector(".mainbtn");
// console.log(mainbtn);
// console.log(selections);
// console.log(selections[0]);
// console.log(selections[1]);
// console.log(selections[2]);
let madnessSelection;

for( let i = 0; i < selections.length; i++){
    selections[i].addEventListener('click', function(){
        console.log(selections[i].getAttribute('data-optionChoice'));
        madnessSelection = selections[i].getAttribute('data-optionChoice');
        mainbtn.setAttribute('onclick',madnessSelection+"()");
    });
    
}




function madness(){
    document.body.style.backgroundColor = "rgb(248, 93, 93)";
    const color = "rgb(248, 93, 93)";
    document.querySelector(".madnessAnswer").innerText="Background Color:"+`${color}`;
}


function gradientmadness(){
    document.body.style.backgroundColor = "red";


}


function fixmadness(){
    document.body.style.backgroundColor = "green";


}

function infinitemadness(){
    document.body.style.backgroundColor = "white";


}