import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface Props {
    words: string[]
}

const WordsDisplay: React.FC<Props> = ({ words }) => {
    const colorScheme = useColorScheme();

    const mainColor = Colors[colorScheme ?? 'light'].tint
    const secondaryColor = Colors[colorScheme ?? 'light'].text


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reči</Text>
            <View style={styles.separator} />

            <Text style={[styles.lastWord, { color: mainColor }]}>
                {words[0].slice(0, -2)}
                <Text style={{ fontWeight: '800', color: mainColor }}>{words[0].slice(-2)}</Text>
            </Text>

            {words.slice(1).map((word, index) => (
                <Text
                    key={index}
                    style={[styles.word, { fontSize: 26 - (index + 1) * 3, color: secondaryColor }]}
                >
                    {word}
                </Text>
            ))}

        </View>
    )
}

export default WordsDisplay

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        marginHorizontal: 30,
        flex: 1,
        marginTop: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    separator: {
        marginBottom: 30,
        height: 1,
        width: '80%',
    },
    lastWord: {
        fontSize: 40,
        fontWeight: '500',
        marginBottom: 20,
    },
    word: {
        marginBottom: 10,
        fontWeight: '400',
    }

})