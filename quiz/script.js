let file_name = window.location.href.split("/").pop().slice(0, 2);
switch (file_name) {
  case "ex":
    let ai_ex = "草原でライオンが座っている。",
      ng_word = ["草原", "ライオン"];
    for (let i = 1; i < ng_word.length; i++)
      ng_word[0] = ng_word[0] + " " + ng_word[i];
    image.innerHTML =
      "<img src='https://source.unsplash.com/featured/?lion,1'>";
    ai.innerHTML =
      '<span style="font-size: 5vh; line-height: 6vh; margin: 1vh; color: blue;">AI説明文</span><br>' +
      ai_ex;
    ng.innerHTML =
      '<span style="font-size: 5vh; line-height: 6vh; margin: 1vh; color: red;">NGワード</span><br>' +
      ng_word[0];
    break;

  /* ----------------------------------------- */

  case "an":
    let another_ex = "サバンナで、百獣の王が日向ぼっこをしている。",
      correct = 1,
      circle = '<div class="check"><img src="img/circle.png"></div>',
      cross = '<div class="check"><img src="img/cross.png"></div>',
      alphabet = ["big", "zoo", "animal", "wild"];
    another.innerHTML = another_ex;
    for (let i = 1; i <= 4; i++)
      eval(
        "image" +
          i +
          ".innerHTML = \"<img src='https://source.unsplash.com/featured/?lion," +
          alphabet[i - 1] +
          "'>\";"
      );
    function checkAnswer(user_answer) {
      for (let i = 1; i <= 4; i++) {
        if (correct == i) eval("image" + i + ".innerHTML+=circle");
        else eval("image" + i + ".innerHTML+=cross");
      }
      if (user_answer == correct) console("correct");
      window.setTimeout(function () {
        window.location.href = "result.html";
      }, 3000);
    }
    break;

  /* ----------------------------------------- */

  case "re":
    let userASSOC = {
        user1: { ex: 9, ans: 13, name: "智乃" },
        user2: { ex: 8, ans: 20, name: "心愛" },
        user3: { ex: 2, ans: 17, name: "千夜" },
        user4: { ex: 5, ans: 14, name: "理世" },
      },
      user = [[], [], [], []],
      keyI = 0;
    let userJSON = JSON.stringify(userASSOC);
    userASSOC = JSON.parse(userJSON);
    for (let keyA in userASSOC) {
      for (let keyB in userASSOC[keyA]) user[keyI].push(userASSOC[keyA][keyB]);
      keyI++;
    }
    for (let i = 0; i < user.length - 1; i++) {
      for (let j = i; j < user.length - 1; j++) {
        if (user[i][0] + user[i][1] < user[j + 1][0] + user[j + 1][1]) {
          let tmp = user[i][0];
          user[i][0] = user[j + 1][0];
          user[j + 1][0] = tmp;
          tmp = user[i][1];
          user[i][1] = user[j + 1][1];
          user[j + 1][1] = tmp;
          tmp = user[i][2];
          user[i][2] = user[j + 1][2];
          user[j + 1][2] = tmp;
        }
      }
    }
    user[0].push(1);
    for (let i = 1; i < user.length; i++) {
      if (user[i - 1][0] + user[i - 1][1] == user[i][0] + user[i][1])
        user[i].push(user[i - 1][3]);
      else user[i].push(i + 1);
      switch (user[i][3]) {
        case 1:
          user[i][3] += "st";
          break;
        case 2:
          user[i][3] += "nd";
          break;
        case 3:
          user[i][3] += "rd";
          break;
        case 4:
          user[i][3] += "th";
          break;
      }
    }
    for (let i = 0; i < user.length; i++) {
      eval(
        "icon" + (i + 1) + ".innerHTML += '<p>' + user[" + i + "][2] + '</p>';"
      );
      eval(
        "sum_pt" +
          (i + 1) +
          ".innerHTML += user[" +
          i +
          "][0] + user[" +
          i +
          "][1];"
      );
      eval("ex_pt" + (i + 1) + ".innerHTML += user[" + i + "][0];");
      eval("ans_pt" + (i + 1) + ".innerHTML += user[" + i + "][1];");
    }
    for (let i = 1; i < user.length; i++) {
      eval("rank" + (i + 1) + ".innerHTML = user[" + i + "][3];");
    }
    break;
}
