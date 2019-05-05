import React from 'react'
import { shallow, mount } from 'enzyme';
import App from '../index'
/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('App', () => {
  const shallowApp = shallow(<App />)
  const mountApp = mount(<App />)

  it('触发 addTodo, state.todoList 改变', () => {
    shallowApp.instance().addTodo('use jest');
    expect(shallowApp.state().todoList).toEqual([{ id: 0, text: 'use jest', completed: false }])
  })

  it('触发 filterTodos, state.active 改变', () => {
    shallowApp.instance().filterTodos('completed');
    expect(shallowApp.state().active).toEqual('completed')
    expect(shallowApp.instance().todos).toEqual([])
  })

  it('直接修改 state.active, todos 变化', () => {
    shallowApp.setState({active: 'active'});
    expect(shallowApp.state().active).toEqual('active');
    expect(shallowApp.state().todoList).toEqual([{ id: 0, text: 'use jest', completed: false }])
    expect(shallowApp.instance().todos).toEqual([{ id: 0, text: 'use jest', completed: false }])
  })

  it('触发 toggleTodo, state.todoList 改变', () => {
    shallowApp.instance().toggleTodo(0);
    expect(shallowApp.state().todoList).toEqual([{ id: 0, text: 'use jest', completed: true }])
  })

  it('测试实例的样式', () => {
    expect(mountApp.find('h1').text()).toBe('TODOS');
    expect(mountApp.find('input').prop('placeholder')).toBe('press enter add todo');
    expect(mountApp.find('ul').length).toBe(1);
    expect(mountApp.find('li').length).toBe(0);
    expect(mountApp.find('button').length).toBe(3);
  })

  it('触发 addTodo, state.todoList 改变', () => {
    mountApp.find('input').at(0).simulate('keydown',
      {key: 'Enter', keyCode: 13, target: { value: "use enzyme" }}
    );
    expect(mountApp.state().todoList).toEqual([{ id: 0, text: 'use enzyme', completed: false }])
  })

  it('触发 filterTodos, state.active 改变', () => {
    mountApp.find('button').at(1).simulate('click');
    expect(mountApp.state().active).toEqual('completed')
    expect(mountApp.instance().todos).toEqual([])
  })

  it('触发 toggleTodo, state.todoList 改变', () => {
    const spyFunction = jest.spyOn(mountApp.instance(), 'toggleTodo');
    mountApp.setState({active: 'all'});
    mountApp.find('li').at(0).simulate('click');
    expect(spyFunction).toHaveBeenCalledTimes(1);
    expect(mountApp.state().todoList).toEqual([{ id: 0, text: 'use enzyme', completed: true }])
    expect(mountApp.instance().todos).toEqual([{ id: 0, text: 'use enzyme', completed: true }])
    mountApp.setState({active: 'active'});
    expect(mountApp.instance().todos).toEqual([])
  })
})
