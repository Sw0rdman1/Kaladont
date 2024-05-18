
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../ui/Themed';

interface ScoreProps {
    displayName: string;
    avatar: string;
    score: number;
}

const Score: React.FC<ScoreProps> = ({ avatar, displayName, score }) => {
    return (
        <View style={styles.scoreContainer}>
            <View style={styles.userInfo}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <Text style={styles.name}>{displayName}</Text>
            </View>
            <Text style={styles.score}>{score}</Text>
        </View>
    )
}

interface ScoreDisplayProps {
    currentUser: ScoreProps;
    opponent: ScoreProps;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ currentUser, opponent }) => {
    return (
        <View style={styles.container}>
            <Score avatar={currentUser.avatar} displayName={currentUser.displayName} score={currentUser.score} />
            <Score avatar={opponent.avatar} displayName={opponent.displayName} score={opponent.score} />
        </View>
    )
}

export default ScoreDisplay


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 20,
        marginRight: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    score: {
        fontSize: 32,
        fontWeight: 'bold',
    },
})