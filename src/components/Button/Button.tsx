import React,{FC, MouseEventHandler} from 'react';
import { Button } from '@material-ui/core';


const variant = ['outlined','text','contained'] as const;
type variantType = typeof variant[number];
interface props{
    /**
     * variant of the button
     */
    variant?:variantType,
    /**
     * border radius of the button
     */
    br?:number
    /**
     * handles click event of the button
     * @param {SyntheticEvent} event The React's Synthetic event
     */
    onClickHandler?:MouseEventHandler
}

/** Button with border radius attribute */
const MyButton:FC<props> = ({variant='contained',br=0,onClickHandler,children})=>{
        return (
            <Button 
            color='primary'
            style ={{borderRadius :br }}
            variant = {variant}
            onClick = {onClickHandler}
            >
                {children}
            </Button>
        )
}
MyButton.defaultProps = {
    onClickHandler :()=>{
            console.log('clicked');
    }
}
export default MyButton;