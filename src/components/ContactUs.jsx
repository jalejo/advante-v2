import { TextField, FormControlLabel, Checkbox } from '@mui/material';

const ContactUs = () => {
  return (
    <section className='contactUsWrapper '>
      <div>
        <h3>Contact <span className='text-blue-violet-pink'>Us</span>.</h3>
        <div className='title-underline blue-violet-pink'></div>
        
        <div className='contact-form-wrapper'>
          <div className='div1'>
            <TextField fullWidth id="name" label="Name" variant="standard" />
          </div>
          <div className='div2'>
            <TextField fullWidth id="lname" label="Last Name" variant="standard" />
          </div>
          <div className='div3'>
            <TextField fullWidth id="company" label="Company" variant="standard" />
          </div>
          <div className='div4'>
            <TextField fullWidth id="email" label="Email Address" variant="standard" />
          </div>
          <div className='div5'>
            <TextField
              fullWidth
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />

          </div>

          <div className='div6'>
            <FormControlLabel control={<Checkbox />} label="I’d like to receive occasional news and updates from Advante Digital." />
          </div>
          <div className='div7'>
            <button className='baseButton blueVioletPinkBttn' type='submit'> Send </button>
            
            </div>
        </div>
      </div>
      <div className='bgCircle bgCircle-green bgBlur-right-top'></div> 
      <div className='bgCircle bgCircle-violet bgBlur-left-top'></div>
      <div className='bgCircle bgCircle-blue bgBlur-right-bottom'></div>
    </section>

  );
}

export default ContactUs;