/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
function generateExcuse() {
  let who = [
    "Santa",
    "The dog",
    "16 squrriels",
    "My grandma",
    "The mailman",
    "My bird"
  ];
  let action = ["ate", "peed on", "crushed", "broke", "stole", "sold on ebay"];
  let what = ["my homework", "my phone", "my car", "my sister"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
console.log(generateExcuse());
