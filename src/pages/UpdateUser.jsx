import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

// const url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";


const UpdateUser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const notify = () => toast.error("Name field's can't be empty");
  const { id } = useParams();
  const url = `https://dummyjson.com/users/${id}`;
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(url);

      if (response.status === 200) {
        const { data } = response;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setStreet(data.address.address);
        setAddress(data.address.address);
        setCity(data.address.city);
        setState(data.address.state);
        setEmail(data.email);
        setPhone(data.phone);
      }
    };
    fetchUser();
  }, [id]);

  const data = {
    cmd: "update",
    first_name,
    last_name,
    street,
    address,
    city,
    state,
    email,
    phone,
  };

  const headers = {
    Authorization: "this is the received token",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (first_name.trim().length === 0 || last_name.trim().length === 0) {
      return notify();
    }
    //    we need t post this newly updated data to the url given in the assignment
    alert("User updated Successfully");
    // const response = await axios.post(url, data, { headers });
    // console.log(response);
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
          <h2>User Details</h2>
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
                placeholder="Address"
                value={address}
                style={{ width: "100%" }}
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
                type="text"
                placeholder="Phone"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
