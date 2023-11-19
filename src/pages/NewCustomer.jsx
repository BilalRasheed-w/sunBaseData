import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";

const NewCustomer = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const notify = () => toast.error("Name field's can't be empty");

  const data = {
    first_name,
    last_name,
    street,
    address,
    city,
    state,
    email,
    phone,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (first_name.trim().length === 0 || last_name.trim().length === 0) {
      return notify();
    }

    console.log(data);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover={false}
      />
      <div className="hero">
        <div className="container">
          <h2>Customer Details</h2>
          <form action="" onSubmit={(e) => handleSubmit(e)} className="form">
            <div className="input">
              <input
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCustomer;
