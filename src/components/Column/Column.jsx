import React from "react";
import styles from "../Column/Column.module.css";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

// Correcting the usage of PUBLIC_URL
const icons = {
  Done: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Done.svg`}
      alt="Done"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  "In progress": (
    <img
      src={`${process.env.PUBLIC_URL}/icons/in-progress.svg`}
      alt="In progress"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Canceled: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Cancelled.svg`}
      alt="Canceled"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Todo: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/To-do.svg`}
      alt="To-do"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Backlog: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Backlog.svg`}
      alt="Backlog"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  "No priority": (
    <img
      src={`${process.env.PUBLIC_URL}/icons/No-priority.svg`}
      alt="No priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Low: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - Low Priority.svg`}
      alt="Low Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Medium: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - Medium Priority.svg`}
      alt="Medium Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  High: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/Img - High Priority.svg`}
      alt="High Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
  Urgent: (
    <img
      src={`${process.env.PUBLIC_URL}/icons/SVG - Urgent Priority grey.svg`}
      alt="Urgent Priority"
      style={{ width: "20px", height: "20px" }}
    />
  ),
};

const Column = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping === "user" ? (
            <AvatarWithStatus
              statusColor={"green"}
              grouping={grouping}
              indashBoard
            />
          ) : (
            icons[title]
          )}
        </div>
        <div className={styles.name_label}>
          <h5>{title}</h5>
          <h5 className="heading">{tickets.length}</h5>
        </div>
        <div>
          <GoPlus />
          <BsThreeDots />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets.map((ticket, i) => (
          <FeatureRequestCard
            key={i}
            id={ticket.id}
            tag={ticket.tag.join("")}
            title={ticket.title}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
