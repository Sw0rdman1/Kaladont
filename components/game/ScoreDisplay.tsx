
import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import Avatar from '../ui/Avatar';

interface ScoreProps {
    displayName: string;
    avatar: string;
    score: number;
}

const Score: React.FC<ScoreProps> = ({ avatar, displayName, score }) => {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme ?? 'light'].background2

    return (
        <View style={[styles.scoreContainer, { backgroundColor }]}>
            <View style={[styles.userInfo, { backgroundColor }]}>
                <Avatar url={avatar} size={35} />
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
        paddingHorizontal: 12,
        paddingVertical: 8,
        gap: 16,
        borderRadius: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    score: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})