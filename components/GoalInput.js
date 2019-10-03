import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.viewInputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textInputContainer}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewInputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInputContainer: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});