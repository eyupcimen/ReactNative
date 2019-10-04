import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import GoalItem from './GoalItem';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.viewInputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInputContainer}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    viewInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'green',
        width: '80%'
    },
    button: {
        backgroundColor: 'white',
        width: '40%'
    }
});

export default GoalInput;