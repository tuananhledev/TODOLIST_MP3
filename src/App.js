import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Home, Login, Public } from './containers/public'
import { Route, Routes } from 'react-router-dom'
import path from './ultis/path'

const App = () => {
  const { test } = useSelector(state => state.app)
  console.log(test);

  return (
    <>
      <div className=''>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
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