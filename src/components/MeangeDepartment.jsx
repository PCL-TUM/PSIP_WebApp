import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import DataTable from 'react-data-table-component';

import { CiSettings, CiSearch, CiViewTable } from "react-icons/ci";
import { FaPencil, FaRegTrashCan, FaPlus, FaMagnifyingGlass, FaX, FaFloppyDisk  } from "react-icons/fa6";

// get currentDate -----------------------------------------------------------------------------------------------------------------------------------
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const time = (today.getHours() < 10 ? '0' : '') + today.getHours()
       + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
       + ":" + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  return `${year}-${month}-${date} ${time}`;
}

function MeangeDepartment() {
  const [dataDepartment, setDepartmentData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post('http://localhost:5000/getData/getDataDepartment',
        { searchDepartment: '' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
        .then(response => {
          const departmentData = response.data
            if (departmentData.status === "Succeed") {
              setDepartmentData(departmentData.data);
            } else {
              setDepartmentData([]);
            }
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  const onClickSearchData = async () => {
    try {
      await axios.post('http://localhost:5000/getData/getDataDepartment',
      { searchDepartment: searchData }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .then(response => {
        const departmentData = response.data
          if (departmentData.status === "Succeed") {
            setDepartmentData(departmentData.data);
          } else {
            setDepartmentData([]);
          }
        }
      );
    } catch (err) {
      console.log(err.message)
    }
  }

  const onClickClearSearchData = async () => {
    setSearchData('');
    try {
      await axios.post('http://localhost:5000/getData/getDataDepartment',
      { searchDepartment: '' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .then(response => {
        const departmentData = response.data
          if (departmentData.status === "Succeed") {
            setDepartmentData(departmentData.data);
          } else {
            setDepartmentData([]);
          }
        }
      );
    } catch (err) {
      console.log(err.message)
    }
  }

  // edit button -------------------------------------------------------------------------------------------------------------------------------
  const refDepartName = useRef(null);
  const [valueDepartName, setValueDepartName] = useState('');
  const [departID, setDepartID] = useState('');
  // const refDepartNameEN = useRef(null)
  // const [valueDepartNameEN, setValueDepartNameEN] = useState('')

  const onClickFetchDataDepartment = async (e, ID) => {
    await axios.post(`http://localhost:5000/getData/getDataDepartment/${ID}`,
      { searchDepartment: '' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .then(response => {
        const departmentData = response.data
        if (departmentData.status === "Succeed") {
          setDepartID(ID)                                         // set departID
          document.getElementById('edit_Department').showModal()  // open modal
        
          setValueDepartName(departmentData.data[0].DEPART_NAME)  // useState
          refDepartName.current.value = valueDepartName           // useRef

        } else {
          console.log("Fail");
        }
      }
    );
  }

  const onClickModalCancel = () => {
    document.getElementById('edit_Department').showModal()
  }

  const onClickSaveEditData = () => {
    setCurrentDate(getDate())
    let depart_name = valueDepartName; 
    let create_by = "1";
    let create_date = currentDate;
    let modify_date = currentDate;
    let id = departID;
      
    axios.post(`http://localhost:5000/updateData/updateData`, { 
      updateType: 2,
      depart_name: depart_name,
      create_by: create_by,
      create_date: create_date,
      modify_date: modify_date,
      id: id 
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .then(response => {
        const departmentData = response.data
        if (departmentData.status === "Succeed") {
          Swal.fire({
            title: "Succeed",
            text: "บันทึกข้อมูลสำเร็จ",
            icon: "success"
          }).then((result) => {
            onClickClearSearchData();
          });
        } else {
          Swal.fire({
            title: "Fail",
            text: "บันทึกข้อมูลไม่สำเร็จ",
            icon: "error"
          }).then((result) => {
            onClickClearSearchData();
          });
        }
      }
    );
  }
  // dataTable -----------------------------------------------------------------------------------------------------------------------------------
  const columns = [
    {
      name: 'รายชื่อภาควิชา',
      selector: row => row.DEPART_NAME,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <>
          <div className='flex items-center gap-2'>
            <button className="btn btn-sm btn-outline btn-warning font-normal shadow" onClick={(e) => onClickFetchDataDepartment(e, row.ID)}>
              <span className='text-md'><FaPencil /></span> แก้ไข
            </button>
            <button className="btn btn-sm btn-outline btn-error font-normal shadow" onClick={(e) => onClickFetchDataDepartment(e, row.ID)}>
              <span className='text-md'><FaRegTrashCan /></span> ลบ
            </button>
          </div>
        </>
      ),
    }
  ];

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: 'ALL',
  }

  const mainTitle = 'ภาควิชา';
  const subTitle = 'Meange Department';

  return (
    <>
      <div>
        <div className='flex flex-row items-center text-left gap-1 border-b mb-5 pb-5 text-nowrap overflow-hidden'>
          <span className="text-3xl font-medium"><CiSettings /></span>
          <span className="text-lg font-medium">จัดการข้อมูล{mainTitle}</span>
          <span className="text-sm">( {subTitle} )</span>
        </div>

        <div className='flex flex-col gap-5 lg:flex-row'>
          <div className='basis-1/4 bg-white border rounded-2xl shadow-lg px-10 py-5 mb-5 text-nowrap overflow-hidden'>
            <div className='flex flex-col justify-items-center gap-y-2'>
              <div className="pb-2">
                <span className="text-xl font-bold">จำนวน{mainTitle}ทั้งหมด</span>
              </div>
                <div className=''>
                  <span className="text-[5rem] leading-none font-extrabold">10</span>
                </div>
                <div className=''>
                  <span className="text-lg font-bold">รายการ</span>
                </div>
            </div>
          </div>

          <div className='basis-3/4 bg-white border rounded-2xl shadow-lg p-4 mb-5 text-nowrap overflow-hidden'>
            <div className='flex flex-col'>
              <div className="flex flex-row items-center text-left gap-1 p-2">
                <span className="text-2xl font-medium"><CiSearch /></span>
                <span className="text-lg font-medium">ค้นหาข้อมูล</span>
                <span className="text-sm">( Search Data )</span>
              </div>
              {/* <form id="searchData"> */}
                  <div className='px-5 pb-5'>
                    <input 
                      type="text"
                      name="searchData"
                      value={searchData}
                      onChange={e => setSearchData(e.target.value)}
                      className="text-black input input-bordered rounded-b-none border-t-0 border-l-0 border-r-0 w-full focus:outline-none" 
                      placeholder={mainTitle + "ที่ต้องการค้นหา"} />
                  </div>
                  <div className='flex flex-row gap-2 ms-auto pe-2 pb-2'>
                    <button className='btn shadow' onClick={onClickClearSearchData}>
                      <span className='text-md'><FaX /></span> 
                      ยกเลิก
                    </button>
                    <button className='btn btn-success shadow' onClick={onClickSearchData}>
                      <span className='text-md'><FaMagnifyingGlass /></span> 
                      ค้นหา
                    </button>
                  </div>
                {/* </form> */}

            </div>
          </div>
        </div>

        <div>
          <div className='bg-white border rounded-2xl shadow-lg p-4 text-nowrap overflow-hidden'>
            <div>
              <div className='flex flex-row items-center text-left gap-1 p-2'>
                <span className="text-2xl font-medium"><CiViewTable /></span>
                <span className="text-lg font-medium">ตารางแสดงผลรายการ{mainTitle}</span>
                <span className="text-sm">( DataTable Department )</span>
                <div className='ms-auto'>
                  <button className='btn btn-outline btn-info shadow'>
                    <span className='text-md'><FaPlus /></span> 
                    เพิ่ม{mainTitle}
                  </button>
                </div>
              </div>
              <div className="rounded-2xl p-4">
                <DataTable
                  columns={columns}
                  data={dataDepartment}
                  noDataComponent="ไม่พบข้อมูล"
                  pagination
                  paginationComponentOptions={paginationComponentOptions}
                />
              </div>
            </div>
          </div>
        </div>

        <dialog id="edit_Department" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl mt-4">แก้ไข{mainTitle}</h3>
            <p className="py-2">กรุณากรอกข้อมูลให้ครบ</p>
            <div className="mt-5">

              <form method="dialog" className='flex flex-col justify-items-center w-full'>
                <div className='flex flex-col px-10 gap-2'>
                  <input
                    type="text"
                    ref={refDepartName}
                    value={valueDepartName}
                    onChange={e => setValueDepartName(e.target.value)}
                    className='input input-bordered w-full'
                    />
                  </div>
                  <div className='flex flex-row gap-2 ms-auto mt-5'>
                    <button className='btn shadow' onClick={onClickModalCancel}>
                      <span className='text-md'><FaX /></span> 
                      ยกเลิก
                    </button>
                    <button className='btn btn-success shadow' onClick={onClickSaveEditData}>
                      <span className='text-md'><FaFloppyDisk /></span> 
                      บันทึก
                    </button>
                  </div>
              </form>

            </div>
          </div>
        </dialog>
        
      </div>
    </>
  )
}

export default MeangeDepartment