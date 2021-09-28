import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Button,
  Container,
  Header,
  Segment,
  List,
  Divider,
} from "semantic-ui-react";

import TaskForm from "../components/TaskForm";
import Task from "../components/Task";

const Home = () => {
  const initialTask = {
    name: "",
    date: "",
    importance: "",
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [newTask, setNewTask] = React.useState(initialTask);
  const [editTaskOpen, setEditTaskOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newDate, setNewDate] = React.useState("");
  const [newImportance, setNewImportance] = React.useState("");

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        date={task.date}
        importance={task.importance}
        editTask={editTask}
        index={index}
        newName={newName}
        setNewName={setNewName}
        newDate={newDate}
        setNewDate={setNewDate}
        newImportance={newImportance}
        setNewImportance={setNewImportance}
        editTaskOpen={editTaskOpen}
        deleteTask={deleteTask}
      />
    );
  });

  function toggleNewTaskOpen() {
    setNewTaskOpen(!newTaskOpen);
    setEditTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialTask);
    setNewTaskOpen(false);
  }

  function editTask(index, newName, newDate, newImportance) {
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      setEditTaskOpen(!editTaskOpen);
      return {
        name: newName,
        date: newDate,
        importance: newImportance,
      };
    });
    setList(newList);
  }

  function deleteTask(index) {
    let deletedTask = list.filter((task, i) => i !== index);
    setList(deletedTask);
  }

  return (
    <React.Fragment>
      <Container>
        <Segment>
          <Header as="h1" textAlign="center">
            Todo List
            <Button icon="tasks" onClick={toggleNewTaskOpen} />
          </Header>
          <Divider horizontal></Divider>
          {newTaskOpen ? (
            <TaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              addNewTask={addNewTask}
            />
          ) : (
            <List>{taskList}</List>
          )}
        </Segment>
      </Container>
    </React.Fragment>
  );
};

export default Home;
