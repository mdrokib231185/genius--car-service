import axios from "axios";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import auth from "../../../firebase.init";
import useServiceDetails from "../../Hooks/useServiceDetails";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  const handelPlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(order);
    axios
      .post("https://boiling-wildwood-15479.herokuapp.com/order", order)
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          toast("Your Order is booking");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Please Order : {service.name}</h1>
      <form onSubmit={handelPlaceOrder}>
        <input
          className="w-100 mx-auto mb-3"
          type="text"
          value={user?.displayName}
          name="name"
          placeholder="name"
          required
          readOnly
        />{" "}
        <br />
        <input
          className="w-100 mx-auto mb-3"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
          readOnly
        />{" "}
        <br />
        <input
          className="w-100 mx-auto mb-3"
          type="text"
          value={service.name}
          name="service"
          placeholder="service name"
          required
          readOnly
        />{" "}
        <br />
        <input
          className="w-100 mx-auto mb-3"
          type="text"
          name="address"
          placeholder="address"
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          className="w-100 mx-auto mb-3"
          type="number"
          name="phone"
          placeholder="phone"
          required
        />{" "}
        <br />
        <input className="w-100 mx-auto mb-3" type="submit" value="Order Now" />
      </form>
    </div>
  );
};

export default CheckOut;
