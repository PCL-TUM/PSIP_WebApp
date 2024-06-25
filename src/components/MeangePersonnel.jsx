import React, { useState, useRef } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';


function MeangePersonnel() {
  const refDepartName = useRef(null)
  const [valueDepartName, setValueDepartName] = useState('')

  const refDepartNameEN = useRef(null)
  const [valueDepartNameEN, setValueDepartNameEN] = useState('')

  const onClickFetchData = async () => {
    await axios.post('http://localhost:5000/getData/getDataDepartment',
      { searchDepartment: 'คอม' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(response => {
        const departmentData = response.data
        if (departmentData.status === "Succeed") {
          document.getElementById('edit_Department').showModal()
          // useState
          setValueDepartName(departmentData.data[0].DEPART_NAME)
          setValueDepartNameEN(departmentData.data[0].KEY_WORD_EN)
          // useRef
          refDepartName.current.value = valueDepartName
          refDepartNameEN.current.value = valueDepartNameEN
        } else {
          console.log("Fail");
        }
      }
      );
  }

  const onClickLog = () => {
    console.log(valueDepartName);
    console.log(valueDepartNameEN);
  }

  return (
    <>
      <div className="flex gap-2 justify-center flex-col text-black">
        <div className='' >MeangePersonnel</div>
       

        <div className="btn btn-secondary" onClick={onClickLog}>Click 2!</div>
        
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={onClickFetchData}>open modal</button>
        <dialog id="edit_Department" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">

              <form method="dialog" className='flex flex-col justify-items-center w-full gap-3'>
                <div className='flex flex-col px-10 gap-2'>
                  <input
                    type="text"
                    ref={refDepartName}
                    value={valueDepartName}
                    onChange={e => setValueDepartName(e.target.value)}
                    className='input input-bordered w-full'
                    />
                  <input
                    type="text"
                    ref={refDepartNameEN}
                    value={valueDepartNameEN}
                    onChange={e => setValueDepartNameEN(e.target.value)}
                    className='input input-bordered w-full'
                    />
                  </div>
                <button className="btn">Close</button>
              </form>

            </div>
          </div>
        </dialog>

      </div>
    </>
  )
}

export default MeangePersonnel