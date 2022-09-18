import classes from "./ChartDropDown.module.css";

const ChartDropDown = (props) => {
  console.log(props)
  return (
    <div className={classes.drop}>
      <select onChange={props.onChange}>
        <option value="">{props.text}</option>

        {props.options.map((el, i) => (
          <option key={i} value={el.id}>
            {el.op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartDropDown;
