// import { useState } from 'react'
import { useState } from "react";
import './App.css'

// import react-router-dom
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

// import image sidebar
import imgControl from './assets/image/icons/control.png'
import imgLogo from './assets/image/icons/logoRMUTT.png'

import imgChart_fill from './assets/image/icons/Chart_fill.png'
import imgChat from './assets/image/icons/Chat.png'
import imgUser from './assets/image/icons/User.png'
import imgCalendar from './assets/image/icons/Calendar.png'
import imgSearch from './assets/image/icons/Search.png'
import imgChart from './assets/image/icons/Chart.png'
import imgFolder from './assets/image/icons/Folder.png'
import imgSetting from './assets/image/icons/Setting.png'

// import components
import Dashboard from './components/Dashboard'
import Datatable from './components/Datatable'
import MeangeDepartment from './components/MeangeDepartment';
import MeangePersonnel from './components/MeangePersonnel';
import MeangeUserSystem from './components/MeangeUserSystem';

function App() {

  const [open, setOpen] = useState(true);

  const Departments = [
    {id:1 , link:"/", name: "วิศวกรรมโยธา"},
    {id:2 , link:"/", name: "วิศวกรรมวัสดุและโลหการ"},
    {id:3 , link:"/", name: "วิศวกรรมไฟฟ้า"},
    {id:4 , link:"/", name: "วิศวกรรมเครื่องกล"},
    {id:5 , link:"/", name: "วิศวกรรมสิ่งทอ"},
    {id:6 , link:"/", name: "วิศวกรรมอุตสาหการ"},
    {id:7 , link:"/", name: "วิศวกรรมอิเล็กทรอนิกส์"},
    {id:8 , link:"/", name: "วิศวกรรมคอมพิวเตอร์"},
    {id:9 , link:"/", name: "วิศวกรรมเคมี"},
    {id:10 , link:"/", name: "วิศวกรรมเกษตร"},
  ];

  const Meangement = [
    {id:1 , link:"/meangePersonnel", name: "บุคลากร"},
    {id:2 , link:"/meangeDepartment", name: "ภาควิชา"},
    {id:3 , link:"/meangeUserSystem", name: "ผู้ใช้งานในระบบ"},
  ];

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <div className={`${ open ? "w-72" : "w-20"} bg-gradient-to-r from-blue-950 to-indigo-950 h-auto p-5 pt-2.5 relative duration-300`}>
            {/* <img
              src={imgControl}
              className={`${ !open && "rotate-180" } absolute cursor-pointer duration-500 -right-3 top-[20px] w-7 border-dark-purple border-1 rounded-full shadow-lg`}
              onClick={() => setOpen(!open)}
            /> */}
            <NavLink to="/">
              <div className="flex gap-x-2.5 items-center ps-2">
                <img
                  src={imgLogo}
                  className={`${ open && "" } cursor-pointer duration-500`}
                  // rotate-[360deg]
                />
                <h1 className={`text-white origin-left text-nowrap duration-200
                ${ !open && "scale-0" }`}>
                  <div className="flex flex-col pt-2">
                      <div className="text-[11.6px]">
                        Parcel Sortation via Image Processing
                      </div>
                      <div className="text-[13px]">
                        เครื่องแยกพัสดุด้วยการประมวลผลภาพ
                      </div>
                  </div>
                  {/* Parcel Report */}
                </h1>
              </div>
            </NavLink>
            <ul className="pt-3">
              <li className="flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 mt-2 ">
                <NavLink to="/" className="flex hover:bg-neutral-900/40 w-full rounded-md p-2 active">
                  <img src={imgChart_fill} />
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-3 pt-0.5`}>กระดานข้อมูล</span>
                </NavLink>
              </li>
              <li className="flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 mt-2 ">
                <NavLink to="/datatable" className="flex hover:bg-neutral-900/40 w-full rounded-md p-2">
                  <img src={imgUser} />
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-3 pt-0.5`}>พัสดุที่รับแล้ว</span>
                </NavLink>
              </li>
              <li className="flex rounded-md text-gray-300 text-sm text-nowrap items-center gap-x-4 mt-4 ">
                <div className="flex w-full rounded-md p-2 ">
                  <img src={imgChart} />
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-3 pt-0.5`}>พัสดุรายภาควิชา</span>
                </div>
              </li>

              {Departments.map((Departments, index) => (
                <li
                  key={index}
                  className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 
                  ${Departments.gap ? "mt-4" : "mt-2"} ${ index === 0 && "bg-light-white" } `}
                >
                  <NavLink 
                    to={Departments.link} 
                    className="flex hover:bg-neutral-900/40 w-full rounded-md p-2"
                  >
                    {/* <img src={Departments.src} /> */}
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-9 pt-0.5`}>
                      - {Departments.name}
                    </span>
                  </NavLink>
                </li>
              ))}
              
              <li className="flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 mt-4 ">
                <a aria-current="page" className="flex w-full rounded-md p-2" href="/">
                  <img src={imgSetting} />
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-3 pt-0.5`}>จัดการข้อมูล </span>
                </a>
              </li>

              {Meangement.map((Meangement, index) => (
                <li
                  key={index}
                  className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 
                  ${Meangement.gap ? "mt-4" : "mt-2"} ${ index === 0 && "bg-light-white" } `}
                >
                  <NavLink 
                    to={Meangement.link} 
                    className="flex hover:bg-neutral-900/40 w-full rounded-md p-2"
                  >
                    {/* <img src={Meangement.src} /> */}
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-9 pt-0.5`}>
                      - {Meangement.name}
                    </span>
                  </NavLink>
                </li>
              ))}

            </ul>
            {/* <ul className="pt-6">
            
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm text-nowrap items-center gap-x-4 
                  ${Menu.gap ? "mt-4" : "mt-2"} ${ index === 0 && "bg-light-white" } `}
                >
                  <NavLink 
                    to={Menu.link} 
                    className="flex hover:bg-neutral-900/40 w-full rounded-md p-2"
                  >
                    <img src={Menu.src} />
                    <span className={`${ !open && "hidden" } origin-left duration-200 ps-3 pt-0.5`}>
                      {Menu.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="h-screen flex-1 overflow-y-scroll">
            <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-md">

            </div>
            <div className="p-7 pt-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />  
                <Route path="/datatable" element={<Datatable />} />  
                <Route path="/meangeDepartment" element={<MeangeDepartment />} />
                <Route path="/meangePersonnel" element={<MeangePersonnel />} />  
                <Route path="/meangeUserSystem" element={<MeangeUserSystem />} />  
              </Routes>
            </div>
            
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
