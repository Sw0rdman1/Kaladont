import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Text, View } from '../ui/Themed';
import { checkIfWordExists } from '@/utils/wordCheck';

interface Props {
    newWordHandler: (word: string) => void
    lastWord: string
}

const WordInput: React.FC<Props> = ({ newWordHandler, lastWord }) => {
    const lastTwoLetters = lastWord.slice(-2)
    const [word, setWord] = useState('')
    const colorScheme = useColorScheme();
    const [error, setError] = useState<string | null>(null)

    const disabled = word.trim().length < 3

    const borderColor = error ? 'red' : 'gray'
    const iconColor = error ? 'red' : disabled ? "gray" : Colors[colorScheme ?? 'light'].tint


    useEffect(() => {
        setWord(lastTwoLetters)
    }, [lastTwoLetters])

    const handleInputChange = (text: string) => {
        setError(null)

        if (text.slice(0, 2) === lastTwoLetters) {
            setWord(text)
        } else {
            setWord(lastTwoLetters + text.slice(2))
        }
    }

    const handleSubmit = () => {
        if (word.length < 3) return

        if (!checkIfWordExists(word.toLowerCase())) {
            setError('Uneta reč ne postoji!')
            console.log('Word does not exist')
            return
        }

        newWordHandler(word)
        setWord(lastTwoLetters)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{error}</Text>

            <View style={[styles.inputContainer, { borderColor }]}>
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
                    <FontAwesome name="paper-plane" size={24} color={iconColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WordInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: 120,
    },
    inputContainer: {
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
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
    },
    errorMessage: {
        color: 'red',
        marginBottom: 5,
        fontSize: 18,
        height: 30,
    }
})
