import { Text, View } from "../ui/Themed"
import { StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";

const OnlineUsers = () => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme ?? 'light'].tint

    const [onlineUsers, setOnlineUsers] = useState(0)

    useEffect(() => {
        setOnlineUsers(Math.floor(Math.random() * (100 - 2 + 1)) + 2);
    }, [])

    return (
        <View style={styles.container}>
            <FontAwesome name="globe" size={18} color={color} style={{ marginRight: 5 }} />
            <Text style={[styles.text, { color, fontWeight: "700" }]}>
                {onlineUsers}
            </Text>
            <Text style={styles.text}>online korisnika</Text>
        </View>
    )
}

export default OnlineUsers

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginRight: 4,
    }
})