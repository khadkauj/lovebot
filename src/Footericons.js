import { IconButton } from '@material-ui/core'
import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import RefreshIcon from '@material-ui/icons/Refresh';
import './Footericons.css'


const Footericons = () => {
    return (
        <div className='footericon'>
            <IconButton className='footericon_icon_one'> <RefreshIcon fontSize='large'/>  </IconButton>
            {/* Place a conditin here such that the dark fillled
            loveicon appears insted of white filled icon, showing
            whteher you already liekd it  */}
            <IconButton className='footericon_icon_two'> <FavoriteBorderIcon fontSize='large' /> </IconButton>
            
            <IconButton className='footericon_icon_three'><FlashOnIcon fontSize='large' />  </IconButton>
        </div>
    )
}

export default Footericons
