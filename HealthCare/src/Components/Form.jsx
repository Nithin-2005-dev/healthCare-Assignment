import React, { useState } from "react";

const Form = () => {
  //form inputs saving in a object using useState hook to make the form statefull
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  //handling the changes in a form through the spread operator to save the before data with the current data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 //handling the changes in the file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };
 //handling the submit button and showing the alert once the form sucessfully submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    alert(`Hey ${formData.name},Form submitted successfully!`);
    //clearing the form inputs after submission
    setFormData({
        name:"",
        age:"",
        file:"",
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#23177ae2] to-[#23177ac7]">
      <form
        className="w-full max-w-md bg-[#605EA1] p-6 rounded-lg shadow-2xl border-white border-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-extrabold text-center mb-4 text-[#E6E9AF]">Healthcare Dashboard</h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-300 p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-bold text-white">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-300 p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-bold text-white">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-white"
            required
          />
          {formData.file && (
            <p className="text-sm text-gray-500 mt-1">{formData.file.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
