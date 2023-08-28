import Logo from  './../../assets/fpuna_logo_corporativo.png';
import Salir from './../../assets/log-out-sharp.svg';
import style from './BarraSuperior.module.css';
import Letra from  './../../assets/letras.png';
import { useEffect} from 'react';
import PropTypes from 'prop-types';

const TITULO = "EVALUACION DE DESEMPEÑO DOCENTE";
const BarraSuperior = ({ onLogout, userId }) =>{
  
    useEffect(() => {
        // Realizar la llamada a la API solo si userId tiene un valor
        if (userId) {
          const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));
          
          fetch(`http://localhost:8000/users/${userId}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          })
          .then((res) => res.json())
        //   .then((userData) => {
            // setUser(userData);
        //   })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
        }
      }, [userId]); // Agregar userId al arreglo de dependencias

    const logoutHandler = () => {
        onLogout();
    };

    return(
        <div className={style.barraSuperior}>
            <div className={style.tituloBarra}>
                <div className={style.columnBarra}>
                    <img className={style.imgLogo} src={Logo} alt="Logo" />
                </div>
                <div className={style.columnBarra}>
                    <h1 className={style.h1Titulo}>{TITULO}</h1>
                </div>
                <div className={style.columnBarra}>
                    <img onClick={logoutHandler} className={style.salir} src={Salir} alt="Salir" />   
                </div>  
            </div> 
            <div className={style.letras}>
                <div className={style.columnBarra}>
                    <img className={style.imgLogo} src={Letra} alt="Logo" />   
                </div>  
            </div> 
        </div>
        
        
    );

}

BarraSuperior.propTypes = {
    onLogout: PropTypes.func.isRequired, // Agrega la validación 
    userId: PropTypes.number.isRequired,
};

export default BarraSuperior;