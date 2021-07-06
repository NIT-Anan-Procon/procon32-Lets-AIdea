let user_point = [
  [1, 1, "千夜"],
  [19, 19, "智乃"],
  [1, 4, "理世"],
  [45, 45, "心愛"],
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

icon1.innerHTML += "<p>" + user_point[0][2] + "</p>";
sum_pt1.innerHTML += user_point[0][0] + user_point[0][1];
ex_pt1.innerHTML += user_point[0][0];
ans_pt1.innerHTML += user_point[0][1];
icon2.innerHTML += "<p>" + user_point[1][2] + "</p>";
sum_pt2.innerHTML += user_point[1][0] + user_point[1][1];
ex_pt2.innerHTML += user_point[1][0];
ans_pt2.innerHTML += user_point[1][1];
icon3.innerHTML += "<p>" + user_point[2][2] + "</p>";
sum_pt3.innerHTML += user_point[2][0] + user_point[2][1];
ex_pt3.innerHTML += user_point[2][0];
ans_pt3.innerHTML += user_point[2][1];
