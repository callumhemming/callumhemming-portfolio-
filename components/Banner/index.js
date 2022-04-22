import style from "./Banner.module.css"

export default function Banner({title, id}){


    return(
        <>
        <div id={id} className={style.bannerContainer}>
            {title}
        </div>
        </>
    )
}