import ClientsList from '../jsons/clients.json'

const clientsImages = require.context('../images/logo-clients', true );

const OurClients = () => {
  return (
    <section className='ourClientsWrapper'>
      <div className='containerFull'>
        <h3>Our Clients</h3>
        <div className='title-underline blue-green-orange'></div>
      </div> 

      <div className='clients-list-wrapper'>
        <div className='clients-list-track'>
          {
            ClientsList.map((client) => (
              <div key={ client.id }>
                <img 
                  src={clientsImages(`./${client.file}`)}
                  alt={client.name}
                />
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
}

export default OurClients;