import React from 'react'
import App from './App'
import {TestAns} from './components/TestAns'
import {TestStress} from './components/TestStress'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Testdepre}  from './components/Testdepre'
import {Login} from './components/Login'
import { Register } from './components/Register'


const Main = () => {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path = "/Test01/" component={TestAns}/>
      <Route exact path = "/Test02/" component={TestStress}/>
      <Route exact path = "/Test03/" component={Testdepre}/>
      <Route exact path = "/Login/" component={Login}/>
      <Route exact path = "/Register/" component={Register}/>
      <Route exact path = "/" component={App} />
      
    </Switch>
     
    </BrowserRouter>
  )
}

export default Main
