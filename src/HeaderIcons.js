import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { IconButton } from '@material-ui/core';
import './HeaderIcon.css'
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDispatch } from 'react-redux';
import { Sign_out } from './features/user/userSlice';

const HeaderIcons = ({backarrow_prop}) => {

    const dispatch = useDispatch()

    const sign_out = (e) => {
        

        dispatch(Sign_out());

    }






    return (
        <div className='header'>

           {backarrow_prop ?
                    // <Link to ='/'>   </Link>
               ( <Link to ='/after_signin_and_imageupload'><IconButton className="header__icon"><ArrowBackIosIcon fontSize='large'></ArrowBackIosIcon> </IconButton></Link>):
               (<Link to ='/'><IconButton className="header__icon"><AccountCircleIcon onClick={sign_out} fontSize='large' /></IconButton></Link>)}
       
                <Link to ='/after_signin_and_imageupload'><IconButton className="header__icon"><img className='header_icon_img' src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4788.png' alt='' /></IconButton> </Link>
                {/* // <Link to='/chats'> </Link> */}
                <Link to='/chats'><IconButton className="header__icon" ><ChatBubbleIcon fontSize='large' /></IconButton></Link>
        </div>
    )
}

export default HeaderIcons
