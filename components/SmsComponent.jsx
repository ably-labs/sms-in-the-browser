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
    return (<div key={index} className={styles.message}>{message.data.text}</div>);
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatText}>
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>
    </div>
  )
}

export default SmsComponent;