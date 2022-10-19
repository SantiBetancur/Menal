import React from 'react'
import { Buttons } from './Buttons'
export const TestAns = () => {
  return (
    <div>
        <section className='min-header-2'>
        <img src={require(`../img/logo.png`)}/>
        <p className='p'>TEST DE ANSIEDAD</p>
        <Buttons color='button-1' text='INICIO' route = '/'/>
        <Buttons color='button-1' text='SIGUIENTE TEST' route = '/Test02'/>
     </section>
         <div className="container">
        <section className='section' id="p0">
            <h3>¿Te has sentido nervioso?</h3>
                <label>
                    <input type="radio" value="1" name="p0"/> Ningun dia
                </label>
             <label>
                <input type="radio" value="2" name="p0"/> Varios dias
            </label>
            <label>
                <input type="radio" value="3" name="p0"/> Mas de la mitad de los dias
             </label>
            <label>
                 <input type="radio" value="4" name="p0"/> Casi todos los dias
            </label>
</section>
{/* los saltos de linea son la division estre cada pregunta  */}

<section className='section' id="p1">
  <h3>¿No has sido capaz de parar o controlar tus preocupaciones?</h3>
  <label>
      <input type="radio" value="1" name="p1"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p1"/> Varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p1"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p1"/> Casi todos los dias
  </label>
</section>

<section className='section' id="p2">
  <h3>¿Con qué frecuencia te has sentido nervioso o estresado?</h3>
  <label>
      <input type="radio" value="1" name="p2"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p2"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p2"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p2"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p2"/> Muy a menudo
  </label>
</section>

<section className='section' id="p3">
  <h3>¿Con qué frecuencia te has sentido seguro de tu capacidad para manejar tus problemas personales?</h3>
  <label>
      <input type="radio" value="1" name="p3"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p3"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p3"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p3"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p3"/> Muy a menudo
  </label>
</section>

<section className='section' id="p4">
  <h3>¿Con qué frecuencia has sentido que las cosas van bien?</h3>
  <label>
      <input type="radio" value="1" name="p4"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p4"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p4"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p4"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p4"/> Muy a menudo
  </label>
</section>

<section className='section' id="p5">
  <h3>¿Con qué frecuencia sientes que no puedes afrontar todas las cosas que tienes que hacer?</h3>
  <label>
      <input type="radio" value="1" name="p5"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p5"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p5"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p5"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p5"/> Muy a menudo
  </label>
</section>

<section className='section' id="p6">
  <h3>¿Con qué frecuencia puedes controlar las dificultades de tu vida?</h3>
  <label>
      <input type="radio" value="1" name="p6"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p6"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p6"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p6"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p6"/> Muy a menudo
  </label>
</section>

<section className='section' id="p7">
  <h3>¿Con qué frecuencia sientes que tienes todo bajo control?</h3>
  <label>
      <input type="radio" value="1" name="p7"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p7"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p7"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p7"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p7"/> Muy a menudo
  </label>
</section>

<section className='section' id="p8">
  <h3>¿Con qué frecuencia te enfadas porque las cosas que te ocurren están fuera de tu control?</h3>
  <label>
      <input type="radio" value="1" name="p8"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p8"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p8"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p8"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p8"/> Muy a menudo
  </label>
</section>

<section className='section' id="p9">
  <h3>¿Con qué frecuencia sientes que las dificultades se te acumulan tanto que no puedes superarlas?</h3>
  <label>
      <input type="radio" value="1" name="p9"/> Nunca
  </label>
  <label>
      <input type="radio" value="2" name="p9"/> Casi nunca
  </label>
  <label>
      <input type="radio" value="3" name="p9"/> De vez en cuando
  </label>
  <label>
      <input type="radio" value="4" name="p9"/> A menudo
  </label>
  <label>
      <input type="radio" value="5" name="p9"/> Muy a menudo
  </label>
</section>

<button className='button'>Enviar</button>
</div>
    </div>
   
  )
}
