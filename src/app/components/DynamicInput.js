import { Form } from "react-bootstrap";
import { separator as thousandSeparator } from "../helpers/separator";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { useState } from "react";
const numericKeys = "0123456789.:";
const num1 = "0123456789";
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const DynamicInput = (props) => {
  const { field, onChangeHandler, defaultValue, separator } = props;
  const [selected, setSelected] = useState([]);
  if (field.type === "select") {
    if (field.stateName !== "other_services"){
      return (
        <Form.Control
          onChange={(e) => onChangeHandler(e.target.value, field)}
          // defaultValue={defaultValue}
          className="form-control form-select"
          multiple={field.stateName === "other_services" ? true : false}
          as="select"
          disabled={field.active ? !field.active : field.disabled}
          id={`field-${field.id}`}
        >
          <option value="">Please select</option>
          {field.params.map((param) => (
            <option
              disabled={
                param.enabled
                  ? !param.enabled
                  : param.active
                  ? !param.active
                  : !param.enable
              }
              value={param.id}
              selected={parseInt(defaultValue) === param.id ? true : false}
            >
              {param.name || param.describe}
            </option>
          ))}
        </Form.Control>
      );}
    else {
      const options=[]
      let selecteda=[]
      console.log(selecteda)
      for (let i = 0; i < field.params.length; i++) {
        let disabled = field.params[i].enabled
          ? !field.params[i].enabled
          : field.params[i].active
          ? !field.params[i].active
          : !field.params[i].enable;
        let selecteds =
          defaultValue !== undefined &&
          defaultValue !== null &&
          defaultValue.includes(field.params[i].id)
            ? true
            : false;
        if(!disabled){
        options.push({
          label: field.params[i].name || field.params[i].describe,
          value: field.params[i].id,
        });
        }
        if(selecteds){
          selecteda.push({
            label: field.params[i].name || field.params[i].describe,
            value: field.params[i].id,
          });

        }
      }
      
      

      
       
  return (
    <ReactSelect
      options={options}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
      }}
      onChange={(e) => {
        console.log(e)
        let x = [];
        let y = "";
        if(e!==null){
        for (let i = 0; i < e.length; i++) {
          x.push(e[i].value);
          y+=e[i].value
        }
        setSelected(e)
        selecteda=e
        onChangeHandler(y, field);
      }
      else{
        onChangeHandler("", field);
        setSelected([])
        selecteda=[]
      }
      }}
      allowSelectAll={true}
      value={selected.length>0?selected:selecteda}
    />
  );}

    
  }

  if (field.type === "bool") {
    return (
      <>
        <Form.Control
          onChange={(e) => onChangeHandler(e.target.value === "true", field)}
          // defaultValue={defaultValue}
          className="form-control"
          as="select"
          disabled={field.active ? !field.active : field.disabled}
          id={`field-${field.id}`}
        >
          <option
            selected={(defaultValue === null || defaultValue === undefined) ?true : false}
            disabled
          >
            Please select
          </option>
          <option
            selected={
              (defaultValue !== null && defaultValue !== undefined)
                ? defaultValue
                : false
            }
            value={true}
          >
            Yes
          </option>
          <option
            selected={
              (defaultValue !== null && defaultValue !== undefined)
                ? !defaultValue
                : false
            }
            value={false}
          >
            No
          </option>
        </Form.Control>
      </>
    );
  }

  const validation = field.validation?.[0];
  return (
    <Form.Control
      onKeyPress={(e) => {
        e.persist();
        if (field.type === "number") {
          if (validation && validation?.float) {
            if (numericKeys.indexOf(e.key) === -1) {
              e.preventDefault();
              return;
            }
          } else if (validation && validation?.float === false) {
            if (num1.indexOf(e.key) === -1) {
              e.preventDefault();
              return;
            }
          }
        }
        onChangeHandler(e.target.value, field);
      }}
      onChange={(e) => onChangeHandler(e.target.value, field)}
      value={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      disabled={field.active ? !field.active : field.disabled}
      min={validation && validation?.min !== -1 ? validation.min : undefined}
      max={validation && validation?.max !== -1 ? validation.max : undefined}
      step={
        validation && validation?.float
          ? Math.pow(0.1, validation.floating).toFixed(validation.floating)
          : undefined
      }
      maxLength={
        validation && validation?.digits !== -1 ? validation.digits : undefined
      }
      onBlur={(e) => {
        e.persist();
        if (separator) {
          const formatted = thousandSeparator(e.target.value);
          onChangeHandler(formatted, field);
        }
      }}
    />
  );
};

export default DynamicInput;
