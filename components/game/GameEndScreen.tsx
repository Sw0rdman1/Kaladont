import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed';

interface GameEndScreenProps {
    errorMessage: string;
}

const GameEndScreen: React.FC<GameEndScreenProps> = ({ errorMessage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{errorMessage}</Text>
        </View>
    )
}

export default GameEndScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})