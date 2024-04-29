import { useState } from "react";

import imgControl from '../assets/image/icons/control.png'
import imgLogo from '../assets/image/icons/logo.png'

import imgChart_fill from '../assets/image/icons/Chart_fill.png'
import imgChat from '../assets/image/icons/Chat.png'
import imgUser from '../assets/image/icons/User.png'
import imgCalendar from '../assets/image/icons/Calendar.png'
import imgSearch from '../assets/image/icons/Search.png'
import imgChart from '../assets/image/icons/Chart.png'
import imgFolder from '../assets/image/icons/Folder.png'
import imgSetting from '../assets/image/icons/Setting.png'

const Sidebar = () => {

  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: imgChart_fill },
    { title: "Inbox", src: imgChat },
    { title: "Accounts", src: imgUser, gap: true },
    { title: "Schedule ", src: imgCalendar },
    { title: "Search", src: imgSearch },
    { title: "Analytics", src: imgChart },
    { title: "Files ", src: imgFolder, gap: true },
    { title: "Setting", src: imgSetting },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-950 h-screen p-5 pt-6 relative duration-300`}
      >
        <img
          src={imgControl}
          className={`absolute cursor-pointer -right-3 top-[30px] w-7 border-dark-purple
           border-1 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={imgLogo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar