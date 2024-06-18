import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';

import { CiSettings } from "react-icons/ci";
import { FaPencil, FaRegTrashCan, FaPlus, FaTable, FaMagnifyingGlass, FaX } from "react-icons/fa6";

function MeangeDepartment() {

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
            <button className="btn btn-sm btn-outline btn-warning font-normal shadow" onClick={(e) => handleButtonClick(e, row.id)}>
              <span className='text-md'><FaPencil /></span> แก้ไข
            </button>
            <button className="btn btn-sm btn-outline btn-error font-normal shadow" onClick={(e) => handleButtonClick(e, row.id)}>
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
        <div className='flex flex-row items-center text-left gap-1 border-b mb-5 pb-5'>
          <span className="text-slate-700 text-3xl font-semibold"><CiSettings /></span>
          <span className="text-slate-700 text-lg font-semibold">จัดการข้อมูล{mainTitle}</span>
          <span className="text-slate-600 text-sm">( {subTitle} )</span>
        </div>

        <div className='bg-white border rounded-2xl shadow-lg p-4 mb-5'>
          <div className='flex flex-col'>
            <div className="flex flex-row items-center text-left gap-1 p-2">
              <span className="text-slate-700 text-2xl font-semibold"><FaMagnifyingGlass /></span>
              <span className="text-slate-700 text-lg font-semibold">ค้นหาข้อมูล</span>
              <span className="text-slate-600 text-sm">( Search Data )</span>
            </div>
            <div className='px-5 pb-5'>
              <input 
                type="text" 
                className="text-black input input-bordered rounded-b-none border-t-0 border-l-0 border-r-0 w-full focus:outline-none" 
                placeholder={mainTitle+"ที่ต้องการค้นหา"} />
            </div>
            <div className='flex flex-row gap-2 ms-auto pe-2 pb-2'>
              <button className='btn shadow'>
                <span className='text-md'><FaX /></span> 
                ยกเลิก
              </button>
              <button className='btn btn-success shadow'>
                <span className='text-md'><FaMagnifyingGlass /></span> 
                ค้นหา
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-white border rounded-2xl shadow-lg p-4'>
            <div>
              <div className='flex flex-row items-center text-left gap-1 p-2'>
                <span className="text-slate-700 text-2xl font-semibold"><FaTable /></span>
                <span className="text-slate-700 text-lg font-semibold">ตารางแสดงผลรายการ{mainTitle}</span>
                <span className="text-slate-600 text-sm">( DataTable Department )</span>
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
                  pagination
                  paginationComponentOptions={paginationComponentOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeangeDepartment