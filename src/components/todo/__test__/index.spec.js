import React from 'react'
import { shallow, render } from 'enzyme';
import Todo from '../index'
/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('Todo', () => {
  const props = {
    onClick: jest.fn(),
    completed: false,
    text: 'use jest'
  };

  const shallowTodo = shallow(<Todo {...props} />)

  it('todo的文本为 use jest', () => {
    expect(shallowTodo.find('li').text()).toBe('use jest');
  })

  // 属性名和 react 保持一致
  it('todo的 className 为 active', () => {
    expect(shallowTodo.find('li').prop('className')).toBe('active');
  })

  it('todo的 style.textDecoration 为 ""', () => {
    expect(shallowTodo.find('li').prop('style').textDecoration).toBe('');
  })

  it('测试点击事件', () => {
    shallowTodo.find('li').at(0).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  })

  it('改变 props 的 completed, 类名为 completed', () => {
    shallowTodo.setProps({completed: true})
    expect(shallowTodo.find('li').prop('className')).toBe('completed');
    expect(shallowTodo.find('li').prop('style').textDecoration).toBe('line-through');
  })

  it("Todo 快照测试", () => {
    const renderTodo = render(<Todo {...props} />);
    expect(renderTodo).toMatchSnapshot();
  });
})
