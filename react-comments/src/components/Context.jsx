import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const maxRating = 10;
  const ratingMainContainer = "rating-container--main";
  const feedbackMainArea = "feedback-area--main";
  const ratingSubmittedContainer = "feedback-rating";
  const feedbackSubmittedArea = "feedback-text";
  const [feedbackArr, setFeedbacksArr] = useState(() => {
    return [
      {
        id: 1,
        rating: 8,
        feedback: "first feedback",
      },
      {
        id: 2,
        rating: 4,
        feedback: "second feedback",
      },
      {
        id: 3,
        rating: 5,
        feedback: "third feedback",
      },
    ];
  });
  const [text, setText] = useState(() => "");
  const [feedbackObj, setFeedbackObj] = useState(() => ({}));
  const [isAutoFocus, setAutoFocus] = useState(() => true);
  const [isSubmitted, setIsSubmitted] = useState(() => false);

  useEffect(() => {
    JSON.stringify(feedbackObj) !== "{}" &&
      setFeedbacksArr((prev) => {
        return [...prev, feedbackObj];
      });
  }, [feedbackObj]);

  useEffect(() => {
    feedbackArr.length && console.log(feedbackArr);
  }, [feedbackArr]);

  return (
    <Context.Provider
      value={{
        maxRating,
        ratingMainContainer,
        feedbackMainArea,
        ratingSubmittedContainer,
        feedbackSubmittedArea,
        feedbackArr,
        setFeedbacksArr,
        text,
        setText,
        feedbackObj,
        setFeedbackObj,
        isAutoFocus,
        setAutoFocus,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
