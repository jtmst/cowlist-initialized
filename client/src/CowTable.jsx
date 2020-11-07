import React from 'react';
import ReactDOM from 'react-dom';

const CowTable = function (props) {
  // console.log(props.cows[0]);
  // return <h1></h1>;
  return (
    <div>
      {props.cows.map((cow) => {
        return (
          <li
            onClick={() => {
              props.selectCow(cow);
            }}
          >
            {cow.name}
          </li>
        );
      })}
    </div>
  );
};

export default CowTable;

{
  //   /* <div>
  // {props.cows.map((cow) => {
  //   return <li>1</li>;
  // })}
  // </div>; */
}
