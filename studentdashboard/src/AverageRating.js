import React from 'react';
import dataFromExcel from './rawDataFromExcel';
import TestItem from './TestItem';

// shorten labels for assignment to max 8 characters
// const items = this.state.studentRatings;
// const createShorterStringLabel = () => {
//   items.forEach(item => {
//     if (item.assignment.length <= 7) {
//       console.log(item.assignment, item.assignment.length);
//       return item.assignment;
//     }
//     console.log(item.assignment, item.assignment.length);
//     return item.assignment.slice(0, 7);
//   });
// };
// const items = dataFromExcel;
// const createShorterStringLabel = () => {
//   items.forEach(item => {
//     if (item.assignment.length <= 7) {
//       return item.assignment;
//     }
//     return item.assignment.slice(0, 7);
//   });
// };

// let values = [2, 56, 3, 41, 0, 4, 100, 23];
// let sum = values.reduce((previous, current) => current += previous);
// let avg = sum / values.length;

class Average extends React.Component {
  constructor() {
    super();
    this.state = {
      studentRatings: dataFromExcel
    };
    this.createShorterStringLabel = this.createShorterStringLabel.bind(this);
    console.log(this.state);
  }

  createShorterStringLabel() {
    this.setState(prevState => {
      const updatedStudentRatings = prevState.studentRatings.map(
        studentRating => {
          if (studentRating.assignment.length <= 7) {
            return studentRating;
          }
          return {
            ...studentRating,
            assignment: studentRating.assignment.slice(0, 7)
          };
        }
      );
      return {
        studentRating: updatedStudentRatings
      };
    });
  }

  render() {
    const testItems = this.state.studentRatings.map(item => (
      <TestItem
        item={item}
        createShorterStringLabel={this.createShorterStringLabel}
      />
    ));

    return (
      <div className='Average'>
        <h2>Test Items </h2>
        <div>{testItems}</div>
      </div>
    );
  }
}

export default Average;
