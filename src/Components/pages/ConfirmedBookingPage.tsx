import { useState } from "react";

export default function ConfirmedBookingPage() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    setComment("");
    setScore("10");
    setSubmitStatus(true);
  };

  return !submitStatus ? (
    <>
      <div className="confirmationPage">
        <div className="confirmationContainer">
          <form onSubmit={handleSubmit} className="rateForm">
            <fieldset>
            <h3>Your booking has been confirmed.</h3>
              <span>Please leave your feedback:</span>
              <div className="rateField">
                <label htmlFor="range">Score: {score} ⭐ </label>
                <input
                  name="range"
                  type="range"
                  min="0"
                  max="10"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
              <div className="rateField">
                <label htmlFor="textarea">Comment: </label>
                <textarea
                  name="textarea"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="min 10 characters"
                  rows={3}
                  cols={33}
                ></textarea>
              </div>
              <button type="submit" className="onlineMenuButton">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="confirmationPage">
        <div className="confirmationContainer">
          <h3>Feedback is submitted successfully. Thank you!  </h3>
        </div>
      </div>
    </>
  );
}
