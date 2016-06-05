import expect from 'expect';
import React from 'react';
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
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {props, output, renderer};
}

describe('CourseForm via React Test Utils', () => {

  it('renders a form and an h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('renders the save button with the label "Save" before saving', () => {
    const { output } = setup();
    let [,,,,,saveBtn] = output.props.children;
    expect(saveBtn.props.value).toBe('Save');
  });

  it('renders the save button with the label "Saving..." when saving', () => {
    const {output} = setup({saving: true});
    let [,,,,,saveBtn] = output.props.children;
    expect(saveBtn.props.value).toBe('Saving...');
  });

});
