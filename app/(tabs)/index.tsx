import OnlineUsers from '@/components/home/OnlineUsers';
import TimeSelect from '@/components/home/TimeSelect';
import Button from '@/components/ui/Button';
import { Text, View } from '@/components/ui/Themed';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export const possibleTime: 15 | 30 | 45 = 15;


export default function TabOneScreen() {
  const [selectedTime, setSelectedTime] = useState<typeof possibleTime>(possibleTime);


  return (
    <View style={styles.container}>
      <TimeSelect selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <Link
        href={{
          pathname: "newGame/[time]",
          params: { time: selectedTime }
        }}
        asChild
      >
        <Button title="Započni novu igru" />
      </Link>
      <OnlineUsers />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
