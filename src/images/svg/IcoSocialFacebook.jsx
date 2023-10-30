function IcoSocialFacebook({ color = '#000000'}) {

const iconStyles = {
    fill: color, // Usar el valor de la variable fill
};

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" style={iconStyles} >
      <path d="M35,97.7h20.5V56.5h18.5L76,36H55.5V25.7c0-1.4,0.5-2.7,1.5-3.6c1-1,2.3-1.5,3.6-1.5H76V0H60.6
      c-6.8,0-13.3,2.7-18.1,7.5C37.7,12.4,35,18.9,35,25.7V36H24.7l-2,20.5H35V97.7z"/>
    </svg>
    
  );
}

export default IcoSocialFacebook;