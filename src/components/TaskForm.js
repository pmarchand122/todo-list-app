import React from "react";
import {
  Segment,
  Header,
  Form,
  Select,
  Input,
  Button,
} from "semantic-ui-react";

const TaskForm = ({ newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
    console.log(newTaskClone);
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">Add New Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter task name..."
            value={newTask.name}
            onChange={changeNewTask}
            name="name"
          />
          <Form.Field
            control={Input}
            label="Task Date"
            placeholder="Enter task Date..."
            value={newTask.date}
            onChange={changeNewTask}
            name="date"
          />
          <Form.Field
            control={Select}
            label="Task importance"
            placeholder="Enter task name..."
            options={[
              { text: "High", value: "high" },
              { text: "Medium", value: "medium" },
              { text: "Low", value: "low" },
            ]}
            value={newTask.importance}
            onChange={changeNewTask}
            name="importance"
          />

          <Button type="button" color="green" onClick={addNewTask}>
            Add Task
          </Button>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default TaskForm;
