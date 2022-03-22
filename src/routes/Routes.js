import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import Error404 from '../containers/Error404'

const Ids = [12,18]

const Router = () => {

    return(
      <BrowserRouter>
        <Routes>
          {Ids.map( id => {
    return(
      <Route path={'/' + id} element={ <Dashboard id={id} /> }  key={id} />
      )
  })}
          <Route path="*" element={ <Error404 />}  />
        </Routes>
      </BrowserRouter>
    )
}

export default Router;