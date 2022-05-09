import { async } from "@firebase/util";

import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../Api/AxiousPrivvate";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [order, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://boiling-wildwood-15479.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);

        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div>
      <h1>Your Order: {order.length}</h1>
    </div>
  );
};

export default Orders;
