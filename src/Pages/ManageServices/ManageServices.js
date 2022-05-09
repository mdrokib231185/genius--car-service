import React from "react";
import useServices from "../Hooks/Hooks";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handelDelete = (id) => {
    const proceed = window.confirm("Are You Sure ");
    if (proceed) {
      const url = `https://boiling-wildwood-15479.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Manage Your Services</h1>

      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handelDelete(service._id)}>Delete</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
