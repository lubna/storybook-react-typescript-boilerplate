import React from 'react';
import { Button } from './button.component'

export default { 
    title: 'Button', 
    
    parameters: {
    component: Button,
  }
};

export const withText = () => <Button label={'Test button'} />
