import axios from "axios";
import { useEffect, useState } from "react";
import "./customerDetails.css";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

//  since i was getting blocked by Cors error means i cant get token
//   and without token i can't access users so i decided to  use a similar url

// const url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp'

const url = "https://dummyjson.com/users";

const CustomerDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(url);
        setUsers(response.data.users.slice(0, 15));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCustomers();
  }, []);

  const delHandler = async (user) => {
    alert("Are you really want to delete this Person.?");
    //  we just need to send delete request here
    //  const url = '/user/${id}'
    // try {
    //   const response = await axios.delete(url);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
   { users.length > 0 ? 
    <div className="list">
    <h2>Customers List </h2>
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index} className="tableRow">
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address.address}</td>
              <td>{user.address.city}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <div className="icons">
                  <Link to={`/user/${user.id}`} style={{ color: "grey" }}>
                    <FaUserEdit className="icon" />
                  </Link>
                  /
                  <MdDelete
                    className="icon"
                    onClick={() => delHandler(user)}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <p>no users yet</p>
        )}
      </tbody>
    </table>
  </div>
      : <h2 style={{textAlign:"center", marginTop:"1rem"}} >No Users yet</h2>}
     
    </>
  );
};

export default CustomerDetails;
