import React, { useRef, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function CustomRange({ editable }) {
  const valueRange = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];

  const [minCaption, set_minCaption] = useState("");
  const [maxCaption, set_maxCaption] = useState("");

  const ref = useRef(null);

  return (
    <>
      <form>
        <div className="row" data-testid="customrange">
          <div className="col-2 d-flex justify-content-end">
            {editable == false ? (
              <> {minCaption}€</>
            ) : (
              <>
                <input
                  ref={ref}
                  min="1"
                  max="100"
                  type="number"
                  className="form-control"
                  defaultValue={minCaption}
                  onChange={(e) => {
                    set_minCaption(e.target.value);
                  }}
                />
              </>
            )}
          </div>
          <div className="col-8">
            <MultiRangeSlider
              label={false}
              min={editable === false ? 0 : 1}
              max={editable === false ? 5 : 100}
              minValue={0}
              maxValue={100}
              ruler={false}
              step={1}
              onInput={(e) => {
                editable === false
                  ? set_minCaption(valueRange[e.minValue])
                  : set_minCaption(e.minValue);
                editable === false
                  ? set_maxCaption(valueRange[e.maxValue])
                  : set_maxCaption(e.maxValue);
              }}
              baseClassName="multi-range-slider"
            />
          </div>
          <div className="col-2 ">
            {editable == false ? (
              <> {maxCaption}€</>
            ) : (
              <input
                ref={ref}
                min="1"
                max="100"
                type="number"
                className="form-control"
                defaultValue={maxCaption}
                onChange={(e) => {
                  set_maxCaption(e.target.value);
                }}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
}
