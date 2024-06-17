import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

import imgLogoRMUTT from '../assets/image/icons/logoRMUTT.png'

// import icon
import { CiGrid42, CiCircleCheck, CiViewList, CiSettings, CiUser, CiLogout } from "react-icons/ci";
// arrow
import { FaAngleDown, FaAngleUp, FaAngleLeft } from "react-icons/fa6";


function Sidebar() {

  const [sidebarActive, setSidebarActive] = useState();
  const sidebarClick = event => {
    setSidebarActive(current => !current);
    setOpenSubMenu(current => true);
    setOpenSubMenuMeange(current => true);
  };

  const [openSubMenu, setOpenSubMenu] = useState();
  const subMenuClick = event => {
    setOpenSubMenu(current => !current);
  };

  const [openSubMenuMeange, setOpenSubMenuMeange] = useState(true);
  const subMenuMeangeClick = event => {
    setOpenSubMenuMeange(current => !current);
  };

  const Meangement = [
    { id: 1, link: "/meangePersonnel", name: "บุคลากร" },
    { id: 2, link: "/meangeDepartment", name: "ภาควิชา" },
    { id: 3, link: "/meangeUserSystem", name: "ผู้ใช้งานในระบบ" },
  ];

  return (
    <>
      {/* <div className="container-screen"> */}
      <div className={sidebarActive ? 'sidebar active p-2' : 'sidebar'}>
        <div className="menu-btn" onClick={sidebarClick}>
          <span className={sidebarActive ? 'rotate-180' : ''}><FaAngleLeft /></span>
        </div>
        <div className="head">
          <div className={sidebarActive ? 'pt-5 m-auto' : 'ps-2'}>
            <img src={imgLogoRMUTT} alt="" />
          </div>
          <div className={sidebarActive ? 'hidden' : 'user-details content-end text-nowrap overflow-hidden'}>
            <p className="text-[10px] text-[#3a3a3a] font-semibold">Parcel Sortation via Image Processing</p>
            <p className="text-[12px] text-[#3a3a3a] font-semibold">เครื่องแยกพัสดุด้วยการประมวลผลภาพ</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li>
                <a href="#">
                  <span className="text-2xl"><CiGrid42 /></span>
                  <span className="text">กระดานข้อมูล</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-2xl"><CiCircleCheck /></span>
                  <span className="text">พัสดุที่รับแล้ว</span>
                </a>
              </li>
              <li className={openSubMenu ? '' : 'active'}>
                <a onClick={subMenuClick}>
                  <span className="text-2xl"><CiViewList /></span>
                  <span className="text text-nowrap overflow-hidden">พัสดุรายาภาควิชา</span>
                  <span className="arrow"><FaAngleDown /></span>
                </a>
                <ul className={openSubMenu ? 'sub-menu sub-menu-close' : 'sub-menu sub-menu-open'}>

                  <p className={sidebarActive ? 'title block pt-2' : 'title hidden'}>พัสดุรายาภาควิชา</p>
                  <hr className={sidebarActive ? 'title block' : 'title hidden'}></hr>

                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Settings</p>
            <ul>
              <li className={openSubMenuMeange ? '' : 'active'}>
                <a onClick={subMenuMeangeClick}>
                  <span className="text-2xl"><CiSettings /></span>
                  <span className="text text-nowrap overflow-hidden">จัดการข้อมูล</span>
                  <span className="arrow"><FaAngleDown /></span>
                </a>
                <ul className={openSubMenuMeange ? 'sub-menu sub-menu-close' : 'sub-menu sub-menu-open'}>

                  <p className={sidebarActive ? 'title block pt-2' : 'title hidden'}>จัดการข้อมูล</p>
                  <hr className={sidebarActive ? 'title block' : 'title hidden'}></hr>

                  {Meangement.map((Meangement, index) => (
                    <li key={index}>
                      <NavLink to={Meangement.link}>
                        <span className="text">{Meangement.name}</span>
                      </NavLink>
                    </li>
                  ))}

                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul>
            <li>
              <a href="#">
                <span className="text-2xl"><CiUser /></span>
                <span className="text">คุณ Admin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-2xl"><CiLogout /></span>
                <span className="text">ออกจากระบบ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="credits">
                    <h1>
                        Fully Responsive <br />
                        Sidebar by OSC
                    </h1>
                </div> */}
      {/* </div> */}
    </>
  )
}

export default Sidebar