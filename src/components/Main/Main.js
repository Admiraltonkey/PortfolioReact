import React from 'react';
import styles from './Main.module.css';
import Fade from 'react-reveal/Fade'


function Main() {
    return (
        <div id="Main" className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <Fade left>
                        <span>Hi There</span>
                        <span className={styles.name}>I am Dmitry <span> Vorontsov </span></span>
                        <h1>A Front-end developer</h1>
                    </Fade>
                </div>

                    <div className={styles.photo}>
                        <div className={styles.image}/>
                    </div>

            </div>
        </div>
    );
}

export default Main;
