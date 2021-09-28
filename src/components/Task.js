import React from "react";
import {
  Button,
  List,
  Form,
  Input,
  Divider,
  Item,
  Label,
  Grid,
  Segment,
} from "semantic-ui-react";

const Task = ({
  name,
  date,
  importance,
  editTask,
  index,
  newName,
  setNewName,
  newDate,
  setNewDate,
  newImportance,
  setNewImportance,
  editTaskOpen,
  deleteTask,
}) => {
  function editCurrentTask() {
    editTask(index, newName, newDate, newImportance);
  }

  function deleteCurrentTask() {
    deleteTask(index);
  }

  function changeName(e, { value }) {
    setNewName((newName) => value);
  }

  function changeDate(e, { value }) {
    setNewDate((newDate) => value);
  }

  function changeImportance(e, { value }) {
    setNewImportance((newImportance) => value);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="1" textAlign="center">
          <Grid.Column width="6">
            <Segment>
              <Item>
                <Item.Content justifyContent="center">
                  <Item.Header as={Label}>
                    {editTaskOpen ? (
                      <Form>
                        <Form.Field
                          control={Input}
                          placeholder="edit task name..."
                          value={newName}
                          onChange={changeName}
                        />
                      </Form>
                    ) : (
                      name
                    )}
                  </Item.Header>
                  <Item.Meta as="h4">
                    {editTaskOpen ? (
                      <Form>
                        <Form.Field
                          control={Input}
                          placeholder="edit task date..."
                          value={newDate}
                          onChange={changeDate}
                        />
                      </Form>
                    ) : (
                      date
                    )}
                  </Item.Meta>
                  <Item.Description as="h3">
                    {editTaskOpen ? (
                      <Form>
                        <Form.Field
                          control={Input}
                          placeholder="edit task importance..."
                          value={newImportance}
                          onChange={changeImportance}
                        />
                      </Form>
                    ) : (
                      importance
                    )}
                  </Item.Description>
                  <Item.Extra>
                    <Button
                      icon="trash"
                      color="red"
                      onClick={deleteCurrentTask}
                    ></Button>
                    <Button
                      icon="pencil"
                      color="yellow"
                      onClick={editCurrentTask}
                    ></Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Segment>
          </Grid.Column>
        </Grid>
      </List.Item>
      <Divider />
    </React.Fragment>
  );
};

export default Task;
