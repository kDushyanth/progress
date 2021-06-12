import React,{FC} from 'react';
import { Typography } from '@material-ui/core';


const colors = ['primary','secondary','error','textPrimary','textSecondary'] as const;
type colorType = typeof colors[number];

interface props {
    /**
     * defines the font weight
     */
    strong?:boolean,
    /**
     * If true underlines the text
     */
    underline?:boolean,
    /**
     * color of the text
     */
    color?:colorType
}

/**Text component with underline and strong types */
const Text:FC<props> = ({strong=false,underline=false,color='textPrimary',children})=>{
            let returnJSX = <Typography color={color}>{children}</Typography>
            if(strong)returnJSX = <strong>{returnJSX}</strong>;
            if(underline)returnJSX = <u>{returnJSX}</u>;
            return(
                    returnJSX
            );
};

export default Text;
