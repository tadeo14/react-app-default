import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import { Admin } from './componentes/Admin'

export const Approuter = () => {
  return (
      <BrowserRouter>
          <Router>
        <Route path="/admin" exact component={Admin} />
          </Router>
      </BrowserRouter>
  )
}
