import { useEffect, useState } from "react"

const useAdmin = user => {
   const [admin, setAdmin] = useState();
   useEffect(() => {
      const email = user?.email;
      if (email) {
         fetch(`https://immense-badlands-11889.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {
               'content-type': 'application/json',
               authoruzation: `Bearer ${localStorage.getItem('accessToken')}`

            },
         })
            .then(res => res.json())
            .then(data => {

               setAdmin(data.admin);
            })
      }
   }, [user])
   return (admin)
}

export default useAdmin;