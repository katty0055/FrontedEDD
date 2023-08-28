import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from './../../../assets/Logocorporativo.png'
import jwtDecode from 'jwt-decode';
import style from './Login.module.css';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandle = (e) => {
    e.preventDefault()
      fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((tokenData) => {
        window.localStorage.setItem('accessToken', JSON.stringify(tokenData.access))
        console.log(tokenData);
        console.log(jwtDecode(tokenData.access).user_id);
        onLogin(jwtDecode(tokenData.access).user_id)
      })
  }

  return (
    <form className={style.form} onSubmit={loginHandle}>
      <div className={style.divForm}>
        <img className={style.img} src={Logo} alt="Logo" />
    </div>
    <h2 className={style.tituloForm}>Iniciar Sesión</h2>
    
    <div className={style.inputFila}>
      <input
        className={style.input}
        aria-label="Usuario"
        placeholder="Usuario"
        id="username"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />  
      <span className={style.inputIcono}>
        <svg className={style.iconoLogin} viewBox="-1 -1 25 23" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 11.5C11.5816 11.5 12.6389 11.1793 13.5383 10.5784C14.4376 9.97744 15.1385 9.12334 15.5525 8.12405C15.9664 7.12477 16.0747 6.02519 15.8637 4.96435C15.6527 3.90352 15.1318 2.92908 14.367 2.16426C13.6022 1.39944 12.6277 0.878596 11.5669 0.667583C10.5061 0.45657 9.40648 0.56487 8.4072 0.978786C7.40792 1.3927 6.55381 2.09365 5.9529 2.99298C5.35199 3.89231 5.03125 4.94964 5.03125 6.03125C5.03125 7.48165 5.60742 8.87265 6.63301 9.89824C7.6586 10.9238 9.0496 11.5 10.5 11.5ZM10.5 13.0625C7.11035 13.0625 0.34375 15.1563 0.34375 19.3125V22.4375H20.6562V19.3125C20.6562 15.1563 13.8896 13.0625 10.5 13.0625Z"/>
        </svg>
      </span>      
    </div>
    
    <div className={style.inputFila}> 
     <input
      className={style.input}
      aria-label="Contraseña"
      placeholder="Contraseña"
      id="password"
      type="password"
      onChange={(e) => {
        setPassword(e.target.value)
      }}  
     /> 
     <span className={style.inputIcono}>
        <svg  className={style.iconoLogin} viewBox="0 0 35 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8937 2.62586C20.2233 3.18841 19.5735 3.73365 19.1423 4.45572C14.6678 4.42263 1.86347 4.23421 1.86347 4.23421L0.116932 5.95459C0.116932 5.95459 -0.079004 9.17729 0.403873 9.22909C1.84385 9.37418 2.77664 9.41757 2.77664 9.41757L5.32555 7.91504L7.54311 10.1944L10.1202 8.36415L12.3169 10.8825L14.9213 8.74022L17.093 11.5484L18.4541 11.1973C18.7793 12.2865 19.2502 13.1305 20.0335 14.064C22.9977 17.5966 28.1532 18.148 31.5466 15.3006C34.94 12.4532 35.2802 7.28682 32.316 3.7542C29.3517 0.221575 24.2871 -0.221528 20.8937 2.62586ZM30.258 11.356C29.8617 11.6885 29.3757 11.896 28.8615 11.9523C28.3473 12.0086 27.828 11.9112 27.3691 11.6723C26.9103 11.4335 26.5326 11.0639 26.2838 10.6104C26.035 10.1569 25.9262 9.63979 25.9713 9.12448C26.0164 8.60916 26.2133 8.11879 26.5371 7.71536C26.8608 7.31194 27.297 7.01359 27.7903 6.85804C28.2837 6.70249 28.8121 6.69673 29.3087 6.84148C29.8053 6.98623 30.2478 7.275 30.5803 7.67126C30.8014 7.93422 30.9685 8.2382 31.072 8.56581C31.1755 8.89342 31.2133 9.23822 31.1834 9.58048C31.1534 9.92273 31.0563 10.2557 30.8975 10.5604C30.7387 10.865 30.5214 11.1354 30.258 11.356Z"/>
        </svg>        
      </span>
      </div>
    <button className={style.button}>Confirmar</button>     
</form> 
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // Agrega la validación de 'onLogin'
};

export default Login