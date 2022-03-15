import React from "react"
import { BiCodeAlt } from "react-icons/bi";

const Card = ({ heading, stack, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <h3 className="stack">{stack}</h3>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiCodeAlt size="2.0em" />
        </a>
      </div>
    </div>
  )
}

export default Card
