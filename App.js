import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Todo({ todo, dueDate, index, markTodo, removeTodo }) {
  //This is the page navigator that I couldnt get to work
  // onClick={() =>
  //   navigation.navigate('TodoPage', {name: {todo}})}
  return(
      <div className="todo">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.text}
          </span>
          <span>{dueDate}</span>
          <div>
              <button variant="outline-sucess" onClick={() => markTodo(index)}>✓</button>
              <button variant="outline-danger" onClick={() => removeTodo(index)}>X</button>
          </div>
      </div>
  );
};

// This application as well as many JavaScript applications, uses a lot of 
// arrow functions. An arrow function is a compact alternative to a traditional 
// function expression with some deliberate limitations


export function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");


  // the e at the beginning of the arrow function represents
  //the event listener element that was affected
  // ie button when it is clicked
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");

  };

  return(
    <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
        <Form.Label><b>Add Due Date</b></Form.Label>
        <Form.Control type="date" className="input" value={dueDate} onChange={e => setDueDate(e.target.value)} placeholder="Enter the Due Date" />
      </Form.Group>
      <br></br>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  )
};



export default function App() {

    const [todos, setTodos] = React.useState([
      {
      text: "Sample todo",
      isDone: false
      }
    ]);

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
  };

    const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    };

    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };



  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}}/>  
    //     <Stack.Screen name="Todo" component={TodoPage} />
    //     </Stack.Navigator>
          <div className="app">
            <div className="container">
              <h1 className="text-center mb-4">Todos</h1>
              <FormTodo addTodo={addTodo} />
              <div>
              {/* .map is a function that creates a new array populated with the results of 
              calling a provided function on every element in the calling array*/}
                {todos.map((todo, index) => (
                  <Card>
                    <Card.Body>
                      <Todo key={index} index={index}
                      todo={todo} markTodo={markTodo}
                      removeTodo={removeTodo} />
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
    // </NavigationContainer>
  );
};



