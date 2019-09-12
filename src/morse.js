import React from "react";

import "./morse.css";

const Morse = () => {
  // logika zobrazování a skrývání elementů
  function fadeIn(elem) {
    elem.style.display = "block";
    elem.style.opacity = 0;
    var i = 0;
    var inte = setInterval(function() {
      elem.style.opacity = Number(elem.style.opacity) + 0.3;
      if (i >= 1.2) {
        clearInterval(inte);
      } else {
        i++;
      }
    }, 100);
  }
  //   skrýt element
  function hide(elem) {
    elem.style.display = "none";
  }
  //   set variables
  window.onload = function() {
    var encodeEnter = document.getElementById("encodeEnter"),
      decodeEnter = document.getElementById("decodeEnter"),
      decBack = document.getElementById("decBack"),
      decBtn = document.getElementById("decBtn"),
      encBtn = document.getElementById("encBtn"),
      encText = document.getElementById("encText"),
      decCode = document.getElementById("decCode"),
      mainDiv = document.getElementById("mainDiv"),
      encodeDiv = document.getElementById("encodeDiv"),
      decodeDiv = document.getElementById("decodeDiv"),
      encBack = document.getElementById("encBack"),
      encResult = document.getElementById("encResult"),
      decResult = document.getElementById("decResult"),
      //  použitelné písmena
      pismena = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        " ",
        "\n"
      ],
      //   písmenům odpovídající morseovka
      symboly = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
        "-----",
        ".----",
        "..---",
        "...--",
        "....-",
        ".....",
        "-....",
        "--...",
        "---..",
        "----.",
        "",
        "\n"
      ];
    // logika kódování
    //   kliknutím schovat jeden element a zobrazit druhý
    encodeEnter.onclick = function() {
      hide(mainDiv);
      fadeIn(encodeDiv);
    };
    encBack.onclick = function() {
      hide(encodeDiv);
      fadeIn(mainDiv);
    };
    // kliknutím sebrat values z boxu se kterýma se bude pracovat
    encBtn.onclick = function() {
      // ostříhat, uppercase aby sedělo s array "pismena", rozdělit do array
      var txt = encText.value
          .trim()
          .toUpperCase()
          .split(""),
        code = "";
      // najít odpovídající symbol pro každé písmeno
      for (var i in txt) {
        //   jestli se jedná o poslední písmeno array, nepřidávat '/'
        if (i == txt.length - 1) {
          code += symboly[pismena.indexOf(txt[i])];
        } else code += symboly[pismena.indexOf(txt[i])] + "/";
      }
      //   jestli je někde undefined, výsledek je invalid
      if (code.includes("undefined")) {
        encResult.innerText = "Invalid input!";
        // jinak zobrazit výsledek
      } else encResult.innerText = code;
      fadeIn(encResult);
    };

    // dekódování
    //   kliknutím schovat jeden element a zobrazit druhý
    decodeEnter.onclick = function() {
      hide(mainDiv);
      fadeIn(decodeDiv);
    };
    decBack.onclick = function() {
      hide(decodeDiv);
      fadeIn(mainDiv);
    };
    // rozdělit kód na znaku '/'
    decBtn.onclick = function() {
      var code = decCode.value.split("/"),
        txt = "";
      // zaplnit txt písmenama podle symbolů
      for (var i in code) {
        txt += pismena[symboly.indexOf(code[i])];
      }
      //   jestli je někde undefined, výsledek je invalid

      if (txt.includes("undefined")) {
        decResult.innerText = "Invalid input!";
        // jinak zobrazit výsledek
      } else decResult.innerText = txt;
      fadeIn(decResult);
    };
  };

  return (
    <div>
      <div id="mainDiv">
        <h1>Morse Code/Decode</h1>
        <div id="indexBtn">
          <button id="encodeEnter">Kódovat</button>
          <button id="decodeEnter">Dekódovat</button>
        </div>
      </div>

      <div id="encodeDiv">
        <textarea id="encText" placeholder="Zadejte text"></textarea>
        <button id="encBtn">Kódovat</button>
        <button id="encBack">Zpět</button>
        <p id="encResult"></p>
      </div>

      <div id="decodeDiv">
        <textarea id="decCode" placeholder="Zadejte kód"></textarea>
        <button id="decBtn">Dekódovat</button>
        <button id="decBack">Zpět</button>
        <div id="decResult"></div>
      </div>
    </div>
  );
};

// poslat pro použití v App.js
export default Morse;
