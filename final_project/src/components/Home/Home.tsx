import React from 'react';
import { makeStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { server_calls } from '../../api';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    main:{
        color: 'rgb(230,92,23)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(0,212,255,1) 100%)',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
    },
    button:{
        backgroundColor: 'white',
        margin: '50px',
        padding: '10px',
        border: '2px',
        borderColor: 'rgb(82, 38, 135)',
        fontSize: '1em',
    },
    logo:{
        color: 'white',
        fontSize: '3em',
        textShadow: '0 0 20px #eee',
    },
    downloadme:{
        backgroundColor: 'gray',
        margin: '2em'
    },
    text:{
        color: 'white',
    },
    buttontext:{
        color: 'black',
    },
    footer:{
        color: 'rgb(116, 23, 230)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100px',
    },
    socials:{
        color: 'white',
    },
    bottom:{
        marginTop: '4em',
    },
    btnGrad:{
        backgroundImage: 'linearGradient(to right, #232526 0%, #414345  51%, #232526  100%)',
        margin: '20px',
        padding: '0px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'black',            
        boxShadow: '0 0 20px #eee',
        borderRadius: '10px',
        display: 'block',
    },
    // btnGrad:hover:{
    //    backgroundPosition: 'right center', /* change the direction of the change here */
    //    color: '#fff',
    //    textDecoration: 'none',
    // },
    
})

let getTestData = () => {
    console.log(server_calls.getdata('yee'))
    console.log('Now I am here')
    console.count()
}

export const Home = () => {
    const classes = useStyles();

    const instagram = <FontAwesomeIcon icon={["fab", "instagram"]}/>



    
    return (
        <div className={classes.main}>
            <h1 className={`${classes.logo}`}>Download Flask Template</h1>
            <div className={`${classes.bottom}`}></div>
            <button className={`${classes.btnGrad}`} onClick={getTestData}>
                <p className={`${classes.btnGrad}`}>Make A Website!</p>
            </button>
            <div className={`${classes.bottom}`}></div>
            <p className={`${classes.text}`}>The button gives you a website. You just need to download it and give it some content.</p>
            <div className={`${classes.bottom}`}>
                <div className={`${classes.socials}`}>
                    <a href="github.com/brandonapol" className={`${classes.text}`}>My Github</a>
                </div>
                <div className={`${classes.socials}`}>
                    <a href="https://brandonapol.github.io/personal_website/" className={`${classes.text}`}>About Me</a>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
    const classes = useStyles();

    return (
    <footer className={`${classes.footer}`}>
        <div className={`${classes.socials}`}>
            <a href="instagram.com/brandonapol"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
        </div>
    </footer>
    )
}