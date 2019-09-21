 import React, { useState } from 'react';

 function UserForm(){
     const [firstName, setFirsrtName] = useState('')
     const [lastName, setLastName] = useState('')

     const submitHandler = e =>{
         e.preventDefault()
         alert('Hello ${firstName} ${lastName}')
     }
     return(
         <div>
             <form onSubmit={submitHandler}>
                 <div>
                    <label>First Name</label>
                    <input type="text"  
                      value={firstName} 
                      onChange={e => setFirsrtName(e.target.value)} />
                 </div>
                 <div>
                     <label>Last Name</label>
                     <input type="text" value={lastName} 
                     onChange={e => setLastName(e.target.valus)} />
                 </div>
                 <button>Sumbit</button>
             </form>
         </div>
     ) 
 }

 export default UserForm;