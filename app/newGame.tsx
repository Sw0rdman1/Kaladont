import WordInput from '@/components/game/WordInput';
import WordsDisplay from '@/components/game/WordsDisplay';
import { KeyboardAvoidingView, Text, View } from '@/components/ui/Themed';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';


export default function ModalScreen() {

  const [words, setWords] = useState<string[]>([])

  const newWordHandler = (word: string) => {
    if (!word) return;
    setWords([word, ...words.slice(0, 4)]);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <WordsDisplay words={words} />
      <WordInput newWordHandler={newWordHandler} />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
