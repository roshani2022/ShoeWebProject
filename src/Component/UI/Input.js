
import classes from "./Input.module.css";
const Input = (props) => {
 
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;