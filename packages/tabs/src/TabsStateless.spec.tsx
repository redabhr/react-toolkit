import * as React from 'react';
import TabStateless from './TabsStateless';
import Tab from './Tab';
import { create } from 'react-test-renderer';

const noop = () => {};
describe('<TabStateless>', () => {
  it('should render component', () => {
    const component = create(
      <TabStateless
        onChange={noop}
        className="className"
        activeIndex="1"
        classModifier="withIcon">
        <Tab title="title tab1" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
        <Tab title="title tab2" classModifier="modifier">
          <span>Content</span>
        </Tab>
        <Tab title="title tab3" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
      </TabStateless>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
