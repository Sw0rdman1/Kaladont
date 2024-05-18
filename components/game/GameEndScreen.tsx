import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed';
import Button from '../ui/Button';

interface GameEndScreenProps {
    errorMessage: string;
    resetGameHandler: () => void;
}

const GameEndScreen: React.FC<GameEndScreenProps> = ({ errorMessage, resetGameHandler }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nažalost igra je završena</Text>
            <Text style={styles.erorr}>{errorMessage}</Text>

            <Text style={styles.smiley}>🥺</Text>
            <Button title="Igraj ponovo" onPress={resetGameHandler} />

        </View>
    )
}

export default GameEndScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        gap: 15
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
    },
    erorr: {
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 30

    },
    smiley: {
        fontSize: 80,
        marginBottom: 30
    },
})