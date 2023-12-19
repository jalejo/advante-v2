import { Box, TextField, FormControlLabel, Checkbox } from "@mui/material";

const ContactUs = (props) => {
  const {
    headLineText,
    headLineSpan,
    wrapperBox,
    darkTheme,
    underline,
    h3Color,
    spanClass = "text-blue-violet-pink",
    sendColor = "var(--royal-purple)",
    checkColor = "var(--royal-purple)",
    bgCircles
  } = props;

  return (
    <Box
      className="contactUsWrapper"
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <div className="contact-form-headline">
          <h3 style={h3Color && { color: h3Color }}>
            {headLineText && headLineSpan ? (
              <>
                {headLineText} <span className={spanClass}>{headLineSpan}</span>.
              </>
            ) : headLineText ? (
              <>{headLineText}.</>
            ) : headLineSpan ? (
              <span className={spanClass}>{headLineSpan}.</span>
            ) : (
              <>
                Contact <span className={spanClass}>Us</span>.
              </>
            )}
          </h3>

          {underline && (
            <div
              className="title-underline"
              style={{ background: underline }}
            ></div>
          )}
        </div>
        <div
          className="contact-form-wrapper"
          style={wrapperBox && { backgroundColor: "#FFF" }}
        >
          <TextField
            className="halfWidth"
            required
            id="name"
            label="Full Name"
            variant="outlined"
          />

          <TextField
            className="halfWidth"
            required
            id="email"
            label="Your Email"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            id="subject"
            label="Subject"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            id="message"
            label="Message"
            multiline
            rows={6}
            variant="outlined"
          />

          <FormControlLabel
            className="fullWidth"
            control={<Checkbox 
              sx={{
                color: checkColor ,
                '&.Mui-checked': {
                  color:  checkColor ,
                },
              }}
            />}
            label="I’d like to receive occasional news and updates from Advante Digital."
          />

          <button
            className="baseButton baseButtonCentered"
            style={{ background: sendColor || "#FFF" }}
            type="submit"
          >
            Send
          </button>
        </div>
      </div>

      {
        bgCircles && bgCircles.map(( circle, index ) => (
          <div 
            key={ index } 
            className = "bgCircle"
            style={{
              width : circle.size,
              height: circle.size,
              backgroundColor: circle.color,
              top: circle.top,
              left: circle.left,
              right: circle.right,
              opacity: circle.opacity
            }}
          />
        ) )
      }
    </Box>
  );
};

export default ContactUs;
