import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const JoinedClasses = ({ classData }) => {
  return (
    <li className="joined__list">
      <div className="joined__imgWrapper" />
      <div className="joined__image" />
      <div className="joined__content">
        <Link className="joined__title" to={`/${classData.id}`}>
          <h2>{classData.className}</h2>
        </Link>
        <p className="joined__owner">Classroom created by: {classData.owner}</p>
      </div>
    </li>
  );
};

export default JoinedClasses;
