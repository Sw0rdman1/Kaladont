import { createContext, useContext, useState } from 'react';

// Define the shape of the user object
interface User {
    id: number;
    displayName: string;
    email: string;
    avatar: string;
}

// Create the app context
export const AppContext = createContext<User | null>(null);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // Set the initial user state
    const [user, setUser] = useState<User | null>({
        id: 1,
        displayName: 'Bozidar',
        email: 'vujasinovic2019@gmail.com',
        avatar: 'https://jmrmolshsmmyxcivsxxv.supabase.co/storage/v1/object/sign/avatars/WhatsApp%20Image%202024-02-07%20at%2000.19.24.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL1doYXRzQXBwIEltYWdlIDIwMjQtMDItMDcgYXQgMDAuMTkuMjQuanBlZyIsImlhdCI6MTcxNjA1Nzg3NSwiZXhwIjoxNzQ3NTkzODc1fQ.Y65iuGQe9k9ViPuvr40NKa3_i2FKniNGVSLsz3_4RSE&t=2024-05-18T18%3A44%3A35.973Z',
    });

    return (
        <AppContext.Provider value={user}>
            {children}
        </AppContext.Provider>
    );
};

// Define a custom hook to access the user object

export const useUser = () => {
    const user = useContext(AppContext);
    if (!user) {
        throw new Error('useUser must be used within an AppProvider');
    }
    return user;
};