import { Reducer, useReducer, useEffect } from "react";
import BookingForm from "../forms/BookingForm";

const reducer: Reducer<typeof initialState, { type: string }> = (state, action) => {
  switch (action.type) {
    case "17:00":
    case "18:00":
    case "19:00":
    case "20:00":
    case "21:00":
    case "22:00":
      return state.filter((time) => time !== action.type);

    default:
      return state;
  }
};

const initialState = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

useEffect(() => {
  initializeTimes();
})

const initializeTimes = () => {
  // fetchAPI(date)
}

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (time: string) => {
    dispatch({ type: time });
  };

  return (
    <>
      <BookingForm availableTimes={state} updateTimes={updateTimes}/>
    </>
  );
}

