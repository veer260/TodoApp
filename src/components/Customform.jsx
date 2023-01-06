import React from 'react'

const Customform = () => {
  return (
    <div className='flex justify-center pt-8'>
      <form className='flex flex-col ' action="">
        <input className='px-8 py-4 w-80 rounded-md' placeholder='' type="text" id='task'/>
        <label className='text-xl px-4 uppercase -translate-y-11' htmlFor="task">Enter the task</label>
    </form>
    </div>
    
    
  )
}

export default Customform