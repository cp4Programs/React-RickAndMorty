import { useState, createContext } from 'react';
export const UserContext = createContext();


export default function UserContextProvider(props) {
    const [userName, setUserName] = useState('Carlo')

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {props.children}
        </UserContext.Provider>
    )

}