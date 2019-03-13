import React , { Component } from 'react';
import { Button, TomatoButton, TypeButton, Rotate } from './Button_style';

class ButtonBasic extends Component {
  render() {
    return(
      <>
        <Button>button</Button>
        <Button active>Active button</Button>
        <TomatoButton>TomatoButton</TomatoButton>
        <Button as='span'>button as span</Button>
        <Button>defaultValue</Button>
        <Button color='red'>defaultValue color</Button>
        <TypeButton>type button</TypeButton>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </>
    );
  }
}

export default ButtonBasic;