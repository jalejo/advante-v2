import React from 'react';

function IcoSocialYoutube({ color = '#000000'}) {

const iconStyles = {
    fill: color, // Usar el valor de la variable fill
};

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" style={iconStyles} >
      <path d="M50,9.3c2.6,0,9.1,0.1,16.1,0.4l2.5,0.1c7,0.3,13.9,0.9,17.4,1.9c4.6,1.3,8.2,5.2,9.5,10.1
        c2,7.8,2.2,23,2.2,26.7l0,0.8V50c0,3.7-0.3,18.9-2.2,26.7c-1.2,4.9-4.9,8.8-9.5,10.1c-3.5,1-10.4,1.6-17.4,1.9l-2.5,0.1
        c-6.9,0.3-13.5,0.3-16.1,0.4l-1.1,0h-1.2c-5.5,0-28.6-0.3-35.9-2.4c-4.6-1.3-8.2-5.2-9.5-10.1C0.3,68.9,0,53.7,0,50v-1.6
        c0-3.7,0.3-18.9,2.2-26.7c1.2-4.9,4.9-8.8,9.5-10.1C19,9.6,42.1,9.3,47.6,9.3H50z M39.1,31.8v35l29.3-17.5L39.1,31.8z"/>
    </svg>
    
  );
}

export default IcoSocialYoutube;