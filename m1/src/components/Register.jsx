import React from 'react'

export const Register = () => {
  return (
        <div>
                <section className="form-main">
                    <div className="form-content">
                        <div className="box">
                        <h3>Bienvenido</h3>
                        <form action="">
                            <div className="inputbox">
                                <input type="text" placeholder='Email' className="input-control"/>
                            </div>
                            <div className="inputbox">
                                <input type="password" placeholder='Password' className="input-control"/>
                                <div className="input-link">
                                    <a href="#">Has olvidado tu contraseña</a>
                                </div>
                            </div>
                            <button type='submit' className='btn'>Iniciar Sesión</button>
                            </form>
                            <p>¿No tienes una cuenta? <a href="Register.jsx">Crear cuenta</a></p> 
                     /  </div>
                    </div>
                </section>
        </div>
    
     )
}
