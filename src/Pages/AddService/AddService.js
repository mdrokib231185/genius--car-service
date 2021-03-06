import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://boiling-wildwood-15479.herokuapp.com/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1>AddService</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="price"
          type="number"
          {...register("age")}
        />
        <input
          className="mb-3"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddService;
