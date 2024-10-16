import React from "react";
import { Navigate, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name);

  if (!dog) return <Navigate to='/dogs' />

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))};
      </ul>
    </div>
  )
};

export default DogDetails;