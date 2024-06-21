import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css'

import imgLogoRMUTT from '../assets/image/icons/logoRMUTT.png'

// import icon
import { CiGrid42, CiCircleCheck, CiViewList, CiSettings, CiUser, CiLogout, CiMenuKebab } from "react-icons/ci";
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

  const [dataDepartment, setDepartmentData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.post('http://localhost:5000/getData/getDataDepartment',
          { searchDepartment: '' },
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
        setDepartmentData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={sidebarActive ? 'sidebar active p-2 pt-1.5' : 'sidebar pt-5 pb-2'}>
        <div className="menu-btn" onClick={sidebarClick}>
          <span className={sidebarActive ? 'hidden' : 'block'}><CiMenuKebab /></span>
        </div>
        <div className="head">
          <div className={sidebarActive ? 'pt-5 m-auto' : 'ps-2 pt-1.5'}>
            <img src={imgLogoRMUTT} alt="" />
          </div>
          <div className={sidebarActive ? 'hidden' : 'user-details content-end text-nowrap overflow-hidden'}>
            <p className="text-[11px] text-[#3a3a3a] font-semibold">Parcel Sortation via Image Processing</p>
            <p className="text-[13px] text-[#3a3a3a] font-semibold">เครื่องแยกพัสดุด้วยการประมวลผลภาพ</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
          <ul>
            <li>
              <div className={sidebarActive ? 'block' : 'hidden'} onClick={sidebarClick}>
                <span className='text-2xl'><CiMenuKebab /></span>
              </div>
            </li>
          </ul>
            <p className="title">Main </p>
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

                  {dataDepartment.map((dataDepartment, index) => (
                    <li key={index}>
                      <NavLink to={`/parcelDepartment/` + dataDepartment.ID}>
                        <span className="text">{dataDepartment.DEPART_NAME}</span>
                      </NavLink>
                    </li>
                  ))}

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
    </>
  )
}

export default Sidebar