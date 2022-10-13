import React from 'react';
import { toast } from 'react-toastify';

const SingleUser = ({user}) => {

    
    // delete
    const handleDelete = id =>{
        const procede = window.confirm('Are You Sure?');
        if(procede){
          const url = `http://localhost:5000/users/${id}`
          fetch(url, {
            method : "DELETE"
          })
          .then(res => {
              res.json()
            toast.success("Successfully deleted")
            })
          .then(data => {
            console.log(data)
          })
        }
      }

    return (
            <tr>
        <td>{user.email}</td>
        <td>{user.role ? user.role : "user" }</td>
      </tr>
    );
};

export default SingleUser;