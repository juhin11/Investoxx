import React, { useState } from 'react';

// create a context to store the user
const UserContext = React.createContext();

// create a provider to store the user
const UserProvider = ({ children }) => {

    // create a state to store the user
    const [user, setUser] = useState(null);
    
    // create a function to update the user
    const updateUser = (user) => {
        setUser(user);
    };
    
    // return the user and the function to update the user
    return (
        <UserContext.Provider value={{ user, updateUser }}>
        {children}
        </UserContext.Provider>
    );
    };

// export the context and the provider
export { UserContext, UserProvider };