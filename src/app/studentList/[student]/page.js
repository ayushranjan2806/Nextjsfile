'use client'
import React from "react";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Products details :- nirma</h1>
      <h3>Name: {params.student}</h3>
    </div>
  );
};

export default Student;