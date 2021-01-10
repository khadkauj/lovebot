import React, { useEffect, useState } from 'react'
import './TinderCard.css'
import {database, Storage} from './firebase'
import TinderCard from 'react-tinder-card'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser_uid } from './features/user/userSlice'

const TinderCards = () => {

    const uid = useSelector(selectUser_uid)

    const [people, setpeople] = useState([])
    

    // useEffect(() => {
       

        database.collection('people_collection').onSnapshot(snapshot =>
            setpeople(snapshot.docs.map(doc =>(        
                {
                    firebase_id : doc.UID,
                    name: doc.data().people_name,
                    picurl: doc.data().people_photo_url

                }
            ))))


    // }, [])
   


    return (
        <div className='TinderCard'>
        <div className='tinder__card'>
            
                {people.map(person => 
                   
                    (
                        <TinderCard  key={person.name} preventSwipe={['', '']} className='swipe'  >
                            <div style={{ backgroundImage: `url(${person.picurl})` }} className='card'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                        
                    
                    ) )}
        
         </div>

        
        </div>
    )
}

export default TinderCards