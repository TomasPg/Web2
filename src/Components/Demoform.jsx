import React, {useState} from 'react'
import { Fade } from 'react-bootstrap';

function Demoform() {

    //Definir las variables de estado para cada dato del formulario
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [isErrorUserName, setErrorUserName] = useState(false)
    const [isErrorEmail, setErrorEmail] = useState(false)
    const [isErrorPassword, setErrorPassword] = useState(false)

    //Definir los métodos para el contexto
    const onSubmit = (e) => {
        //Desactivar el postback del browser
        e.preventDefault();
        setErrorUserName(userName == '' ? true : false)
        setErrorEmail(email == '' ? true : false)
        setErrorPassword(password == '' ? true : false)

        if(userName != '' && email != '' && password != ''){
            console.log(userName)
            console.log(email)
            console.log(password)
        }
    }

  return (
    <div className='container'>
        <h4>Formulario en React</h4>
        <h4>Bienvenido {userName}</h4>

        <form onSubmit={onSubmit}>
            <label>Usuario</label>
            <input
                type="text" 
                name='userName'
                placeholder='Ingrese Usuario'
                className='form-control'
                value={userName}
                onChange={username => setUserName(username.target.value)}
            />
            <div> {isErrorUserName && <label style={{color:'red'}}>Porfavor ingrese el Usuario</label>} </div>

            <label>Correo</label>
            <input 
                type="email"
                name="email"
                placeholder='Ingrese su Correo'
                className='form-control'
                value={email}
                onChange={email => setEmail (email.target.value)}
            />
            <div> {isErrorEmail && <label style={{color:'red'}}>Porfavor ingrese el Correo</label>} </div>

            <label>Contraseña</label>
            <input 
                type="password"
                name='Contraseña'
                placeholder='Ingrese Contraseña'
                className='form-control'
                value={password}
                onChange={password => setPassword (password.target.value)}
            />
            <div> {isErrorPassword && <label style={{color:'red'}}>Porfavor ingrese la Contraseña</label>} </div>
            
            <button className='btn btn-primary'>Login</button>
        </form>
    </div>
  )
}

export default Demoform