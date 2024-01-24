import React from "react";
import { useState } from "react";

function App() {
  const smallAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const largeAlphabet = [
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
  ];

  const charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // "-", "_" Char removed

  const charSpecial = ["!", "@", "$", "*"];

  const [passwords, setPasswords] = useState([]);

  function generatePassword() {
    const passwordLength = 16;
    const password = [];

    password.push(...getRandomCharacters(smallAlphabet, 4));
    password.push(...getRandomCharacters(largeAlphabet, 4));
    password.push(...getRandomCharacters(charNumber, 4));
    password.push(...getRandomCharacters(charSpecial, 4));

    const remainingLength = passwordLength - password.length;
    password.push(
      ...getRandomCharacters(
        [...smallAlphabet, ...largeAlphabet, ...charNumber, ...charSpecial],
        remainingLength
      )
    );
    const shuffledPassword = shuffleArray(password);

    return shuffledPassword.join("");
  }
  function getRandomCharacters(characters, count) {
    const randomChars = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomChars.push(characters[randomIndex]);
    }
    return randomChars;
  }

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const handleGenerateClick = () => {
    const newPasswords = [];
    for (let i = 0; i < 4; i++) {
      newPasswords.push(generatePassword());
    }
    setPasswords(newPasswords);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      {passwords.map((password, index) => (
        <p key={index}>
          Pass{index + 1}: {password}
        </p>
      ))}
      <button onClick={handleGenerateClick}>Generate</button>
    </div>
  );
}

export default App;
