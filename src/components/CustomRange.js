import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import classNames from "classnames";

const SliderTrack = ({ props, children, min, max, values }) => {
  const colors = ["#eeeeee", "#000", "#eeeeee"];
  const background = getTrackBackground({
    values,
    min,
    max,
    colors,
  });

  return (
    <div
      className="slider-track-container"
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{ ...props.style, background }}
    >
      <div className="slider-track" ref={props.ref}>
        {children}
      </div>
    </div>
  );
};

const SliderThumb = ({ props, isDragged, index }) => {
  return (
    <div className="slider-thumb-container" style={props.style} {...props}>
      <div
        className={classNames("slider-thumb", { "is-dragged": isDragged })}
      />
    </div>
  );
};

const DistanceSlider = ({ min, max, step, editable, defaultvals }) => {
  const [values, setValues] = useState(defaultvals);
  const [message, setMessage] = useState("");
  const handleChange = (values) => {
    setValues(values);
  };

  const updateValues = (e) => {
    if (e.target.value > 100 || e.target.value < 1) {
      setMessage("⛔️ Value cannot be greater than 100 or less than 1");
    } else {
      setMessage("");
      if (e.target.name === "values0") {
        setValues([e.target.value, values[1]]);
      } else if (e.target.name === "values1") {
        setValues([values[0], e.target.value]);
      }
    }
  };

  const renderTrack = (props) => {
    return <SliderTrack {...props} min={min} max={max} values={values} />;
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-2">
            {editable == false ? (
              <output style={{ marginTop: "10px" }}>{values[0]}</output>
            ) : (
              <input
                min="1"
                max="100"
                type="number"
                value={values[0]}
                name="values0"
                className="form-control"
                onChange={updateValues}
              />
            )}
          </div>
          <div className="col-8 padd__range">
            <Range
              allowOverlap
              values={values}
              step={step}
              min={min}
              max={max}
              onChange={handleChange}
              renderTrack={renderTrack}
              renderThumb={SliderThumb}
            />
          </div>
          <div className="col-2">
            {editable == false ? (
              <output style={{ marginTop: "10px" }}>{values[1]}</output>
            ) : (
              <input
                min="1"
                max="100"
                type="number"
                value={values[1]}
                name="values1"
                className="form-control"
                onChange={updateValues}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">{message}</div>
        </div>
      </form>
    </>
  );
};

DistanceSlider.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
};

export default function CustomRange({ editable, defaultvals }) {
  return (
    <div className="CustomRange">
      <DistanceSlider editable={editable} defaultvals={defaultvals} />
    </div>
  );
}
