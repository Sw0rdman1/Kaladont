import { possibleTime } from '@/app/(tabs)';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Text, View } from '../ui/Themed';


interface Props {
    isSelected: boolean;
    time: typeof possibleTime;
    handleTimeSelect: (time: typeof possibleTime) => void;
}

const TimeContainer: React.FC<Props> = ({ isSelected, time, handleTimeSelect }) => {
    const colorScheme = useColorScheme();
    const backgroundColor = isSelected ? Colors[colorScheme ?? 'light'].tint : "lightgrey"
    const textColor = isSelected ? 'white' : 'black';

    const handlePress = () => {
        handleTimeSelect(time);
    }


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, { backgroundColor }]}
            onPress={handlePress}
        >
            <Text style={[styles.text, { color: textColor }]}>
                {`${time}s`}
            </Text>
        </TouchableOpacity>
    );
}


type TimeSelectProps = {
    selectedTime: typeof possibleTime;
    setSelectedTime: (time: typeof possibleTime) => void;
};

const TimeSelect: React.FC<TimeSelectProps> = ({ selectedTime, setSelectedTime }) => {

    const handleTimeSelect = (time: typeof possibleTime) => {
        setSelectedTime(time);
    };

    const possibleTimes: Array<typeof possibleTime> = [15, 30, 45];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Izaberite dužinu poteza:</Text>
            <View style={styles.buttonContainer}>
                {possibleTimes.map((time, index) => (
                    <TimeContainer
                        key={index}
                        isSelected={selectedTime === time}
                        time={time}
                        handleTimeSelect={handleTimeSelect}
                    />
                ))}
            </View>
        </View>

    );
};

export default TimeSelect;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        gap: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    button: {
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
    },

});

