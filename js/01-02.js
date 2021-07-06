let people=["トリコ", "ココ", "コマツ", "サニー" ]; //プレイヤーネーム
let explane=["ライオンが座っている", "ライオンがたたずんでいる", "ライオンがいる", "犬が草原にいる"]; //説明文
let tx='', i;　　　　　　　　 // tx:htmlのコード保存用  i:for文用  
let sw=[], clt=[], clb=[];   // sw[]:ボタンの状態  clt[]:テキストの色  clb[]:ボタンの色

//配列の初期化
for(i=0; i<people.length; i++){
    sw[i]='OFF';
    clt[i]='';
    clb[i]='';
}

//htmlのコード書き込み
for(i=0; i<people.length; i++){
    tx=tx+'<div id=icon><img src="img/icon_frame.png"><p>'+people[i]+'</p></div>';
    tx=tx+'<button type="button" id="color'+i+'" onclick="changeColor('+i+')">';
    tx=tx+explane[i];
    tx=tx+'</button>';
}
player.innerHTML=tx;

/*
ボタンの状態の処理を行う関数
ボタンが押されているものをON
ボタンが押されていないものをOFF、
*/
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

/*
ボタンの色を変更する関数
押されたボタンの色の変更
押されていないボタンの色をリセット
*/
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
