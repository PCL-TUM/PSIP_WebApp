import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DataTable from 'react-data-table-component';
import { CiSettings, CiViewTable } from "react-icons/ci";
import { FaPencil, FaRegTrashCan, FaPlus } from "react-icons/fa6";

function MeangeDepartment() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.post('http://localhost:5000/getData/getDataDepartment',
          { searchDepartment: '' },
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          });
        setData(response.data);
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
            <button className="btn btn-sm btn-outline btn-warning font-normal" onClick={(e) => handleButtonClick(e, row.id)}>
              <span className='text-md'><FaPencil /></span> แก้ไข
            </button>
            <button className="btn btn-sm btn-outline btn-error font-normal" onClick={(e) => handleButtonClick(e, row.id)}>
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
       
        <div>
          <div className='border rounded-2xl p-4'>
            <div>
              <div className='flex flex-row items-center text-left gap-1 p-2'>
                <span className="text-slate-700 text-2xl font-semibold"><CiViewTable /></span>
                <span className="text-slate-700 text-sm font-semibold">ตารางแสดงผลรายการ{mainTitle}</span>
                <span className="text-slate-600 text-sm">( DataTable Department )</span>
                <div className='ms-auto'>
                  <button className='btn btn-outline btn-success'>
                    <span className='text-md'><FaPlus /></span> 
                    เพิ่ม{mainTitle}
                  </button>
                </div>
              </div>
              <div className="rounded-2xl p-4">
                <DataTable
                  columns={columns}
                  data={data}
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