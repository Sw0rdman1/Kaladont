import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { View } from '../ui/Themed';

const WordInput = () => {
    const [word, setWord] = useState('')
    const colorScheme = useColorScheme();

    const handleInputChange = (text: string) => {
        setWord(text.trim())
    }

    const handleSubmit = () => {
        // Handle submit logic here
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, { color: Colors[colorScheme ?? 'light'].text }]}
                value={word}
                onChangeText={handleInputChange}
                placeholder="Enter a word"
                placeholderTextColor="gray"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <FontAwesome name="paper-plane" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            </TouchableOpacity>
        </View>
    )
}

export default WordInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        borderRadius: 20,
    },
    input: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
    },
    button: {
        marginRight: 5,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }
})