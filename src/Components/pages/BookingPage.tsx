import { useReducer } from "react";
import BookingForm from "../forms/BookingForm";
import { Reducer } from "react";

const reducer: Reducer<typeof initialState, { type: string }> = (state, action) => {
  switch (action.type) {
    case "17:00":
    case "18:00":
    case "19:00":
    case "20:00":
    case "21:00":
    case "22:00":
      return state.filter((time) => time !== action.type);

    case "reset":
      return initialState;

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

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (time: string) => {
    dispatch({ type: time });
  };

  const initializeTimes = () => {
    dispatch({ type: "reset" });
  }

  return (
    <>
      <BookingForm availableTimes={state} updateTimes={updateTimes} initializeTimes={initializeTimes}/>
    </>
  );
}
