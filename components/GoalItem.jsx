import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

const GoalItem = ({ text, onDeleteGoal }) => {

    const onDeleteHandler = () => {
        onDeleteGoal(text.id);
    }

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={onDeleteHandler}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text.text}</Text>
            </Pressable >
        </View>
    )
}

export default GoalItem


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})