import React from 'react';
import styles from './Project.module.css';



    function Project(props) {
        return (
            <div className={styles.projects}>
                <div className={styles.projectImg} style={props.style}><p>Front-end Developer (React.js)</p></div>
                <div className={styles.projectTitle}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.btn}>
                <a className={styles.btnShowCode} href={props.href}><span className={styles.btnTitle} >View project</span></a>
                <a className={styles.btnShow} href="https://github.com/Admiraltonkey/"><span className={styles.btnTitle}>View code</span></a>
                </div>
            </div>
        );
    }


export default Project;

