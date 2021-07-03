let play=4, tx='', count=0, explane=["ライオンが座っている", "ライオンがたたずんでいる",　"ライオンがいる", "犬が草原にいる"];

for(let i=0; i<play; i++){
    tx=tx+'<img src="img/icon_frame.png">';
    tx=tx+'<button type="button" id="color'+i+'" onclick="changeColor(\'color'+i+'\')">';
    tx=tx+explane[i];
    tx=tx+'</button>';
}
player.innerHTML=tx;

function changeColor(idname){
    count++;
    let obj = document.getElementById(idname);
    if(count%2==1){
        obj.style.color = '#ffffff';
        obj.style.backgroundColor = '#4169e1';
    }else{
        obj.style.color = '#000000';
        obj.style.backgroundColor = '#f0f8ff';
    }
}