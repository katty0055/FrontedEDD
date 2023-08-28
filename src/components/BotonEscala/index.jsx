import { useState } from 'react';
import style from './BotonEscala.module.css'
const BotonEscala = ({escala}) => {
    const [botones,setBotones] =useState(escala.map(() =>({
        colorLetra:style.letraBotonEscala,
        colorFondo:style.divBotonEscala
    })));

    const changeColor = (indexColor) => {
        setBotones((prevBotones) => {
            const newBotones =[...prevBotones];
            newBotones.forEach((element, index) =>{
                if (indexColor === index){
                    newBotones[index] = {
                        colorLetra: style.letraBotonEscalaActivado,
                        colorFondo: style.botonEscalaActivado           
                    };
                    console.log(escala[index].texto)
                }else{
                    newBotones[index] = {
                        colorLetra: style.letraBotonEscala,
                        colorFondo: style.divBotonEscala           
                    };
                }
            })
            return newBotones;
        });  
    };

    const recorrer = () => {
        return escala.map((element, index) => (
          <div className={botones[index].colorFondo} key={index}>
                <h5 className={botones[index].colorLetra} onClick={() => changeColor(index)}>
                    {element.texto}
                </h5>
          </div>
        ));
    };

    return recorrer();
};
export default BotonEscala;