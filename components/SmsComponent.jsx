import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './SmsComponent.module.css';

const SmsComponent = () => {

  let messageEnd = null;

  const [receivedMessages, setMessages] = useState([]);

  const [channel, ably] = useChannel("sms-notifications", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const messages = receivedMessages.map((message, index) => {
    console.log(message);
    let from = [message.data.from.slice(0, 2) + " " + message.data.from.slice(2, 6) +  " " + message.data.from.slice(6, 9) + " "+ message.data.from.slice(9)];
    let date = new Date(message.data.timestamp);
    let day = date.toDateString().replace(/^\S+\s/,'');
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <div key={index} className={styles.message}>
        <span className={styles.from}>{from}</span>
        <span className={styles.when}>{day}, {time}</span>
        <span className={styles.text}>{message.data.text}</span>
      </div>
    );
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={styles.chatHolder}>
      <h1 className={styles.title}>Text Messages</h1>
      <div className={styles.chatText}>
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>
    </div>
  )
}

export default SmsComponent;