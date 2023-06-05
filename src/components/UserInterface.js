import React from "react";

function UserInterface({
  randomWord,
  userInput,
  accuracyList,
  overallAccuracy,
  keyPressCount,
  handleInputChange,
  minutes,
  seconds,
}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Typing Accuracy</h2>
      <p>Random Word: {randomWord}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        maxLength={8}
        className="border border-gray-300 rounded px-2 py-1 mt-2 text-center"
      />
      <div className="mt-2">
        <p>Accuracy: {accuracyList.join(", ")}</p>
        <p>Overall Accuracy: {overallAccuracy.toFixed(2)}%</p>
        <p>Key Press Count: {keyPressCount}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">
          Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>
      </div>
    </div>
  );
}

export default UserInterface;
