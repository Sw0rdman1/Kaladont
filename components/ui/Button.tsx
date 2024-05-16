import { TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "./Themed"
import Colors from "@/constants/Colors"
import { useColorScheme } from '@/components/useColorScheme';

interface ButtonProps {
    title: string
    onPress: () => void
    color?: string
}

const Button: React.FC<ButtonProps> = ({ title, onPress, color }) => {
    const colorScheme = useColorScheme();

    const backgroundColor = color || Colors[colorScheme ?? 'light'].tint

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})