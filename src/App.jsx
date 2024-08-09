
import { useState } from 'react'
import './App.css'



function App() {
  const [inputs , setInputs] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: ""
  }) 
  const [show , setShow] = useState(false)
  const [submitMessage , setSubmitMessage] = useState(<div className='w-[800px] absolute translate-x-[-50%] translate-y-[-50%] text-black text-center p-5 font-semibold text-3xl h-20 bg-white top-1/2 left-1/2'></div>)

  function handleSubmit() {

    

      if((inputs.age <=18 || inputs.age >= 100) ) {
        if(inputs.phone <= 999999999){
          setSubmitMessage(<div className='w-[800px] absolute translate-x-[-50%] translate-y-[-50%] text-red-500 text-center p-5 font-semibold text-3xl h-20 bg-white top-1/2 left-1/2'>phone and age have been error</div>)
        }
        else {
          setSubmitMessage(<div className='w-[800px] absolute translate-x-[-50%] translate-y-[-50%] text-red-500 text-center p-5 font-semibold text-3xl h-20 bg-white top-1/2 left-1/2'>age have has error</div>)
        }
      }
      else
      if(inputs.phone <= 999999999){
        setSubmitMessage(<div className='w-[800px] absolute translate-x-[-50%] translate-y-[-50%] text-red-500 text-center p-5 font-semibold text-3xl h-20 bg-white top-1/2 left-1/2'>phone has been error</div>)
      }
      else {
        setSubmitMessage(<div className='w-[800px] absolute translate-x-[-50%] translate-y-[-50%] text-green-500 text-center p-5 font-semibold text-3xl h-20 bg-white top-1/2 left-1/2'>the form has submitted successfully</div>)
      }
    setShow(true)
    
  }
    
  function hide() {
    setShow(false)
  }
  const btnDisabled = inputs.name == "" || inputs.age == "" || inputs.phone == ""
  let btnColor = ""
  if (btnDisabled) {
    btnColor = "disabled"
  }else{
    btnColor=""
  }
  return (
    <form onSubmit={e=>e.preventDefault()} className='flex flex-col justify-between w-[800px] bg-neutral-700 p-5 h-[600px]'>
      
      <h1>Requesting a Loan</h1>
      <hr></hr>
      <label>Name:</label>
      <input className='h-12 text-center' value={inputs.name} onChange={(e)=>setInputs({...inputs,name:e.target.value})} />
      <label>Phone Number:</label>
      <input className='h-12 text-center' value={inputs.phone} type="number" onChange={(e)=>setInputs({...inputs,phone:e.target.value})} />
      <label>Age:</label>
      <input className='h-12 text-center' value={inputs.age} type="number" onChange={(e)=>setInputs({...inputs,age:e.target.value})} />
      <label>Are you an employee?</label>
      <input className='size-6 mx-auto' checked={inputs.employee} type="checkbox" onChange={(e)=>setInputs({...inputs,employee:e.target.checked})} />
      <label>salary</label>
      <select className='h-12 text-center' value={inputs.salary} onChange={(e)=>setInputs({...inputs,salary:e.target.value})}>
        <option>less than 500$</option>
        <option>between 500$ and 2000$</option>
        <option>above 2000$</option>
      </select>
      
      
      <button onClick={handleSubmit} disabled={btnDisabled} className={`w-28 mx-auto bg-cyan-700 ${btnColor}`}>submit</button>
      

      {show &&
      <div onClick={hide} className='w-screen h-screen bg-black/40 fixed top-0 left-0'>
        {submitMessage}
      </div>
      }
      
    </form>
  )
}

export default App
