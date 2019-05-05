import React from 'react'
import { shallow } from 'enzyme';
import Footer from '../index'
/**
 * Test Case
 * 1. 不传 active
 * 2. 点击禁用的 button
 * 3. 点击非禁用的 button
 * 4. 传入 active 为 completed
 */

describe('Footer', () => {
  const props = {
    onClick: jest.fn()
  };
  const shallowFooter = shallow(<Footer {...props} />)

  it('有三个button', () => {
    expect(shallowFooter.find('button').length).toBe(3);
  })

  const links = ['all', 'completed', 'active'];

  links.forEach((el, index) => {
    it(`第 ${index + 1} 个 button 的文本为 ${el}`, () => {
      expect(shallowFooter.find('button').at(index).text()).toBe(el);
    })
  })

  it('第一个按钮是禁用状态, 其余两个为非禁用', () => {
    expect(shallowFooter.find('button').at(0).prop('disabled')).toBeTruthy();
    expect(shallowFooter.find('button').at(1).prop('disabled')).toBeFalsy();
    expect(shallowFooter.find('button').at(2).prop('disabled')).toBeFalsy();
  })

  // disabled 状态也可以触发点击事件
  it('点击第二按钮, 会传入一个 completed', () => {
    shallowFooter.find('button').at(0).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick.mock.calls[0][0]).toBe('all');
  })
  it('点击第二按钮, 会传入一个 completed', () => {
    shallowFooter.find('button').at(1).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick.mock.calls[1][0]).toBe('completed');
  })

  const shallowFooter2 = shallow(<Footer {...props} active="completed" />)
  it('第二个按钮是禁用状态, 其余两个为非禁用', () => {
    expect(shallowFooter2.find('button').at(0).prop('disabled')).toBeFalsy();
    expect(shallowFooter2.find('button').at(1).prop('disabled')).toBeTruthy();
    expect(shallowFooter2.find('button').at(2).prop('disabled')).toBeFalsy();
  })
})
