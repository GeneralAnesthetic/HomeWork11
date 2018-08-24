// Your friend data goes here

var friendsArray = [
  {
    name: "Garry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPl0H9ms-ECztJa-rqFjl790okQdV4mC1SV3dm9HpLN6lR5JQBQ",
    scores: [3, 1, 5, 3, 5, 3, 3, 2, 3, 2]
  },
  {
    name: "Barry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8DJfVfLKKWoJO5dTZ19CzOq2JiQrKdMKW6hfRbUbUtzEy_ge",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Jerry",
    photo:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe_NF9Jb9lIBLJbKikTGj5bavrJDEK1es1s0KQ-jfvC-2z9T-",
    scores: [2, 1, 3, 1, 5, 1, 2, 3, 1, 1]
  },
  {
    name: "Terry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6duBIpfDRbn6Qb_0VZpZHySHpKj9uZEnwoISnyt_jdpuN8fh1",
    scores: [5, 4, 4, 4, 5, 5, 5, 5, 4, 4]
  },
  {
    name: "Perry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnjBTiBjkKplK0bmjSmqWz9h5HDx53urvgj_SiAxv_v-TKHaR",
    scores: [5, 3, 4, 4, 5, 4, 3, 4, 4, 2]
  },
  {
    name: "Marry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBauIyE8FiDx12i8q3vqi3dU-13spMjMtIwKV7emCucPkic96XrQ",
    scores: [2, 2, 3, 2, 2, 1, 3, 2, 4, 2]
  },
  {
    name: "Kerry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzIGPI_JwEOQApPxK1Xt4dqjfzf2qtj3OdNTkz-eT6Ch71WPi4g",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Gus",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPl0H9ms-ECztJa-rqFjl790okQdV4mC1SV3dm9HpLN6lR5JQBQ",
    scores: [5, 1, 1, 1, 5, 5, 5, 5, 4, 5]
  },
  {
    name: "Aubrey",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ2VBXSMwlndsbO7LSfVCVrR6ZOAyZ-xPR2AfTh6SQS1eF0qd",
    scores: [3, 3, 2, 4, 3, 3, 4, 4, 4, 4]
  },
  {
    name: "Sherry",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPl0H9ms-ECztJa-rqFjl790okQdV4mC1SV3dm9HpLN6lR5JQBQ",
    scores: [5, 3, 3, 3, 2, 5, 5, 5, 1, 4]
  }
];
console.log(friendsArray[0].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[1].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[2].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[3].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[4].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[5].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[6].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[7].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[8].scores.reduce((a, b) => a + b, 0));
console.log(friendsArray[9].scores.reduce((a, b) => a + b, 0));

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
