import React from 'react'
import { shallow, mount } from 'enzyme';
import TodoList from '../index'
/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('TodoList', () => {
  const props = {
    todos: [
      { id: 0, text: 'use jest', completed: false },
      { id: 1, text: 'use enzyme', completed: false },
      { id: 2, text: 'use react', completed: true },
    ],
    toggleTodo: jest.fn()
  };
  const shallowTodos = shallow(<TodoList {...props} />)
  const mountTodos = mount(<TodoList {...props} />)

  it('浅渲染可以找到 3 个 Todo 组件', () => {
    expect(shallowTodos.find('Todo').length).toBe(3);
  })
  it('浅渲染可以找到 0 个 li 标签', () => {
    expect(shallowTodos.find('li').length).toBe(0);
  })
  it('完全渲染可以找到 3 个 Todo 标签', () => {
    expect(mountTodos.find('Todo').length).toBe(3);
  })
  it('完全渲染可以找到 3 个 li 标签', () => {
    expect(mountTodos.find('li').length).toBe(3);
  })

  it('触发点击事件 onEnter 会被调用', () => {
    shallowTodos.find('Todo').at(0).simulate('click');
    expect(props.toggleTodo).toHaveBeenCalled();
    expect(props.toggleTodo).toHaveBeenCalledTimes(1)
  })

  it('触发点击事件 onEnter 会被调用', () => {
    mountTodos.find('li').at(0).simulate('click');
    expect(props.toggleTodo).toHaveBeenCalled();
    expect(props.toggleTodo).toHaveBeenCalledTimes(2)
  })
})
