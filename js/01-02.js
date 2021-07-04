let tx='', cltext='#000000', clback='#f0f8ff';
let explane=["ライオンが座っている", "ライオンがたたずんでいる", "ライオンがいる", "犬が草原にいる"];
let people=["マコ", "ケイ", "カコ", "アキヒト" ];

for(let i=0; i<people.length; i++){
    tx=tx+'<div id=icon><img src="img/icon_frame.png"><p>'+people[i]+'</p></div>';
    tx=tx+'<button type="button" id="color'+i+'" onclick="changeColor(\'color'+i+'\')">';
    tx=tx+explane[i];
    tx=tx+'</button>';
}
player.innerHTML=tx;

function changeColor(idname){
    let obj = document.getElementById(idname);
    if(cltext==='#000000'){
        cltext='#ffffff';
        clback='#4169e1';

    }else{
        cltext='#000000';
        clback='#f0f8ff';
    }
    obj.style.color=cltext;
    obj.style.backgroundColor=clback;
}