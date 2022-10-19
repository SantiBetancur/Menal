import React from 'react'
import { Buttons } from './Buttons'
export const Testdepre = () => {
  return (
<div>
<section className='min-header-2'>
        <img src={require(`../img/logo.png`)}/>
        <p className='p'>TEST DE DEPRESIÓN</p>
        <Buttons color='button-1' text='INICIO' route = '/'/>
        <Buttons color='button-1' text='RESULTADOS' route = '/Resultados'/>
     </section>
<div className="container">
<section className='section' id="p0">
  <h3>¿Te has sentido cansado(a) o con poca energía?</h3>
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
  <h3>¿Has tenido dificultad para concentrarte en ciertas actividades, tales como leer el periódico o ver la televisión?</h3>
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
  <h3>¿Te has sentido decaído(a), deprimido(a) o sin esperanzas?</h3>
  <label>
      <input type="radio" value="1" name="p2"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p2"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p2"/> Mas de la mitad de los dde los dias
  </label>
  <label>
      <input type="radio" value="4" name="p2"/> Casi todos los dias
  </label>
</section>

<section className='section' d="p3">
  <h3>¿Has experimentado poco interés o placer en hacer cosas?</h3>
  <label>
      <input type="radio" value="1" name="p3"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p3"/> Varios dias
  </label>
  <label>
      <input type="radio" value="4" name="p3"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="5" name="p3"/> Casi todos los dias
  </label>
</section>

<section className='section' id="p4">
  <h3>¿Has tenido dificultad para quedarte, permanecer dormido(a), o has dormido demasiado?</h3>
  <label>
      <input type="radio" value="1" name="p4"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p4"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p4"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p4"/> Casi todos los dias
  </label>
</section>

<section className='section' id="p5">
  <h3>¿Has estado sin apetito o has comido en exceso?</h3>
  <label>
      <input type="radio" value="1" name="p5"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p5"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p5"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p5"/> Casi todos los dias
  </label>
</section>

<section className='section' id="p6">
  <h3>¿Te has sentido mal contigo mismo(a), piensas que eres un fracaso, que has quedado mal contigo mismo(a) o con tu familia?</h3>
  <label>
      <input type="radio" value="1" name="p6"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p6"/> Varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p6"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p6"/> Casi todos los dias 
  </label>
</section>

<section className='section' id="p7">
  <h3>¿Te has movido o hablado tan lento que otras personas podrían haberlo notado o, por el contrario, has estado tan inquieto(a) o agitado(a) que has estado moviéndote mucho más de lo normal?</h3>
  <label>
      <input type="radio" value="1" name="p7"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p7"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p7"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p7"/> Casi todos los dias
  </label>
</section>

<section className='section' id="p8">
  <h3>Pensamientos de que estarías mejor muerto(a) o de lastimarte de alguna manera, ¿han pasado por tu mente?</h3>
  <label>
      <input type="radio" value="1" name="p8"/> Ningun dia
  </label>
  <label>
      <input type="radio" value="2" name="p8"/> varios dias
  </label>
  <label>
      <input type="radio" value="3" name="p8"/> Mas de la mitad de los dias
  </label>
  <label>
      <input type="radio" value="4" name="p8"/> Casi todos los dias
  </label>
</section>

<button className='button'>Enviar</button>
</div>
</div>    
  
  )
}

