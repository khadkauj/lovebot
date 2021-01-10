import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import {database} from './firebase'


const Chatboxes = () => {

    const [messages_from_firestore, setmessages_from_firestore] = useState([])

 



    return (
        <div>
            <Chat />
            <Chat />

            <Chat />
            <Chat />
            <Chat />

        </div>
    )
}

export default Chatboxes
