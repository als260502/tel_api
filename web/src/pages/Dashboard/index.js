import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import './Dashboard.css'


const Dashboard = ({ history }) => {
  const [token, setToken] = useState('')
  const [predialfone, setPredialfone] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')

  const [sipUsername, setSipUsername] = useState('')
  const [sipPassword, setSipPassword] = useState('')
  const [sipAddress, setSipAddess] = useState('')

  const [pppUsername, setPppUsername] = useState('')
  const [pppVlan, setPppVlan] = useState('')
  const [pppVlanNas, setPppVlanNas] = useState('')
  const [pppAddress, setPppAddress] = useState('')

  const [router, setRouter] = useState('')
  const [routerIp, setRouterIp] = useState('')

  async function handleFoneSearch(event) {

    setRouter(null)
    setPppAddress(null)

    event.preventDefault();

    try {
      const response = await api.post(`/dashboard/fone`, {
        authorization: `Bearer ${token}`,
        predialfone
      }
      )
      const { numero, codcliente, num_ip, num_mac, sip_username, sip_password } = response.data

      setSipUsername(sip_username)
      setSipPassword(sip_password)
      setSipAddess(num_ip)


      if (!num_mac.match(/00:0B/)) {
        const responseUser = await api.post(`/dashboard/find`, {
          authorization: `Bearer ${token}`,
          mac: num_mac
        }
        )
        if (responseUser) {

          setRouter(1)
          setPppUsername(responseUser.data.username)
          setPppVlan(responseUser.data.calledstationid)
          setPppVlanNas(responseUser.data.nasportid)
          setPppAddress(responseUser.data.framedipaddress)
        }

      }

    } catch (error) {
      setMessage(error)
    }
  }

  async function handleUserSearch(event) {
    event.preventDefault();

  }

  useEffect(() => {
    setToken(history.location.state.token)
  })

  return (
    <>
      <aside>
        <strong>Predialfone</strong>
        <form name='tel' onSubmit={handleFoneSearch}>

          <div className="input-block">

            <label htmlFor="predialfone">Numero do predialfone</label>
            <input
              value={predialfone}
              onChange={event => setPredialfone(event.target.value)}
              name="predialfone"
              id="predialfone"
              required
            />

          </div>
          <button type="submit">Buscar</button>
        </form>
        {routerIp &&
          <form name='ppp' onSubmit={handleUserSearch}>

            <div className="input-block">
              <label htmlFor="user">Usuarop PPPoE</label>
              <input
                name="user"
                id="user"
                required
                value={user}
                onChange={event => setUser(event.target.value)}
              />
            </div>
            <button type="submit">Buscar</button>
          </form>
        }
      </aside>

      <main>
        <ul>

          <li className='data-item'>

            <div className="input-block">
              <label htmlFor="sip_username">Predialfone</label>
              <input
                name="sip_username"
                id="sip_username"
                value={sipUsername}
                onChange={event => setSipUsername(event.target.value)}
                readOnly

              />
            </div>


            <div className="input-block">
              <label htmlFor="sip_password">Senha</label>
              <input
                name="sip_password"
                id="sip_password"
                readOnly
                value={sipPassword}
                onChange={event => setSipPassword(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="num_ip">IP address</label>
              <input
                name="num_ip"
                id="num_ip"
                readOnly
                value={sipAddress}
                onChange={event => setSipAddess(event.target.value)}
              />
            </div>
            {sipAddress &&
              <div className='ink'>
                <a href={`http://${sipAddress}:2011`} target='blank'>Acessar ATA</a>
              </div>
            }
          </li>

          {router &&
            <li className='data-item'>

              <div className="input-block">
                <label htmlFor="username">Usuario</label>
                <input
                  name="username"
                  id="username"
                  readOnly
                  value={pppUsername}
                  onChange={event => setPppUsername(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="calledstationid">Vlan</label>
                <input
                  name="calledstationid"
                  id="calledstationid"
                  readOnly
                  value={pppVlan === '' ? pppVlanNas : pppVlan}
                  onChange={event => setPppVlan(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="framedipaddress">IP PPPoE</label>
                <input
                  name="framedipaddress"
                  id="framedipaddress"
                  readOnly
                  value={pppAddress}
                  onChange={event => setPppAddress(event.target.value)}
                />
              </div>
              {pppAddress &&
                <div className='ink'>
                  <a href={`http://${pppAddress}:1080`} target='blank'>Acessar Router</a>
                </div>}

            </li>
          }
        </ul>

      </main>
    </>
  )
};

export default Dashboard;
