import React from 'react';

function TestItem(props) {
  return (
    <div>
      <h3>Test Name: {props.item.name}</h3>
      <h3>Test Assignment: {props.item.assignment}</h3>
      <h3>Test Difficulty: {props.item.difficulty}</h3>
      <h3>Test Enjoyment: {props.item.enjoyment}</h3>
    </div>
  );
}

export default TestItem;
