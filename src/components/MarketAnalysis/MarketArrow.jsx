function MarketArrow({ color = '#000000'}) {

    const iconStyles = {
        fill: color, // Usar el valor de la variable fill
    };
  
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51" style={iconStyles} >
          <circle cx="25.5" cy="25.5" r="24.5" transform="matrix(-1 0 0 1 51 0)" fill="#FECA57" stroke="#EE5253" strokeWidth="2"/>
<path d="M35.7559 25.3615H32.5943M15.5222 25.3615L23.1098 17.7393M15.5222 25.3615L23.1098 32.9838M15.5222 25.3615H28.8005" stroke="#EE5253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
      );
    }
  
  export default MarketArrow;

