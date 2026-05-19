import Sidebar from "../components/Sidebar";

import { useEffect,useState } from "react";

import api from "../services/api";

import toast from "react-hot-toast";

export default function MyRequests() {

  const [requests,setRequests] = useState([]);

  const fetchRequests = async () => {

    try {

      const res = await api.get(
        "/incidents"
      );

      setRequests(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(()=>{

    fetchRequests();

  },[]);

  const deleteRequest = async (id) => {

    try {

      await api.delete(
        `/incidents/${id}`
      );

      toast.success(
        "Request Deleted"
      );

      fetchRequests();

    } catch (error) {

      toast.error(
        "Delete Failed"
      );

    }

  };

  const getStatusColor = (status) => {

    if(status === "Accepted"){
      return "bg-green-500";
    }

    if(status === "Processing"){
      return "bg-yellow-500";
    }

    return "bg-red-500";
  };

  return (

    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 w-full p-10">

        <h1 className="text-5xl font-bold mb-10">
          My Emergency Requests
        </h1>

        <div className="space-y-5">

          {requests.map((item)=>(

            <div
              key={item._id}
              className="glass p-6 rounded-2xl flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.location}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`${getStatusColor(item.status)} px-4 py-2 rounded-xl`}
                >
                  {item.status}
                </span>

                <button
                  onClick={()=>
                    deleteRequest(item._id)
                  }
                  className="bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}