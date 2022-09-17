import React from "react";
import { Description } from "./Description/Description";
import { Courses } from "./Courses/Courses";
import './programming.css'

export const Programming= () => {
  return (
    <div className="programming">
      <Description />
      <Courses / >
    </div>
  );
};