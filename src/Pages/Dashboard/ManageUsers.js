import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const ManageUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res =>res.json())
    .then(data => setUsers(data))
  },[users])

  return (
    <div>
        <div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
    {
          users.map(user=> <SingleUser
          key={user._id}
          user={user}
          ></SingleUser> )
        }
    </tbody>
  </table>
</div>
        </div>
        
    </div>
  );
};

export default ManageUsers;