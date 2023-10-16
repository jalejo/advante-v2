import React from 'react';

const ContactUs = () => {
  return (
    <section className='contactUsWrapper '>
      <div>
        <h3>Contact <span className='text-blue-violet-pink'>Us</span>.</h3>
        <div className='title-underline blue-violet-pink'></div>

        <div className='contact-form-wrapper'>
          <div className='div1'><input type='text' name='name' placeholder='Name' id='name' /></div>
          <div className='div2'><input type='text' name='lname' placeholder='Last Name' id='lname' /></div>
          <div className='div3'><input type='text' name='company' placeholder='Company' id='company' /></div>
          <div className='div4'><input type='text' name='email' placeholder='Email Address' id='email' /></div>
          <div className='div5'><input type='text' name='message' placeholder='Message' id='message' /></div>
          <div className='div6'>I’d like to receive occasional news and updates from Advante Digital.</div>
          <div className='div7'><a className='baseButton blueVioletPinkBttn'><span>Send</span></a></div>
        </div>
      </div>
      <div className='bgCircle bgCircle-green bgBlur-right-top'></div> 
      <div className='bgCircle bgCircle-violet bgBlur-left-top'></div>
      <div className='bgCircle bgCircle-blue bgBlur-right-bottom'></div>
    </section>

  );
}

export default ContactUs;