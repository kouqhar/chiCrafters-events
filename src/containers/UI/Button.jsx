// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export default Button;
