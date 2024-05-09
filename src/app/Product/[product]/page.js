'use client'
import React from "react";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>motoral</h1>
      <h3>Name: {params.product}</h3>
    </div>
  );
};

export default Student;