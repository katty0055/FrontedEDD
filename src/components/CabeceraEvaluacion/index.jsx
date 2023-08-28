import style from './Cabecera.module.css'
import PropTypes from 'prop-types';

const Cabecera = ({valorCabecera}) =>{
    return(
        <div className={style.cabeceraPrincipal}>
            <h4>Sede: {valorCabecera} </h4>
            <h4>Docente: {valorCabecera}</h4>
            <h4>Asignatura: {valorCabecera}</h4>
            <h4> Sección: {valorCabecera}</h4>
            <h4> Turno: {valorCabecera}</h4>
          
        </div>
    );
};

Cabecera.propTypes = {
    valorCabecera: PropTypes.string.isRequired, // Agrega la validación de 'onLogin'
};


export default Cabecera;