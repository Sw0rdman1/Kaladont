import OnlineUsers from '@/components/home/OnlineUsers';
import Button from '@/components/ui/Button';
import { Text, View } from '@/components/ui/Themed';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Link href="/newGame" asChild>
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
