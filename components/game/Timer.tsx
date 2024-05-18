import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'

interface Props {
    timeLeft: number,
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>
}

const Timer: React.FC<Props> = ({ timeLeft, setTimeLeft }) => {
    const [error, setError] = useState<string | null>(null)

    const displayedTime = timeLeft < 10 ? `0${timeLeft}` : timeLeft

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft === 0) return
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (timeLeft === 0) {
            // Handle timer completion
            console.log('Timer completed')
            setError('Vreme je isteklo!')
        }
    }, [timeLeft])

    if (error) return <Text style={styles.error}>{error}</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preostalo vreme za potez:</Text>
            <Text style={styles.text}>{`00:${displayedTime}`}</Text>
        </View>
    )
}

export default Timer


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        gap: 5
    },
    title: {
        fontSize: 16,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    error: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
        marginVertical: 10
    }
})