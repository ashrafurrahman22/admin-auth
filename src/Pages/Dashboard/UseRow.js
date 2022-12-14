import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const UserRow = ({ user, index,refetch }) => {
    const updateRole = (e)=> {
        e.preventDefault()
        const url = `http://localhost:5000/users/${user.email}`
        const role = e.target.role.value
        // console.log(role);
        
     fetch(url,{
         method:"PATCH",
         headers:{
             "content-type" : "application/json",
             authorization:`bearer ${localStorage.getItem("token")}`
         },
         body:JSON.stringify({role})
     })
     .then(res=>res.json())
     .then(data=>{
        //  console.log(data)
         toast.success("User role updated succesfully")
        })

    }


    const deleteUser = (id)=> {
      console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your order has been deleted.',
            'success'
          )
          fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
            headers:{
              "content-type":"application/json",
              authorization:`bearer ${localStorage.getItem("token")}`
            }
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
  
  
        }
      })
  
    
  
    }

    refetch()
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{user.name}</td>
      <td className="text-center">{user.email}</td>
      <td className="text-center">
      <div className="flex gap-4">
          {
              !user.role ?  <button className="btn btn-xs ">User</button> :  <button className="btn btn-xs ">{user.role}</button>
          }
     
        <form onSubmit={updateRole} action="">
          <select name="role" className="select select-bordered select-xs w-20 max-w-xs">
            <option disabled selected>
              Role
            </option>
            <option value="super">Supper admin</option>
            <option value="admin">Admin</option>
            <option value="modaretor">Modaretor</option>
            <option value="user">User</option>
          </select>
          <button className="btn btn-xs btn-primary ml-2" type="submit">Set role</button>
        </form>
      </div>
      </td>
      <td className="text-center">
       
        <button onClick={()=> deleteUser(user._id)} className="btn btn-xs btn-error ml-2 btn-outline">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;