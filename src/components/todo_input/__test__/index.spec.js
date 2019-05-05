import React from 'react'
import { shallow } from 'enzyme';
import TodoInput from '../index'
/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('TodoInput', () => {
  const props = {
    placeholder: 'TodoInput',
    onEnter: jest.fn()
  };
  const shallowInput = shallow(<TodoInput {...props} />)

  it('input placehoder 为 TodoInput', () => {
    expect(shallowInput.find('input').at(0).prop('placeholder')).toBe('TodoInput');
  })

  it('target.value 为 "" onEnter 不会调用', () => {
    shallowInput.find('input').at(0).simulate('keydown',
      {key: 'Enter', keyCode: 13, target: { value: "" }}
    );
    expect(props.onEnter).not.toHaveBeenCalled();
  })

  it('target.value 不为 "" onEnter 会调用', () => {
    shallowInput.find('input').at(0).simulate('keydown',
      {key: 'Enter', keyCode: 13, target: { value: "123" }}
    );
    expect(props.onEnter).toHaveBeenCalled();
    expect(props.onEnter.mock.calls[0][0]).toBe('123')
  })
})
