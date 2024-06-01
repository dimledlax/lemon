import { useState, FormEvent, ChangeEvent } from "react";
import { BookingFormProps } from "../../models"


export default function BookingForm({ availableTimes, updateTimes }: BookingFormProps) {

  const [booking, setBooking] = useState({
    name: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
    email: ""
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTimes(booking.time, booking.date)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  }

  const isFormValid = () => {
    return (
      booking.name &&
      booking.guests &&
      booking.date &&
      booking.time &&
      booking.occasion &&
      booking.email
    );
  }

  return (
    <div className="reserveTable">
      <div className="reserveTableContainer">
        <h1>Table reservation</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={booking.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={booking.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="guests"
                  id="guests"
                  placeholder="Guests"
                  min={1}
                  max={10}
                  value={booking.guests}
                  onChange={handleChange}
                  style={{ width: "5em" }}
                />
              </div>

              <div>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={booking.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <select
                  name="time"
                  id="time"
                  value={booking.time}
                  onChange={handleChange}
                >
                  <option value="">Time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                    ))}
                </select>
              </div>

              <div>
                <select
                  name="occasion"
                  id="occasion"
                  value={booking.occasion}
                  onChange={handleChange}
                >
                  <option value="">Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
              </div>
              <div>
                <button disabled={!isFormValid()} type="submit"
                value="Book" className="bookButton"
                >Book</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}