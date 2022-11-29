import classes from "./ChartDropDown.module.css";
import { Translation, Trans } from "react-i18next";

const ChartDropDown = (props) => {
  console.log(props)
  return (
    <div className={classes.drop}>
      <select onChange={props.onChange}>
        <Translation>
          {(t, { i18n }) => (
            <option i18n value="" selected>
              {t(`${props.text}`)}
            </option>
          )}
        </Translation>
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
