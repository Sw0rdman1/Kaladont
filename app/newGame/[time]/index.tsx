import GameEndScreen from '@/components/game/GameEndScreen';
import ScoreDisplay from '@/components/game/ScoreDisplay';
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

  const [user1, setUser1] = useState({
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: 'Bozidar',
    score: 0
  })
  const [user2, setUser2] = useState({
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: 'Stojan',
    score: 0
  })


  const resetTimer = () => {
    setTimeLeft(parseInt(time ?? '30'))
  }

  const resetGameHandler = () => {
    setWords([generateRandomWord().toUpperCase()])
    setError(null)
    resetTimer()
  }

  const newWordHandler = (word: string) => {
    if (!word) return;
    setWords([word, ...words.slice(0, 3)]);
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {error ?
        <GameEndScreen errorMessage={error} resetGameHandler={resetGameHandler} />
        :
        <>
          <ScoreDisplay user1={user1} user2={user2} />
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
