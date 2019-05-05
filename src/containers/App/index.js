import React from 'react';
import Header from '../../components/header';
import TodoInput from '../../components/todo_input';
import TodoList from '../../components/todo_list';
import Footer from '../../components/footer';

export default class App extends React.Component{
  state = {
    todoList: [],
    active: 'all',
  }

  currentId = 0;

  get todos() {
    const {todoList, active} = this.state;
    switch (active) {
      case 'completed':
        return todoList.filter(el => el.completed);
      case 'active':
      return todoList.filter(el => !el.completed);
      default:
        return todoList;
    }
  }

  addTodo = (value) => {
    const { todoList } = this.state;
    const item = {id: this.currentId++, text: value, completed: false}
    todoList.push(item);
    this.setState({todoList})
  }

  toggleTodo = (id) => {
    const { todoList } = this.state;
    for(let i = 0; i < todoList.length; i++) {
      if(todoList[i].id === id) {
        todoList[i].completed = true;
        this.setState({todoList});
        return;
      }
    }
  }

  filterTodos = (value) => {
    this.setState({active: value})
  }

  render() {
    const { active } = this.state;
    return (
      <div style={{margin: '0 auto', width: 400}}>
        <Header title="TODOS"/>
        <TodoInput onEnter={this.addTodo} placeholder="press enter add todo"/>
        <TodoList todos={this.todos} toggleTodo={this.toggleTodo}/>
        <Footer onClick={this.filterTodos} active={active}/>
      </div>
    )
  }
}