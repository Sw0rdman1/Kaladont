import { TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { Text } from "./Themed"
import Colors from "@/constants/Colors"
import { useColorScheme } from '@/components/useColorScheme';
import { forwardRef } from "react";

interface ButtonProps {
    title: string
    onPress?: () => void
    color?: string
}

const Button: React.FC<ButtonProps> = forwardRef(({ title, onPress, color }, ref) => {
    const colorScheme = useColorScheme();

    const backgroundColor = color || Colors[colorScheme ?? 'light'].tint

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
})

export default Button

const styles = StyleSheet.create({
    button: {
        width: 270,
        height: 53,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})