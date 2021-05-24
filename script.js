
function RandomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

function OnLoad(){
var Target = document.createElement("div"); 
Target.id="Target";
document.getElementById("GamePanel").appendChild(Target); 
Target.addEventListener("click", OnTargetClick); 
Target.style.position = "absolute";
ChangeTargetPosition();
}

function OnResize(){

}

function OnTargetClick(){
ChangeTargetPosition();
}

function ChangeTargetPosition(){
var Target = document.getElementById("Target");
var Top = RandomNumber(0,100-4);
var Left = RandomNumber(0,100-4);
Target.style.left = Left + "vw";
Target.style.top = Top + "vh";
}

