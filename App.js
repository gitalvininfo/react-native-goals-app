import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prev) => [...prev, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }



  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}></Button>
        {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item} onDeleteGoal={deleteGoalHandler} />
              )
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5
  },

});



// const addGoalHandler = (enteredGoalText) => {
//   // setCourseGoals([...courseGoals, enteredGoalText]); // not a good way to update the state if your new state depends on the previous state
//   setCourseGoals((prev) => [...prev, { text: enteredGoalText, id: Math.random().toString() }]);
// }
