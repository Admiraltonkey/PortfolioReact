import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle/BlockTitle";
import Fade from 'react-reveal/Fade';



function Contacts() {
    return (

        <div  id="Contact" className={styles.contacts}>
            <Fade bottom>
                <div className={styles.container}>
                    <BlockTitle title={"Contact"}/>
                    <form className={styles.formWrapper}>
                        <input className={styles.formArea} placeholder="Name" type="text"></input>
                        <input className={styles.formArea} placeholder="e-mail" type="email"></input>
                        <textarea className={styles.messageArea} placeholder="Your message"></textarea>
                        <button className={styles.btnSubmit} type="submit">Send</button>
                    </form>
                </div>
            </Fade>
        </div>

    );
}

export default Contacts;
