import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import 'semantic-ui-css/semantic.min.css';
import { NewItemForm } from '../new-item-form';
export default {
    title: 'New Item Form',
    component: NewItemForm,
    argTypes: {
    },
  } as ComponentMeta<typeof NewItemForm>;
  
  const Template: ComponentStory<any> = (args) => <NewItemForm {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
  };