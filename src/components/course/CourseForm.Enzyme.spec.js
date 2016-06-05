import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(passedProps = {}) {
  let defaultProps = {
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  let props = Object.assign(defaultProps, passedProps);
  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {

  it('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('renders the save button with the label "Save" before saving', () => {
    const wrapper = setup();
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('renders the save button with the label "Saving..." when saving', () => {
    const wrapper = setup({saving: true});
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });

});
