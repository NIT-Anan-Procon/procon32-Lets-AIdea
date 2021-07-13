try {
  let ai_ex = "ライオンが座っている",
    ng_word = ["ライオン", "座っている"];
  for (let i = 1; i < ng_word.length; i++)
    ng_word[0] = ng_word[0] + " " + ng_word[i];
  ai.innerHTML =
    '<span style="font-size: 5vh; line-height: 6vh; margin: 1vh; color: blue;">AI説明文</span><br>' +
    ai_ex;
  ng.innerHTML =
    '<span style="font-size: 5vh; line-height: 6vh; margin: 1vh; color: red;">NGワード</span><br>' +
    ng_word[0];
} catch (e) {
  /* ----------------------------------------- */

  try {
    let another_ex = "ライオンが座っている";
    another.innerHTML = another_ex;
    function checkAnswer() {
      image1.innerHTML += '<div id="check"><a><img src="img/circle.png"></div>';
      image2.innerHTML += '<div id="check"><img src="img/cross.png"></div>';
      image3.innerHTML += '<div id="check"><img src="img/cross.png"></div>';
      image4.innerHTML += '<div id="check"><img src="img/cross.png"></div>';
      window.setTimeout(function () {
        window.location.href = "result.html";
      }, 3000);
    }
  } catch (e) {
    /* --------------------------------------- */

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
      if (user_point[i][3] == 1) user_point[i][3] += "st";
      else if (user_point[i][3] == 2) user_point[i][3] += "nd";
      else if (user_point[i][3] == 3) user_point[i][3] += "rd";
      else if (user_point[i][3] == 4) user_point[i][3] += "th";
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
  }
}
