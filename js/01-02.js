let play=4, tx='', cltext='#000000', clback='#f0f8ff', explane=["ライオンが座っている", "ライオンがたたずんでいる",　"ライオンがいる", "犬が草原にいる"];

for(let i=0; i<play; i++){
    tx=tx+'<img src="img/icon_frame.png">';
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