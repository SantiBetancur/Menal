import React from 'react'

 export const Login = () => {
  return (
    
    <div className="login-box">
    <h1>MI PERFIL</h1>
    <form>
      
      <label for="username" className='class'>Nombre</label>
      <input type="text" placeholder="Enter Username"/>
      
      <label for="password">ID</label>
      <input type="password" placeholder="Enter Password"/>
      <input type="submit" value="Log In"/>
    
      <a href="#">¿No tienes cuenta, crea una?</a>
    </form>
  </div>
  )
}
