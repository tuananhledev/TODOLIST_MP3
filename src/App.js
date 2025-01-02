import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.warn('Công việc đã tồn tại!!!')
    } else {
      setTodos(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }])
      setWork('')
      toast.success('Thêm thành công')
    }
  }

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
    toast.success('Xóa thành công')
  }

  return (
    <>
      <div className='flex flex-col h-screen gap-8 border border-red-500 items-center justify-center'>
        <div className='flex gap-8'>
          <input
            type="text"
            className='border border-blue-600 px-4 py-2 w-[400px]'
            value={work}
            onChange={e => setWork(e.target.value)}
          />
          <button
            type='button'
            className='bg-blue-600 text-white rounded-md px-4 py-2'
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className='font-bold text-xl'>Content:</h3>
          <ul>
            {todos?.map(item => {
              return (
                <div className='flex gap-10 p-2'>
                  <li key={item.id}>{item.job}</li>
                  <span className='cursor-pointer' onClick={() => handleDelete(item.id)}>X</span>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App