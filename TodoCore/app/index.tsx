import { Alert, Pressable, Text, TextInput, View, ViewBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Button } from "react-native";
export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>TodoCore</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder="Insert Task"></TextInput>
        <Pressable onPress={() => Alert.alert('Add button pressed')} style={styles.addBox}>
          <Text style={styles.addText}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item taskTitle={item.taskTitle} />}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />
    </SafeAreaView>
  );
}

const DATA = [
  {
    id: '1',
    taskTitle: 'Brush Teeth',
    completed: false,
  },
  {
    id: '2',
    taskTitle: 'Breakfast',
    completed: false,
  },
  {   id: '3',
    taskTitle: 'Study',
    completed: false,
  },
];

type ItemProps = {
  taskTitle: string;
}

const Item = ({ taskTitle }: ItemProps) => (
  <View>
    <Text style={styles.taskTitle}>{taskTitle}</Text>
  </View>
);


const styles = StyleSheet.create({
  title: {
    paddingTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 1,
    alignItems: "center",
    marginTop: 32,
  },
  inputBox: {
    height: 60,
    width: '70%',
    borderRadius: 8,
    borderWidth: .5,
    padding : 10,
  },
  inputText: {
    lineHeight: 60,
    marginLeft: 15,
    color: "#888",
  },
  addBox: {
    height: 60,
    width: '15%',
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },
  addText: {
    textAlign: "center",
    lineHeight: 60,
    fontWeight: "bold",
    color: "white",
  },
  taskList: {
    marginTop: 32,
    padding: 20, 
    
    width: '90%',
    alignSelf: "center",
  },
  taskTitle: {
    fontSize: 18,
    color: "#000000",
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  }
});
