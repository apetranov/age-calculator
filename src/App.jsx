import { useState } from 'react'
import { GiCalculator } from "react-icons/gi";
import './App.css'

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [monthsOld, setMonthsOld] = useState("");
  const [daysOld, setDaysOld] = useState("");

  const handleYearsOld = () => {
    const today = new Date();
    let years = today.getFullYear() - parseInt(birthYear);
    let months = today.getMonth() + 1 - parseInt(birthMonth); // +1 because getMonth() is 0-11
    let days = today.getDate() - parseInt(birthDay);

    // Adjust days if negative
    if (days < 0) {
      months--; // borrow a month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last day of previous month
      days += prevMonth.getDate();
    }

    // Adjust months if negative
    if (months < 0) {
      years--; // borrow a year
      months += 12;
    }

    setYearsOld(years);
    setMonthsOld(months);
    setDaysOld(days);
  }


  return (
    <div className='space-y-3 flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row space-x-5'>
        <div className='flex flex-col'>
          <label className='tracking-widest text-gray-400' htmlFor="">DAY</label>
          <input onChange={(e) => setBirthDay(e.target.value)} className='outline-1 outline-gray-200 shadow-lg' value={birthDay} placeholder='Birth day' type="text" />
        </div>
        <div className='flex flex-col'>
          <label className='tracking-widest text-gray-400' htmlFor="">MONTH</label>
          <input onChange={(e) => setBirthMonth(e.target.value)} className='outline-1 outline-gray-200 shadow-lg' value={birthMonth} placeholder='Birth month' type="text" />
        </div>
        <div className='flex flex-col'>
          <label className='tracking-widest text-gray-400' htmlFor="">YEAR</label>
          <input onChange={(e) => setBirthYear(e.target.value)} className='outline-1 outline-gray-200 shadow-lg' value={birthYear} placeholder='Birth year' type="text" />
        </div>
      </div>
      <div onClick={handleYearsOld} className="bg-purple-700 rounded-full p-3 inline-flex items-center justify-center">
        <GiCalculator className="text-white" size={24} />
      </div>
      <div className='flex flex-col space-y-3'>
        <h1 className='font-black text-5xl italic'><span className='text-purple-700'>{yearsOld}</span> years</h1>
        <h1 className='font-black text-5xl italic'><span className='text-purple-700'>{monthsOld}</span> months</h1>
        <h1 className='font-black text-5xl italic'><span className='text-purple-700'>{daysOld}</span> days</h1>
      </div>
    </div>
  )
}

export default App
