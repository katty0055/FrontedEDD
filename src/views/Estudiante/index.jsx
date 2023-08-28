import BarraSuperior from "../../components/BarraSuperior";
import PropTypes from 'prop-types';
import style from './Estudiante.module.css';
import Perfil from "../../components/Perfil";
import ListaBuscador from "../../components/ListaBuscador";
import Buscador from "../../components/Buscador";
import { useState } from "react";
import PanelPregunta from "../../components/PanelPreguntas";
import Cabecera from "../../components/CabeceraEvaluacion";
import BotonEscala from "../../components/BotonEscala";

const Estudiante = ({onLogout, userId}) =>{
    const [panelCentral,setPanelCentral] = useState('');
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState('Seleccione una catedra');
    const [cabecera,setCabecera] = useState('--- ');

    const handleBuscador = () => {
        setPanelCentral(<ListaBuscador OnItemSelect={handleItemSelect}/>);
        console.log("handleBuscador llamado");
    };

    const handleItemSelect = ({asignatura}) =>{
        //cambia el panel 
        setPanelCentral(<PanelPregunta/>); 
        setAsignaturaSeleccionada(asignatura);
        setCabecera(asignatura);
     
    };

    return(
        <div className={style.pagina}>
            <div>
                <BarraSuperior onLogout={onLogout} userId={userId}/>
            </div>
            <div className={style.divFilaCuerpo}>
                <div className={style.columna20} >
                    <div className={style.divBuscadorEstudiante} onClick={handleBuscador}>
                        <Buscador valorCatedra={asignaturaSeleccionada} />
                    </div>                   
                </div>
                <div className={style.columna70}>
                    <div className={style.filaCabecera}>
                        <Cabecera valorCabecera={cabecera}/> 
                        <Perfil userId={userId}/>
                                               
                    </div>
                    <div className={style.divCentral}>
                        {panelCentral} 
                    </div>
                </div>
                
            </div> 
        </div>       
    );
};

Estudiante.propTypes = {
    onLogout: PropTypes.func.isRequired, // Agrega la validación 
    userId: PropTypes.number.isRequired,
};
export default Estudiante;