import style from './Panel.module.css'
import PreguntaEscala from '../PreguntaEscala';

const PanelPregunta = () =>{
    return(
        <div className={style.divPanelPregunta}>
            <PreguntaEscala/>
        </div>
    );
};

export default PanelPregunta;