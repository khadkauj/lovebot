import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import './Footericons.css'
import { Link } from 'react-router-dom';


const Footericons = () => {

    const [love, setlove] = useState('')

    const love_red_fill = (e) => {

        e.preventDefault();

        setlove(!love)
    }




    return (
        <div className='footericon'>
            <IconButton className='footericon_icon_one'> <RefreshIcon fontSize='large'/>  </IconButton>
            {/* Place a conditin here such that the dark fillled
            loveicon appears insted of white filled icon, showing
            whteher you already liekd it  */}

            {!love ? 
                (<IconButton onClick={love_red_fill} className='footericon_icon_two'> <FavoriteBorderIcon  fontSize='large' /> </IconButton>)
                    :
                (<IconButton onClick={love_red_fill} className='footericon_icon_two'> <FavoriteRoundedIcon  fontSize='large' /> </IconButton>)
            }
            
            <Link to='/imageupload'><IconButton className='footericon_icon_three'><AddAPhotoIcon fontSize='large' />  </IconButton></Link>
        </div>
    )
}

export default Footericons
