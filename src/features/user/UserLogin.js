import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import './Userlogin.css'
import  {database, auth, provider}  from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser_email, selectUser_name, selectUser_photourl, selectUser_uid, Sign_in } from './userSlice'
import firebase from 'firebase'
import { Link } from 'react-router-dom'


const UserLogin = () => {

  const dispatch = useDispatch();




  const signin_function = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider)
      .then(result_we_get =>{dispatch(Sign_in({
        uid_google: result_we_get.user.uid,
        name_google: result_we_get.user.displayName,
        photourl_google: result_we_get.user.photoURL,
        email_google: result_we_get.user.email
      }));
        database.collection('people_collection').doc( result_we_get.user.uid).set({
            firebase_insidefield_uid: result_we_get.user.uid,
            people_name: result_we_get.user.displayName,
            // people_photo_url:result_we_get.user.photoURL,
            people_email:  result_we_get.user.email
        });console.log(result_we_get.user)
    }).catch(error => alert(error))
      

  

  }





  return (
    <div className='userlogin'>
   
      <Button onClick={signin_function} variant="contained" color="secondary"> Sign In With Google</Button>
    </div>
  )
}

export default UserLogin















































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={e => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() =>
//             dispatch(incrementByAmount(Number(incrementAmount) || 0))
//           }
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
//         >
//           Add Async
//         </button>
//       </div>
//     </div>
//   );
// }
