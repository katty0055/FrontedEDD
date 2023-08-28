import style from './Buscador.module.css'
import Desplegar from './../../assets/desplegar.svg'
import PropTypes from 'prop-types';


const Buscador = ({valorCatedra}) => {

    return(
        <>
             <div className={style.divBuscador}>
                <h4 className={style.letraSeleccionar}>
                    {valorCatedra}
                </h4>
                <img className={style.desplegar} src={Desplegar} alt="Salir" />
               
                     
                
            
        </div>
          
        </>
       
    );
};

Buscador.propTypes = {
    valorCatedra: PropTypes.string.isRequired, // Agrega la validación de 'onLogin'
  };

export default Buscador;
