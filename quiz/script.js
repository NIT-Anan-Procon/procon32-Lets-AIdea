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
      if (user_answer == correct)
        break;
      window.setTimeout(function () {
        window.location.href = "result.html";
      }, 3000);
    }
    break;

  /* ----------------------------------------- */

  case "re":
    let user_point = [
      [9, 13, "智乃"],
      [8, 20, "心愛"],
      [2, 17, "千夜"],
      [5, 14, "理世"],
    ];
    for (let i = 0; i < user_point.length - 1; i++) {
      for (let j = i; j < user_point.length - 1; j++) {
        if (
          user_point[i][0] + user_point[i][1] <
          user_point[j + 1][0] + user_point[j + 1][1]
        ) {
          let tmp = user_point[i][0];
          user_point[i][0] = user_point[j + 1][0];
          user_point[j + 1][0] = tmp;
          tmp = user_point[i][1];
          user_point[i][1] = user_point[j + 1][1];
          user_point[j + 1][1] = tmp;
          tmp = user_point[i][2];
          user_point[i][2] = user_point[j + 1][2];
          user_point[j + 1][2] = tmp;
        }
      }
    }
    user_point[0].push(1);
    for (let i = 1; i < user_point.length; i++) {
      if (
        user_point[i - 1][0] + user_point[i - 1][1] ==
        user_point[i][0] + user_point[i][1]
      )
        user_point[i].push(user_point[i - 1][3]);
      else user_point[i].push(i + 1);
      switch (user_point[i][3]) {
        case 1:
          user_point[i][3] += "st";
          break;
        case 2:
          user_point[i][3] += "nd";
          break;
        case 3:
          user_point[i][3] += "rd";
          break;
        case 4:
          user_point[i][3] += "th";
          break;
      }
    }
    for (let i = 0; i < user_point.length; i++) {
      eval(
        "icon" +
          (i + 1) +
          ".innerHTML += '<p>' + user_point[" +
          i +
          "][2] + '</p>';"
      );
      eval(
        "sum_pt" +
          (i + 1) +
          ".innerHTML += user_point[" +
          i +
          "][0] + user_point[" +
          i +
          "][1];"
      );
      eval("ex_pt" + (i + 1) + ".innerHTML += user_point[" + i + "][0];");
      eval("ans_pt" + (i + 1) + ".innerHTML += user_point[" + i + "][1];");
    }
    for (let i = 1; i < user_point.length; i++) {
      eval("rank" + (i + 1) + ".innerHTML = user_point[" + i + "][3];");
    }
    break;
}
