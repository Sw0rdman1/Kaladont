import { StyleSheet } from 'react-native'
import Avatar from '../ui/Avatar'
import { Text, View } from '../ui/Themed'
import { useUser } from '@/context/AppContext';

const UserInformations = () => {
    const currentUser = useUser();
    return (
        <View style={styles.userInformationContainer}>
            <Avatar url={currentUser.avatar} size={120} />
            <View style={styles.userTextContainer}>
                <Text style={styles.displayName}>{currentUser.displayName}</Text>
                <Text style={styles.email}>{currentUser.email}</Text>
            </View>
        </View>
    )
}

export default UserInformations

const styles = StyleSheet.create({
    userInformationContainer: {
        alignItems: 'center',
        gap: 25,
    },
    userTextContainer: {
        alignItems: 'center',
        gap: 5,
    },
    displayName: {
        fontSize: 30,
        fontWeight: '600',
    },
    email: {
        fontSize: 16,
        fontWeight: '400',
    },
})