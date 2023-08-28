import style from './PreguntaEscala.module.css'
import BotonEscala from '../BotonEscala';

const PREGUNTAS = ["Cumple con el horario establecido para el inicio de sus clases.",
                   "Cumple con el horario establecido para el termino de sus clases."]
const escala = [{valor:1, texto:"Nunca"},
                {valor:2, texto:"Rara vez"},
                {valor:3, texto:"Algunas Veces"},
                {valor:4, texto:"Casi Siempre"},
                {valor:5, texto:"Siempre"}]

const PreguntaEscala = () => {
    const recorrer = () => {
      return( PREGUNTAS.map((element, index) => (
        <div className={style.divPreguntaEscala} key={index}>
            <div className={style.cuadroLetras}>
                {(index + 1) + '-' }
                {element}
            </div>
           
            <div className={style.cuadroBotones}>
                <BotonEscala escala ={escala}/>
            </div>
            
        </div>
      )));
    };
  
    return recorrer();
  };

export default PreguntaEscala;