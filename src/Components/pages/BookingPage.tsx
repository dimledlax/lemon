import { Reducer, useReducer, useState } from "react";
import { BookingState } from "../../models";
import { FormData } from "../../models"
import { useNavigate } from "react-router-dom";
import BookingForm from "../forms/BookingForm";

const reducer: Reducer<BookingState, { type: string, payload: { date: string, time: string } }> = (state, action) => {
  switch (action.type) {
    case 'BOOK_TIME':
      return {
        ...state,
        [action.payload.date]: [...(state[action.payload.date] || []), action.payload.time]
      };
    default:
      return state;
  }
};

const initialState: BookingState = {};

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const navigate = useNavigate();

  const updateTimes = (time: string, date: string) => {
    dispatch({ type: 'BOOK_TIME', payload: { date, time } });
  };

  const getAvailableTimes = (state: BookingState, date: string): string[] => {
    const allTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const bookedTimes = state[date] || [];
    return allTimes.filter(time => !bookedTimes.includes(time));
  };

  const submitForm = async (formData: FormData) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        navigate("/confirmation");
        return true;
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const submitAPI = (formData: FormData): boolean => {
    return formData ? true : false;
  }

  return (
    <BookingForm
          availableTimes={getAvailableTimes(state, selectedDate)}
          setSelectedDate={setSelectedDate}
          updateTimes={updateTimes}
          submitForm={submitForm}
    />
  );
}

