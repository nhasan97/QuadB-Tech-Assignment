import { useParams } from "react-router-dom";
import useGetParticularShow from "../../hooks/useGetParticularShow";
import Loading from "../../components/Loading/Loading";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { addToCart, getCart } from "../../Utilities/LocalStorage";
import "./TicketBookingForm.css";

const TicketBookingForm = () => {
  const showId = useParams();
  const [loading, matchedShow] = useGetParticularShow(showId.id);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("./bookings.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (bookings.length > 0) {
      const cart = getCart();
      const bookingsInCart = [];
      for (const id of cart) {
        const showObj = bookings.find((show) => show.show.id === id);
        if (showObj) {
          bookingsInCart.push(showObj);
        }
      }
      setCartItems(bookingsInCart);
    }
  }, [bookings]);

  const handleUpdateSurvey = (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value || "Not Found";
    const showName = form.showName.value || "Not Found";
    const time = form.time.value || "Not Found";
    const day = form.day.value || "Not Found";
    const name = form.name.value || "Not Found";
    const email = form.email.value || "Not Found";
    const cell = form.cell.value || "Not Found";

    if (matchedShow.show.status === "Ended") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry the show is already over",
      });
    } else if (matchedShow.show.status === "In Development") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry the show is in development",
      });
    } else {
      const booking = {
        id,
        showName,
        time,
        day,
        name,
        email,
        cell,
      };

      console.log(booking);

      const newCartItems = [...cartItems, booking];
      setCartItems(newCartItems);
      addToCart(booking);
      Swal.fire({
        title: "Congrates!!!",
        text: "Booking done successfully!",
        icon: "success",
      });
      //   form.reset();
    }
  };

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="booking-form-container">
        <h1 className="title">Booking Form</h1>

        <form className="booking-form" onSubmit={handleUpdateSurvey}>
          <input
            type="text"
            name="id"
            required
            hidden
            defaultValue={matchedShow.show.id}
          />

          <input
            type="text"
            name="showName"
            placeholder="Show Name"
            readOnly
            required
            defaultValue={matchedShow?.show?.name}
            className="textfield"
          />

          <input
            type="text"
            id="in4"
            name="time"
            placeholder="Show Time"
            required
            readOnly
            defaultValue={matchedShow?.show?.schedule?.time}
            className="textfield"
          />

          <input
            type="text"
            id="in4"
            name="day"
            placeholder="Show Day"
            required
            readOnly
            defaultValue={matchedShow?.show?.schedule?.days[0]}
            className="textfield"
          />

          <input
            type="text"
            id="in4"
            name="name"
            placeholder="Your Name"
            required
            className="textfield"
          />

          <input
            type="email"
            id="in4"
            name="email"
            placeholder="Your Email"
            required
            className="textfield"
          />

          <input
            type="text"
            id="in4"
            name="cell"
            placeholder="Your Phone Number"
            required
            className="textfield"
          />

          <input type="submit" value="Submit" className="book-ticket-btn" />
        </form>
      </div>
    );
  }
};

export default TicketBookingForm;
