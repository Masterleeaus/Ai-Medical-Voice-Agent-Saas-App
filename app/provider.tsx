"use client"


import React, { useEffect } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';


export type UserDetail= {  email: string;
  name: string;
    credit: number;
}

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const { user } = useUser();
    const [userDetail, setUserDetail] = React.useState<any>();

    useEffect(() => {
      // Check if the user exists, if not create a new user
      user && CreateNewUser();
    }, [user]);


    const CreateNewUser = async () => {
      // Function to create a new user
      const result = await axios.post('/api/users');
      console.log(result.data);
      setUserDetail(result.data);
    }
  return (

    <div>
    <UserDetailContext.Provider  value={{userDetail, setUserDetail}}>

      {children}
    </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
