/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  let generateExcuse = () => {
    let culprit = [
      "My Dad",
      "My brother Kyle",
      "My Mom",
      "My dog Lucy",
      "My cat Chicha"
    ];

    let what = [" destroyed ", " ate ", " stole "];
    let thing = [" my shoes ", " my clothes "];
    let when = [" today ", " a few hours ago ", " yesterday "];
    let where = [" at home ", " on the street ", " at the movies "];

    let culpritIndex = Math.floor(Math.random() * culprit.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let thingIndex = Math.floor(Math.random() * thing.length);
    let whenIndex = Math.floor(Math.random() * when.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return (
      culprit[culpritIndex] +
      "" +
      what[whatIndex] +
      "" +
      thing[thingIndex] +
      "" +
      when[whenIndex] +
      "" +
      where[whereIndex]
    );
  };
};
