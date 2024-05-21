import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../ui/Themed'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


interface ActionProps {
    title: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
}

const Action: React.FC<ActionProps> = ({ title, icon }) => {
    const colorScheme = useColorScheme();
    const iconColor = Colors[colorScheme ?? 'light'].tint

    return (
        <TouchableOpacity style={styles.actionContainer}>
            <View style={styles.leftContainer}>
                <FontAwesome name={icon} size={28} color={iconColor} />
                <Text style={styles.actionText}>{title}</Text>
            </View>
            <FontAwesome name="chevron-right" size={18} color={iconColor} />
        </TouchableOpacity>

    )
}

const UserProfileActions = () => {
    const actions: ActionProps[] = [
        { title: 'Edit Profile', icon: 'edit' },
        { title: 'Change Password', icon: 'key' },
        { title: 'Logout', icon: 'sign-out' },
    ]

    return (
        <View style={styles.container}>
            {actions.map((action, index) => (
                <Action key={index} title={action.title} icon={action.icon} />
            ))}
        </View>
    )
}

export default UserProfileActions

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 40,
        marginHorizontal: 20,
        marginTop: 30,
    },
    actionContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    actionText: {
        fontSize: 20,
        fontWeight: '500',
    }

})