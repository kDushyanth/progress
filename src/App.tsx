import React from 'react';
import './App.css';
import BlinkText from './components/Text/BlinkText';
import Text from './components/Text/Text';
import Button from './components/Button/Button';

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function App() {
  return (
   <> 
    <BlinkText color='secondary' >Blinking Text</BlinkText>
    <Text underline={false} strong={true}>Some Text</Text>
    <Button>Click me</Button>
   </> 
  );

}

export default App;
