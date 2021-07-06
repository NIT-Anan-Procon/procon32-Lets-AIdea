let people=["マコ", "ケイ", "カコ", "アキヒト" ];
let explane=["ライオンが座っている", "ライオンがたたずんでいる", "ライオンがいる", "犬が草原にいる"];
let tx='', i;
let sw=[], clt=[], clb=[];

for(i=0; i<people.length; i++){
    sw[i]='OFF';
    clt[i]='';
    clb[i]='';
}

for(i=0; i<people.length; i++){
    tx=tx+'<div id=icon><img src="img/icon_frame.png"><p>'+people[i]+'</p></div>';
    tx=tx+'<button type="button" id="color'+i+'" onclick="changeColor('+i+')">';
    tx=tx+explane[i];
    tx=tx+'</button>';
}
player.innerHTML=tx;

function chack(n){
    if(sw[n]==='OFF'){
        sw[n]='ON'
    }else{
        sw[n]='OFF'
    }
    for(i=0; i<people.length; i++){
        if(n!=i){
            sw[i]='OFF';
            clt[i]='';
            clb[i]='';
        }
    }
}

function changeColor(n){
    if(sw[n]==='OFF'){
        clt[n]='#ffffff';
        clb[n]='#4169e1';
        chack(n);
    }else{
        clt[n]='';
        clb[n]='';
        chack(n);
    }
    for(i=0; i<people.length; i++){
        eval("document.getElementById('color"+i+"').style.color=clt["+i+"];");
        eval("document.getElementById('color"+i+"').style.backgroundColor=clb["+i+"];");
    }
}
