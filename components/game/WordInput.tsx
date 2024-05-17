import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { View } from '../ui/Themed';

interface Props {
    newWordHandler: (word: string) => void
}

const WordInput: React.FC<Props> = ({ newWordHandler }) => {
    const [word, setWord] = useState('')
    const colorScheme = useColorScheme();

    const disabled = word.trim().length === 0

    const handleInputChange = (text: string) => {
        setWord(text.trim())
    }

    const handleSubmit = () => {
        if (!word) return
        newWordHandler(word)
        setWord('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, { color: Colors[colorScheme ?? 'light'].text }]}
                value={word}
                onChangeText={handleInputChange}
                placeholder="Enter a word"
                placeholderTextColor="gray"
                autoCapitalize="characters"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity disabled={disabled} style={styles.button} onPress={handleSubmit}>
                <FontAwesome name="paper-plane" size={24} color={disabled ? "gray" : Colors[colorScheme ?? 'light'].tint} />
            </TouchableOpacity>
        </View>
    )
}

export default WordInput

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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