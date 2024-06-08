import React, { useState } from 'react'
import Axios from 'Axios'

function Dashboard() {

  const [file, setFile] = useState({}) // ใช้เพื่อส่งไปที่ API
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null) //ใช้เพื่อภาพ Preview
  const handleUploadImage = (e) => { 
  const file = e.target.files[0] // เก็บไว้ setState ลงใน file
  const reader = new FileReader(); // เรียก Class FileReader เพื่อแปลง file image ที่รับเข้ามา
        reader.onloadend = () => { // เป็น eventของFileReaderเมื่อโหลดภาพเสร็จ
            setFile(file) // ทำการ setState
            setImagePreviewUrl(reader.result) //เหมือนด้านบน
        }
        reader.readAsDataURL(file) // เป็นส่วนของการแสดงรูป ไม่ค่อยแน่ใจครับ ผู้รู้ช่วยคอมเม้นบอกด้วยนะครับ
  }

  const onClickUpload = async () => {
    const formData = new FormData() //สร้างตัวแปร มารับ Class FormData
          formData.append('file', file) 
          formData.append('parcelID', 1) 
    const uploadImg = await Axios({ //# ยิงไป API
      method: 'post',
      url: 'http://localhost:5000/upload/uploadFile',
      data: formData
    })
  }

  return (
    <>
      <h1 className="text-sm font-bold text-slate-700">
        กระดานข้อมูล 
        <span className='ps-2 font-bold'>
          ( Dashboard )
        </span>
      </h1>
        <img
          src={imagePreviewUrl ? imagePreviewUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&s"
      }
          style={{width: "300px", height: "300px"}}
          className='p-4 rounded-xl'
        /> 
        <input 
          type="file" 
          onChange={handleUploadImage}
          className='file-input file-input-md file-input-bordered w-full max-w-xs font-sans'
        />
        <button 
          onClick={onClickUpload}
          className='text-white font-sans btn bg-gradient-to-r from-blue-950 to-indigo-950 h-auto relative duration-300 ms-2 p-2.5 px-6'> 
          UPLOAD
        </button> 

        <div className='flex flex-col gap-3 pt-2 max-w-md'>
          <label className="input input-md input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-md input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <label className="input input-md input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          <label className="input input-md input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <span className="badge badge-sm badge-info">Optional</span>
          </label>
        </div>
    </>
  )
}

export default Dashboard