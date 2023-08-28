import style from './Perfil.module.css'

import { useEffect, useState } from 'react';

const Perfil = () => {
    const [profileImageURL, setProfileImageURL] = useState(null);

  useEffect(() => {
    // Obtener el token de acceso almacenado en el local storage
    const accessToken = JSON.parse(window.localStorage.getItem('accessToken'));

    // Hacer una solicitud para obtener la información del perfil del usuario
    fetch('http://localhost:8000/productos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((profileData) => {
        //url de la imagen
        const imageURL = profileData[0].imagen;
        setProfileImageURL(imageURL);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);
   
    return(
        <div className={style.cuadroExterior}>
            <div className={style.cuadroInterior}>
                {/* <div className={style.columnaInteriorIzq}>  */}
                    <div className={style.filaInterior}>
                        <h3 className={style.letrasPerfil}>Nombre Completo  Nombre Completo</h3>
                    </div>
                    <div className={style.filaInteriorMedio}>
                      <h3 className={style.letrasPerfil}>Estudiante</h3>
                      <div className={style.divImagen}>
                        <img src={profileImageURL} alt="Profile" className={style.profileImage} />
                        <h4 className={style.letrasRol}> Cambiar Rol</h4>
                      </div>
                     
                
                    </div>

                {/* </div>  */}
                 {/* <div className={style.columnaInteriorDer}>
                           
                        
                </div>  */}

            
                
                
                
            </div>
            
        </div>
    );
};
export default Perfil;