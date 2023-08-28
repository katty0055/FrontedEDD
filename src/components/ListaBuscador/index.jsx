import style from './ListaBuscador.module.css'
import PropTypes from 'prop-types';
const ASIGNATURAS =["Matematica","Algoritmica"]

const ListaBuscador = ({OnItemSelect}) => {

    return (
        <div className={style.divLista} >
            {ASIGNATURAS.map((asignatura,index) => (
                <div className={style.divItemLista} key={index} 
                    onClick={ () => OnItemSelect({asignatura})}>
                    <h3 className={style.letraAsignaturaLista} >
                        {asignatura}
                    </h3>
                </div>

            ))}
        </div>
    );
};

ListaBuscador.propTypes = {
    OnItemSelect: PropTypes.func.isRequired, // Agrega la validación de 'onLogin'
};
export default ListaBuscador;