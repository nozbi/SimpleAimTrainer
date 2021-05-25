
var Top;
var Left;


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
var Target = document.getElementById("Target");
var TargetHeight = Target.offsetHeight;
var TargetWidth = Target.offsetWidth;
var GamePanelHeight = document.getElementById("GamePanel").offsetHeight;
var GamePanelWidth = document.getElementById("GamePanel").offsetWidth;
var MaxTop = GamePanelHeight-TargetHeight;
var MaxLeft = GamePanelWidth-TargetWidth;
var Inaccuracy = 0.1;
Target.style.left = Left + "vw";
Target.style.top = Top + "vh";
}

function OnTargetClick(){
ChangeTargetPosition();
}

function ChangeTargetPosition(){
var Target = document.getElementById("Target");
var TargetHeight = Target.offsetHeight;
var TargetWidth = Target.offsetWidth;
var GamePanelHeight = document.getElementById("GamePanel").offsetHeight;
var GamePanelWidth = document.getElementById("GamePanel").offsetWidth;
var MaxTop = GamePanelHeight-TargetHeight;
var MaxLeft = GamePanelWidth-TargetWidth;
var Inaccuracy = 0.1;
Top = RandomNumber(0,PXToVH(MaxTop)-Inaccuracy);
Left = RandomNumber(0,PXToVW(MaxLeft)-Inaccuracy);
Target.style.left = Left + "vw";
Target.style.top = Top + "vh";
}

function PXToVH(Px){
return (100*Px)/document.getElementById("GamePanel").offsetHeight;
}

function PXToVW(Px){
return (100*Px)/document.getElementById("GamePanel").offsetWidth;
}

