import { Typography } from "antd";
import style from "./project.module.css";
import { Image } from "antd";
import Link from "next/link";

export default function Project({ name, image, body, link }) {
  const { Title } = Typography;

  return (
    <Link href={link}>
      <div className={style.projectContainer}>
        <p className={style.projectTitle}>{name}</p>

        <div className={style.imageContainer}>
          <img className={style.projectImage} src={image}></img>
        </div>

        <p className={style.projectBody}>
          {body}
        </p>
      </div>
    </Link>
  );
}
