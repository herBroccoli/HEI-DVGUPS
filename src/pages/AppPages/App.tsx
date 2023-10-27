import { useState } from 'react'
import mainImg from "../../assets/il1.png"

function App() {
  

  return (
    <>
      <div className='flex'>
        <img src={mainImg} alt="main" />
        <div className='w-[450px] ml-[30px] text-[#707070]'>
          <p className='text-[18px]'>
          <span className='font-bold text-[24px]'>Электронная информационно-образовательная среда</span> - дистанционное обучение по всем направлениям
          </p>
        </div>
      </div>
    </>
  )
}

export default App
