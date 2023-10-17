const WrapperSVG = ({ src, width, height }) => {
  return (
    <img
      src={src}
      style={{ width, height }}
      className="custom-svg"
      alt="Custom SVG"
    />
  );
};

export default WrapperSVG;
