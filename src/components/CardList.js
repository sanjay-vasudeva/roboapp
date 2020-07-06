import React from 'react';
import Card from './Card';

const CardArray = ({robot}) => {
  const cardComponent = robot.map((user,i) => 
       <Card key={user.id} id={user.id} name={user.name} email={user.email} />
  )
    return <div>{cardComponent}</div>;
};

export default CardArray;
