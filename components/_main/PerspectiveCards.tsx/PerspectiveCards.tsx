import React from 'react';
import './PerspectiveCards.css'; // Adjust the path according to your project structure
import Employee from '@/components/ResultList/Employee';
import EmployeeMock from './EmployeeMock';

const PerspectiveCards = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px]  max-w-[600px] -mt-20 ">
      <div className="perspective-container">
        {/*<div className="card bg-customGray-950">Card 1</div>
        <div className="card bg-pink-400">Card 2</div>
        <div className="card bg-blue-400">Card 3</div>*/}
        <EmployeeMock  className='card'/>
        <EmployeeMock  className='card'/>
        <EmployeeMock  className='card'/>
      </div>
    </div>
  );
};

export default PerspectiveCards;
