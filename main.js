const selections = document.querySelectorAll(".optionbtn");
const mainbtn  = document.querySelector(".mainbtn");

let madnessSelection;

for( let i = 0; i < selections.length; i++){
    selections[i].addEventListener('click', function(){
        madnessSelection = selections[i].getAttribute('data-optionChoice');
        mainbtn.setAttribute('onclick',madnessSelection+"()");
    });
    
}

function rgbavalue(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let transparency = Math.random().toFixed(2);
    let randomvalue = "rgba("+red+","+green+","+blue+","+transparency+")";
    return randomvalue;
}

function gradientmadness(){
    let gradient ="linear-gradient(to right,"+rgbavalue()+","+rgbavalue()+"";
    document.body.style.background = gradient;
    document.body.style.backgroundColor = rgbavalue();
    document.querySelector(".madnessAnswer").innerText= "Gradient: "+ gradient;
}


function fixmadness(){
    const colornames = ["AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"];
    let randomvalue = colornames[Math.floor(Math.random()*colornames.length)];
    document.body.style.removeProperty('background');
    document.body.style.backgroundColor = randomvalue;
    document.querySelector(".madnessAnswer").innerText = "Background Color: "+randomvalue;
    document.querySelector(".fixmadness").style.backgroundColor = colornames[Math.floor(Math.random()*colornames.length)];
    document.querySelector(".infinitemadness").style.backgroundColor = colornames[Math.floor(Math.random()*colornames.length)];
    document.querySelector(".gradientmadness").style.backgroundColor = colornames[Math.floor(Math.random()*colornames.length)];
    document.querySelector(".mainbtn").style.backgroundColor = colornames[Math.floor(Math.random()*colornames.length)];

    
}

function infinitemadness(){
    document.body.style.removeProperty('background');
    let randomvalue = rgbavalue();
    document.body.style.backgroundColor = randomvalue;
    document.querySelector(".madnessAnswer").innerText = "Background Color: "+randomvalue;
}