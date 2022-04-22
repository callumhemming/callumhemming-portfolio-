import projectsData from "./projectsData";
import Project from "../Project";
import style from "./Projects.module.css";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

// justify-content: space-evenly;
// align-items: flex-start;

export default function Projects() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [projectsLayout, setProjectsLayout] = useState("");

  useEffect(() => {
    setProjectsLayout(() =>
      isTabletOrMobile
        ? `
        flex-direction:column;
        justify-content:center;
        align-items:center;
       `
        : `justify-content: space-evenly;
align-items: flex-start;`
    );
  }, [isTabletOrMobile]);

  return (
    <>
      <style jsx>{`
      .layout{
          ${projectsLayout}
      }
      `}</style>

      <div className={style.projectsContainer + " " + "layout"}>
        {projectsData.map(({ name, link, body, image }) => (
          <Project key={uuid()} name={name} link={link} body={body} image={image} />
        ))}
      </div>
    </>
  );
}
