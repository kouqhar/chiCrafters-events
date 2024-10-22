/* eslint-disable react/prop-types */
import Aux from "../../Hoc/_Aux/_Aux";

const Input = ({ uniqueIdentifier, labelText, ...props }) => {
  return (
    <Aux>
      <label htmlFor={uniqueIdentifier}>
        {labelText}: {props.required && <span>* Required</span>}
      </label>
      {labelText === "Description" ? (
        <textarea id={uniqueIdentifier} name={uniqueIdentifier} {...props} />
      ) : (
        <input id={uniqueIdentifier} name={uniqueIdentifier} {...props} />
      )}
    </Aux>
  );
};

export default Input;
