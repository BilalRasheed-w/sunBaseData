import Navbar from "./components/Navbar";
import CustomerDetails from "./pages/CustomerDetails";

import Login from "./pages/Login";
import NewCustomer from "./pages/NewCustomer";
import UpdateUser from "./pages/UpdateUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<NewCustomer />} />
        <Route path="/customers" element={<CustomerDetails />} />
        <Route path="/user/:id" element={<UpdateUser />} />

      </Routes>
     
    </Router>
  );
};
export default App;
