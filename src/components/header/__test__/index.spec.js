import React from 'react'
import { shallow } from 'enzyme';
import Header from '../index'

/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('Footer', () => {
  const props = {
    title: 'Jest Test'
  };
  const shallowHeader = shallow(<Header {...props} />)

  it('Header 有一个 header 标签',() => {
    expect(shallowHeader.find('header').length).toBe(1);
  })

  it('h1标签的内容为 Jest Test',() => {
    expect(shallowHeader.find('h1').text()).toBe('Jest Test');
  })
})
