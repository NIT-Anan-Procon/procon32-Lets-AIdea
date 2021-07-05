let people=["マコ", "ケイ", "カコ", "アキヒト" ];
let explane=["ライオンが座っている", "ライオンがたたずんでいる", "ライオンがいる", "犬が草原にいる"];
let tx='', i;
let cl=[];

for(i=0; i<people.length; i++){
    cl[i]='OFF';
}

for(i=0; i<people.length; i++){
    tx=tx+'<div id=icon><img src="img/icon_frame.png"><p>'+people[i]+'</p></div>';
    tx=tx+'<button type="button" id="color'+i+'" onclick="changeColor(\'color'+i+'\', '+i+')">';
    tx=tx+explane[i];
    tx=tx+'</button>';
}
player.innerHTML=tx;

function changeColor(idname, n){
    let obj = document.getElementById(idname);
    if(cl[n]==='OFF'){
        obj.style.color='#ffffff';
        obj.style.backgroundColor='#4169e1';
        cl[n]='ON'
    }else{
        obj.style.color='';
        obj.style.backgroundColor='';
        cl[n]='OFF'
    }
}