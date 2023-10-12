import React from 'react';
import NoticesList from '../jsons/notices.json' 
import CapabilitiesList from '../jsons/capabilities.json'

const NoticesEventsCases = () => {
  return (
    <section className='noticeEventCasesWrapper'>
      <div className='containerFull'>
        <div className='subsection-notices'>
          <h3>Notices, Events and <span className='text-orange-violet-pink'>cases</span>.</h3>
          <div className='title-underline orange-violet-pink'></div>

          <div className='notices-wrapper'>
            <div>
              <li></li>
            </div>
            <div className='notices-grid'>
              {
                NoticesList.map((notice) => ( 
                  <div className='notice-item' key={notice.id}>
                    <div className='notice-stick'>{ notice.category}</div>
                    <div className='notice-label'>
                      <p>{ notice.title}</p>
                      <div className='notice-capabilities-group'>
                        {
                          notice.capabilities.map((capId) => {
                            const capability = CapabilitiesList.find((c) => c.id === capId);
                            return ( <div className='notice-capability'>{capability.name}</div> );
                          })
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='subsection-events'>
          <h3>Explore <span className='text-orange-violet-pink'>Tech Events</span>.</h3>
        </div>
      </div>
    </section>
  );
}

export default NoticesEventsCases;