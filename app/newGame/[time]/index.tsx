import GameEndScreen from '@/components/game/GameEndScreen';
import Timer from '@/components/game/Timer';
import WordInput from '@/components/game/WordInput';
import WordsDisplay from '@/components/game/WordsDisplay';
import { KeyboardAvoidingView, Text, View } from '@/components/ui/Themed';
import { generateRandomWord } from '@/utils/wordUtils';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';


export default function NewGameScreen() {
  const { time } = useLocalSearchParams<{ time: string }>();
  const firstWord = generateRandomWord().toUpperCase()
  const [words, setWords] = useState<string[]>([firstWord]);
  const lastWord = words[0]
  const [timeLeft, setTimeLeft] = useState(parseInt(time ?? '30'))
  const [error, setError] = useState<string | null>(null)

  const resetTimer = () => {
    setTimeLeft(parseInt(time ?? '30'))
  }

  const newWordHandler = (word: string) => {
    if (!word) return;
    setWords([word, ...words.slice(0, 4)]);
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {error ?
        <GameEndScreen errorMessage={error} />
        :
        <>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setError={setError} />
          <WordsDisplay words={words} />
          <WordInput newWordHandler={newWordHandler} lastWord={lastWord} resetTimer={resetTimer} />
        </>
      }

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
