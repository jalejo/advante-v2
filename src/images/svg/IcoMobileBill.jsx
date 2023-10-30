function IcoMobileBill({ baseColor = '#000000', accentColor ='var(--sky-blue)', hoverBaseColor = '#ffffff' }) {

    const styleBaseIconStyles = {
        fill: baseColor,
    };
    const styleAccentIconStyles = {
        fill: accentColor, 
    };

      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
            <path style={styleBaseIconStyles} className="styleBase"  d="M6,7.8c0-1.7,0.7-3.3,1.9-4.5c1.2-1.2,2.9-1.8,4.6-1.8h20c1.7,0,3.4,0.7,4.6,1.8C38.3,4.5,39,6.1,39,7.8v42.4
                c0,1.7-0.7,3.3-1.9,4.5c-1.2,1.2-2.9,1.8-4.6,1.8h-20c-1.7,0-3.4-0.7-4.6-1.8C6.7,53.5,6,51.9,6,50.2V7.8z M18.4,45
                c-0.5,0-0.9,0.2-1.3,0.5c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.8,0.5,1.3,0.5h8.2c0.5,0,0.9-0.2,1.3-0.5
                c0.3-0.3,0.5-0.8,0.5-1.2c0-0.5-0.2-0.9-0.5-1.2c-0.3-0.3-0.8-0.5-1.3-0.5H18.4z"/>
            <path style={styleAccentIconStyles} className="styleAccent"  d="M50,13.5H14c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h36c1.1,0,2-0.9,2-2v-20C52,14.4,51.1,13.5,50,13.5z M15,34.5
                v-4c2.2,0,4,1.8,4,4H15z M15,20.5v-4h4C19,18.7,17.2,20.5,15,20.5z M32,31.5c-2.8,0-5-2.7-5-6c0-3.3,2.2-6,5-6s5,2.7,5,6
                C37,28.8,34.8,31.5,32,31.5z M49,34.5h-4c0-2.2,1.8-4,4-4V34.5z M49,20.5c-2.2,0-4-1.8-4-4h4V20.5z"/>
        </svg>
      );
    }
  
  export default IcoMobileBill;