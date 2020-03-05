import React from 'react';

const Dashboard = () => {
  return (
    <>
      <aside>
        <strong>Predialfone</strong>
        <form>

          <div className="input-block">
            <label htmlFor="predialfone">Numero do predialfone</label>
            <input name="predialfone" id="predialfone" required />
          </div>


          <div className="input-block">
            <label htmlFor="user">Numero do predialfone</label>
            <input name="user" id="user" required />
          </div>

          <button type="submit">Buscar</button>
        </form>

      </aside>

      <main>
        <ul>

          <li className='data-item'>

            <div className="input-block">
              <label htmlFor="sip_username">Predialfone</label>
              <input name="sip_username" id="sip_username" readOnly />
            </div>


            <div className="input-block">
              <label htmlFor="sip_password">Senha</label>
              <input name="sip_password" id="sip_password" disreadOnly />
            </div>

            <div className="input-block">
              <label htmlFor="num_ip">IP address</label>
              <input name="num_ip" id="num_ip" readOnly />
            </div>

          </li>

          <li className='data-item'>

            <div className="input-block">
              <label htmlFor="username">Usuario</label>
              <input name="username" id="username" readOnly />
            </div>

            <div className="input-block">
              <label htmlFor="calledstationid">Vlan</label>
              <input name="calledstationid" id="calledstationid" readOnly />
            </div>

            <div className="input-block">
              <label htmlFor="framedipaddress">IP PPPoE</label>
              <input name="framedipaddress" id="framedipaddress" readOnly />
            </div>

          </li>
        </ul>

      </main>
    </>
  )
};

export default Dashboard;
