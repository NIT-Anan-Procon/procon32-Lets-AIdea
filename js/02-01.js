let ai_ex = "ライオンが座っている",
  ng_word = ["ライオン", "座っている"];
for (let i = 1; i < ng_word.length; i++)
  ng_word[0] = ng_word[0] + " " + ng_word[i];
ai.innerHTML =
  "<span style='font-size: 5vh; line-height: 6vh; margin: 1vh; color: blue;'>AI説明文</span><br>" +
  ai_ex;
ng.innerHTML =
  "<span style='font-size: 5vh; line-height: 6vh; margin: 1vh; color: red;'>NGワード</span><br>" +
  ng_word[0];
