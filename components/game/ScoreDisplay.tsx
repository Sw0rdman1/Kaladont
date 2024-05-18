
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../ui/Themed';

interface ScoreProps {
    avatar: string;
    name: string;
    score: number;
}

const Score: React.FC<ScoreProps> = ({ avatar, name, score }) => {
    return (
        <View style={styles.scoreContainer}>
            <View style={styles.userInfo}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.score}>{score}</Text>
        </View>
    )
}

interface ScoreDisplayProps {
    user1: ScoreProps;
    user2: ScoreProps;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ user1, user2 }) => {
    return (
        <View style={styles.container}>
            <Score avatar={user1.avatar} name={user1.name} score={user1.score} />
            <Score avatar={user2.avatar} name={user2.name} score={user2.score} />
        </View>
    )
}

export default ScoreDisplay


const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
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