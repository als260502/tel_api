import React, { useState } from "react";
import api from '../../services/api';

import './Login.css'
import Loading from '../assets/Reload-1s-64px.svg'

export default function Login({ history }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoadind] = useState(false)

  async function handleSubmit(event) {
    setLoadind(true)
    event.preventDefault()

    try {

      const response = await api.post('/users/auth', { username, password })

      const { user, token } = response.data
      //console.log(user, token)
      setLoadind(false)
      history.push('/telefonia/app/dashboard', { id: user.id, token })

    } catch (error) {
      setLoadind(false)
      const { message } = error.response.data
      setMessage(message)
    }

  }
  return (
    <div className='container'>
      <header>
        Login
     </header>

      <form onSubmit={handleSubmit}>

        <div className="input-block">
          <label htmlFor="username">Usuario *</label>
          <input
            id="username"
            placeholder="entre com usario"
            value={username}
            onChange={event => setUsername(event.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="password">Password *</label>
          <input
            id="password"
            type='password'
            placeholder="entre com a senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>

        <button className="btn" type="submit">
          Entrar
        </button>
        {message &&
          <div className='errMessage'>
            <span>{message}</span>
          </div>
        }

      </form>
      {loading &&
        <div className='loading'>
          <img src={Loading} alt="loading" />
        </div>
      }
    </div >
  );
}
