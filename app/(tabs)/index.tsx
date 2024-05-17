import OnlineUsers from '@/components/home/OnlineUsers';
import Button from '@/components/ui/Button';
import { Text, View } from '@/components/ui/Themed';
import { StyleSheet } from 'react-native';


export default function TabOneScreen() {
  const startGameHandler = () => {
    console.log('startGameHandler')
  }

  return (
    <View style={styles.container}>
      <Button title="Započni novu igru" onPress={startGameHandler} />
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
