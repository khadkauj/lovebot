import React, { useEffect, useState } from 'react'
import storage, { database } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser_email, selectUser_name, selectUser_photourl, selectUser_uid, Sign_in } from './features/user/userSlice'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core'
import './Imageupload.css'

const Imageupload = () => {



                const [image, setimage] = useState([])
                const [photourl_incase_image_not_supplied, setphotourl_incase_image_not_supplied] = useState('')
                
                const uid = useSelector(selectUser_uid)
                const name = useSelector(selectUser_name)
                const photourl = useSelector(selectUser_photourl)
                const email = useSelector(selectUser_email)

        
            // var photourl_incase_image_not_supplied;
            // for above code to be supplied to below fucntion
        //     // it has to be function


    
    const send_image_to_firestore = (e) => {
                    e.preventDefault();

                    // // Get a reference to the storage service
                    var storage = firebase.storage();

                    // // Create a storage reference from our storage service
                    var storageRef = storage.ref();

                    // in short
                    // var storageRef = firebase.storage().ref();

                    var imageRef = storageRef.child(`${uid}`);

                    imageRef.put(image).then(function(snapshot) {
                        console.log('Uploaded a blob or file!');
                        alert('Photo Uploaded')
                    });

                    //   this name is exactly same as uid of user
                    // it can be helpful in navigatin images of user
                    console.log('image name', imageRef.getDownloadURL())
                    console.log('image name', imageRef.getDownloadURL())                 
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL()) 
                     console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  

                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  

                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  

                    console.log('image name', imageRef.getDownloadURL())  

                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  

                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    console.log('image name', imageRef.getDownloadURL())  
                    // console.log(photourl_incase_image_not_supplied)

                    if (imageRef.name === uid  ) {
                            
                        imageRef.getDownloadURL().then(function(url) {
                            database.collection('people_collection').doc(uid).update({
                                // firebase_insidefield_uid: uid,
                                // people_name: name,
                                people_photo_url:url,
                                // people_email: email
                            })
                        }).catch((error) => alert(error))
                        
                        //   if (photourl === photourl) {
                        //     alert('Image Uploaded')
                        //   }

                            
                        }                                      
    }

    const skip_and_go = (e) => {
        e.preventDefault();

        var storageRef = firebase.storage().ref();
        var imageRef = storageRef.child(`${uid}`);

        imageRef.getDownloadURL().then(function(url) {
            database.collection('people_collection').doc(uid).update({people_photo_url:url})
        }).catch(error => alert(error))
    
    }

        
 
   


    return (
        <div className='imageupload'>

            <div className='imageupload__foot'>
                {/* <p className='imageupload__foot__P'>Don't want to upload or have already uploaded,</p><h4> click </h4> */}
                <Button className='imageupload__foot_button' variant="contained" fontSize='large' onClick={skip_and_go} > <Link to='/' >SKip</Link></Button>
            </div>
            

            <div className='imageupload__name'>
                 <h3> Hi! {name}</h3>
            </div>
            
            <div className='imageupload__inputbuttons'>
                <input  onChange={e => setimage(e.target.files[0])}  type="file" placeholder='Choose your image' />
                    <Button variant="contained"  onClick={send_image_to_firestore} ><Link to='/' >Submit</Link></Button>
            </div>
           
           

        </div>
    )
}

export default Imageupload
