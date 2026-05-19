import {
  Home,
  AlertTriangle,
  Map,
  Bot,
  Users,
  BarChart3,
  ClipboardList,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {

  const menu = [
    {
      name:"Dashboard",
      icon:<Home size={20}/>,
      path:"/dashboard",
    },
    {
      name:"Report",
      icon:<AlertTriangle size={20}/>,
      path:"/report",
    },
    {
        name:"My Requests",
        icon:<ClipboardList size={20}/>,
        path:"/requests",
    },
    {
      name:"Crisis Map",
      icon:<Map size={20}/>,
      path:"/map",
    },
    {
      name:"AI Assistant",
      icon:<Bot size={20}/>,
      path:"/ai",
    },
    {
      name:"Volunteers",
      icon:<Users size={20}/>,
      path:"/volunteers",
    },
    {
      name:"Analytics",
      icon:<BarChart3 size={20}/>,
      path:"/analytics",
    },
  ];

  return (
    <div className="w-72 h-screen glass fixed left-0 top-0 p-5">

      <h1 className="text-3xl font-bold gradient-text mb-10">
        AegisAI
      </h1>

      <div className="flex flex-col gap-3">

        {menu.map((item,index)=>(

          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-red-500 transition"
          >
            {item.icon}
            {item.name}
          </Link>

        ))}

      </div>

    </div>
  );
}