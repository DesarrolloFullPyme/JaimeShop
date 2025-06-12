import { useState } from "react";
import './Login.css';

function Login({onLogin}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === 'admin@lumina.com' && password === 'admin123'){
            setError('');
            onLogin();
        }else{
            setError('Usuario o contraseña incorrectos. Por favor, verifica tus datos o restablece tu contraseña si no puedes acceder.');
        }
    };

    return(
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-header">LOGIN</h1>
            {error && <p className="error">{error}</p>}

            <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
           
            <button type="submit">Inicia sesión</button>
        </form>
    </div>
    );
  
}

export default Login;