import { ReactPropTypes } from "react";
export default function Card({ Children, reverse }) {
    return (
      <div
        className="card"
        style={{
          backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
          color: reverse ? '#fff' : '#000', 
        }}
      >
        {Children}
      </div>
    );
    Card.defaultProps = {
        reverse: false
    }
  }
  