import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';

function MeangeDepartment() {

  const [data, setData] = useState([])

  useEffect(() => {
    const dataDepartment = {
      searchDepartment: ''
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const fetchData = async () => {
      try {
        const { data: response } = await axios.post('http://localhost:5000/getData/getDataDepartment', dataDepartment, config);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  const columns = [
    {
      name: 'ลำดับ',
      selector: row => '1',
      sortable: true,
    },
    {
      name: 'ภาควิชา',
      selector: row => row.DEPART_NAME,
      sortable: true,
    },
    
  ];

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: 'ALL',
  }

  return (
    <>
      <div>

        <div className=' shadow-md rounded-xl mt-5 '>
          <div className='table table-zebra p-5'>
            <DataTable
              title="Test Data"
              columns={columns}
              data={data}
              pagination
              paginationComponentOptions={paginationComponentOptions}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MeangeDepartment