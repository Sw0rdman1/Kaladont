import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { View } from '../ui/Themed';

interface Props {
    newWordHandler: (word: string) => void
    lastWord: string
}

const WordInput: React.FC<Props> = ({ newWordHandler, lastWord }) => {
    const lastTwoLetters = lastWord.slice(-2)
    const [word, setWord] = useState('')
    const colorScheme = useColorScheme();

    const disabled = word.trim().length === 0

    useEffect(() => {
        setWord(lastTwoLetters)
    }, [lastTwoLetters])

    const handleInputChange = (text: string) => {
        // Ensure the first two letters are always the same
        if (text.slice(0, 2) === lastTwoLetters) {
            setWord(text)
        } else {
            setWord(lastTwoLetters + text.slice(2))
        }
    }

    const handleSubmit = () => {
        if (word.length < 3) return
        newWordHandler(word)
        setWord(lastTwoLetters)
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
                selection={{ start: word.length, end: word.length }}  // Ensure the cursor is at the end
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
