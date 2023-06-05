import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomWord } from "./RandomWords";
import { calculateAccuracy } from "./Accuracy";
import {
  setUserInput,
  addAccuracy,
  setOverallAccuracy,
  incrementKeyPressCount,
} from "./store";
import UserInterface from "./UserInterface";

function Main() {
  const userInput = useSelector((state) => state.userInput);
  const accuracyList = useSelector((state) => state.accuracyList);
  const overallAccuracy = useSelector((state) => state.overallAccuracy);
  const keyPressCount = useSelector((state) => state.keyPressCount);
  const dispatch = useDispatch();

  const [randomWord, setRandomWord] = useState(generateRandomWord());
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    // Calculate overall accuracy whenever the accuracy list changes
    const sum = accuracyList.reduce((total, accuracy) => total + accuracy, 0);
    const overallAccuracy =
      accuracyList.length > 0 ? sum / accuracyList.length : 0;
    dispatch(setOverallAccuracy(overallAccuracy));

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [accuracyList, dispatch]);

  function handleInputChange(event) {
    const value = event.target.value;
    dispatch(setUserInput(value));

    if (value.length === 8) {
      // Calculate accuracy
      const currentAccuracy = calculateAccuracy(value, randomWord);
      dispatch(addAccuracy(currentAccuracy));
      dispatch(incrementKeyPressCount());
      dispatch(setUserInput(""));
      setRandomWord(generateRandomWord());
    }
  }

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <UserInterface
      randomWord={randomWord}
      userInput={userInput}
      accuracyList={accuracyList}
      overallAccuracy={overallAccuracy}
      keyPressCount={keyPressCount*8}
      handleInputChange={handleInputChange}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

export default Main;
