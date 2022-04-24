import { ReactElement } from "react";
import { Switch } from "antd";
import style from "./ContactMeForm.module.css";
import { useState } from "react";
import Banner from "../Banner"
import {message as antdMessage} from "antd"

interface Data {
  subject: string;
  name: string;
  email: string;
  message: string;
  sendCopy: boolean;
}

export default function ContactMe(): ReactElement {


  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  
  function postEmailData() {
    const data: Data = {
      name,
      email,
      subject,
      message,
      sendCopy,
    };

    fetch("/api/contactme", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    console.log("Response succeeded!");
    antdMessage.success("Message sent!")
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
  }

  return (
    <>
      <div className={style.container}>
      <Banner id="contactMe" title="Contact Me"/>
        <p className={style.title}>Feel free to send me an email with this form!</p>
        <form className={style.form}>
          <input
            value={subject}
            placeholder="Subject"
            onChange={({ target }) => setSubject(() => target.value)}
            className={style.subject}
            
          />
          <input
            value={name}
            placeholder="Name"
            onChange={({ target }) => setName(() => target.value)}
            className={style.name}
          />

          <input
            value={email}
            placeholder="Email"
            type="email"
            required={true}
            onChange={({ target }) => setEmail(() => target.value)}
            className={style.email}
          />
          
          <textarea
            value={message}
            placeholder="Message"
            onChange={({ target }) => setMessage(() => target.value)}
            className={style.message}
          />
          
         
<div className={style.switch}>
<p>Email a copy of your message?</p>
          <Switch
          
            onChange={checked => setSendCopy(checked)}
            defaultChecked={false}
          />
</div>
          
          <button type="submit"
            className={style.submit}
            onClick={e => {
              e.preventDefault();
              postEmailData();
            }}
          >
            Send me a message!
          </button>
        </form>
      </div>
    </>
  );
}
