import React,{FC} from 'react';
import { Button } from '@material-ui/core';


const variant = ['outlined','text','contained'] as const;
type variantType = typeof variant[number];
interface props{
    variant?:variantType,
    br?:number
}

const MyButton:FC<props> = ({variant='contained',br=0,children})=>{
        return (
            <Button 
            color='primary'
            style ={{borderRadius :br }}
            variant = {variant}
            >
                {children}
            </Button>
        )
}
export default MyButton;