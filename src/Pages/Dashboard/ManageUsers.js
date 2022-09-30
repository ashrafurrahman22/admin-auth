import React, { useEffect } from 'react';
import { useState } from 'react';

const ManageUsers = () => {


  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  console.log(users)

  return (
    <div>
      <h2>This is Users</h2>
      {/* {
        users.map(user => <div>
          <h2>{user.email}</h2>
        </div> )
      } */}
    </div>
  );
};

export default ManageUsers;