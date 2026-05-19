import Sidebar from "../components/Sidebar";

import { useState } from "react";

import api from "../services/api";

import toast from "react-hot-toast";

export default function ReportEmergency() {

  const [formData,setFormData] = useState({
    title:"",
    category:"",
    description:"",
    location:"",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/incidents",
        formData
      );

      toast.success(
        "Emergency Report Submitted"
      );

      setFormData({
        title:"",
        category:"",
        description:"",
        location:"",
      });

    } catch (error) {

      toast.error(
        "Submission Failed"
      );

    }

  };

  return (

    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 p-10 w-full">

        <h1 className="text-5xl font-bold">
          Report Emergency
        </h1>

        <form
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl mt-10 space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Emergency Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900"
          >
            <option value="">
              Select Category
            </option>

            <option>
              Fire
            </option>

            <option>
              Flood
            </option>

            <option>
              Medical
            </option>

            <option>
              Accident
            </option>

          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <textarea
            name="description"
            placeholder="Describe emergency"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-900 h-40"
          />

          <button
            className="bg-red-500 px-8 py-4 rounded-xl hover:bg-red-600"
          >
            Submit Emergency
          </button>

        </form>

      </div>

    </div>

  );
}