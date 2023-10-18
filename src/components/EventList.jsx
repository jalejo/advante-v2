import { getMonthName, getDay, formatTime } from "../utils/dateFormat";
import IcoLocation from "../images/svg/ico-location.svg";
import IcoClock from "../images/svg/ico-clock.svg";

const eventImage = require.context('../images/events', true );

const EventList = (props) => {
  const { title, date, address, description, image } = props;
  return (
  <div className="event-grid-item">
    <div className="event-grid-image">
      <span className='event-grid-image-box'>
          <img 
            src={eventImage(`./${image}`)}
            alt={ title }
          />
      </span>
      <div className="event-grid-date">
        <div className="event-grid-month">{getMonthName(date)}</div>
        <div className="event-grid-day">{getDay(date)}</div>
      </div>
    </div>
    <ul className="event-grid-info">
      <li className="event-grid-title">
        <p>{title}</p>
      </li>
      <li className="event-grid-hour">
        <img src={IcoClock} />
        <p>{formatTime(date)}</p>
      </li>
      <li className="event-grid-address">
        <img src={IcoLocation} />
        <p>{address}</p>
      </li>
    </ul>
    <div className="event-grid-description">
      <p>{description}</p>
    </div>
  </div>
  );
};

export default EventList;
