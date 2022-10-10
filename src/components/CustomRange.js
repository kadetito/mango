import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const cssVar = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    "--" + name
  );
};

const CustomRange = (props) => {
  const STEP = props.step ? props.step : 1;
  const MIN = props.max ? props.min : 0;
  const MAX = props.max ? props.max : 100;
  const [state, setState] = useState({
    values: [props.default ? props.default : 50],
  });

  return (
    <Range
      values={state.values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => {
        if (props.onChange) props.onChange(values);
        setState({ values });
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "9999px",
              background: getTrackBackground({
                values: state.values,
                colors: [cssVar("B60"), cssVar("N10")],
                min: MIN,
                max: MAX,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          className="range-thumb"
          {...props}
          style={{
            ...props.style,
            height: "24px",
            width: "24px",
            borderRadius: "9999px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        ></div>
      )}
    />
  );
};

export default CustomRange;
