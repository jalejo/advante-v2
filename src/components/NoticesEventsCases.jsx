import React from 'react';
import NoticesList from '../jsons/notices.json' 
import CapabilitiesList from '../jsons/capabilities.json'
import EventsList from '../jsons/events.json'

import IcoLocation from '../images/svg/ico-location.svg'
import IcoClock from '../images/svg/ico-clock.svg'

import { getMonthName, getDay, formatTime } from '../utils/dateFormat';

const NoticesEventsCases = () => {

  const sortedEvents = EventsList.slice().sort((a, b) => {

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

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
                  <div className='notice-grid-item' key={notice.id}>
                    <div className='notice-grid-stick'>{ notice.category}</div>
                    <div className='notice-grid-label'>
                      <p>{ notice.title}</p>
                      <div className='notice-grid-capabilities-group'>
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

         
          <div className='bgCircle bgCircle-violet bgBlur-right-top'></div> 
          <div className='bgCircle bgCircle-orange bgBlur-left-top'></div>
          <div className='bgCircle bgCircle-blue bgBlur-right-bottom'></div>

        </div>
        <div className='subsection-events'>
          <h3>Explore <span className='text-orange-violet-pink'>Tech Events</span>.</h3>

              <div className='events-grid'>
                {
                  sortedEvents.map((ev) => (
                    <div key={ev.id} className='event-grid-item'> 
                      
                      <div className='event-grid-image'>
                        <div className='event-grid-date'>
                          <div className="event-grid-month">{getMonthName(ev.date)}</div>
                          <div className="event-grid-day">{getDay(ev.date)}</div>
                        </div>
                      </div>
                      <ul className='event-grid-info'>
                        <li className="event-grid-title"><p>{ ev.event }</p></li>
                        <li className="event-grid-hour"><img src={ IcoClock } /><p>{formatTime(ev.date)}</p></li>
                        <li className="event-grid-address"><img src={ IcoLocation } /><p>{ ev.address }</p></li>
                      </ul>
                      <div className="event-grid-description">
                        <p>{ ev.description }</p>
                      </div>
                    </div>
                  ) )
                }
              </div>
              <div className='bgCircle bgCircle-pink bgBlur-right-top'></div> 
              <div className='bgCircle bgCircle-yellow bgBlur-left-top'></div>
        </div>
      </div>
    </section>
  );
}

export default NoticesEventsCases;