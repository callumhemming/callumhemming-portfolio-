import Head from 'next/head'
// import style from"./index.module.css"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import {Slider, Image} from "antd"
export default function Home() {
  return (
    <>
<Slider />
<Image width = "32%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    
    </>

  )
}
