import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, visible }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoalText(text);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="add goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="cancel" onPress={onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})