import { Reducer, useReducer } from "react";
import BookingForm from "../forms/BookingForm";

const reducer: Reducer<typeof initialState, { type: string, payload: string }> = (state, action) => {
  switch (action.type) {
    case action.type:
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
  "22:00",
]

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (time: string, date: string) => {
    dispatch({ type: time, payload: date });
  };

  return (
    <>
      <BookingForm availableTimes={state} updateTimes={updateTimes}/>
    </>
  );
}

