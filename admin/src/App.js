import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RoutingcallAuth } from "./components/Auth/RoutingcallAuth";
import { RoutingCallAdmin } from "./components/Admin/RoutingCallAdmin";
 import { setUser, selectUser } from "./StoreRedux/UserSlice";

function App() {
  const dispatch = useDispatch();
  const storeUsers = useSelector(selectUser);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data:', data);
        dispatch(setUser(data.users));
        // Process the data as needed
        // console.log('Data:', data.);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error.message);
      }
    }

    // Call the function
    fetchData();
  }, []);
  console.log("usersssssssss");
  console.log(storeUsers);
  // For demonstration purposes, set some initial user data in the store
  return (
    <Router>
      <div className="App">
        {/* <Sidebar></Sidebar> */}
        <Routes>
          {/* any page render after /* expect admin/* goes straigth to <RoutingcallAuth/> */}
          <Route path="/*" element={<RoutingcallAuth />} />
          {/* <Route path="/" element={<Sidebar />} /> */}
          {/* any page render after admin/* goes straigth to <AdminDashboard /> */}
          <Route path="/Admin/*" element={<RoutingCallAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
