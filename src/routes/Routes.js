import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import DashboardMock from '../containers/DashboardMock/DashboardMock'
import Error404 from '../containers/Error404/Error404'
import Home from '../containers/Home/Home'

const Ids = [12,18]

const Router = () => {

    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {Ids.map( id => {
    return(
      <Route path={'/express/' + id} element={ <Dashboard id={id} /> }  key={id} />
      )
  })}
          {Ids.map( id => {
    return(
      <Route path={'/mock/'+ id} element={ <DashboardMock id={id} /> }  key={id} />
      )
  })}
          <Route path="*" element={ <Error404 />}  />
        </Routes>
      </BrowserRouter>
    )
}

export default Router;