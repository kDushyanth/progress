import React,{FC} from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const colors = ['primary','secondary','error','textPrimary','textSecondary'] as const;
type colorType = typeof colors[number];
interface props {
    /**
     * color of the text
     */
    color?:colorType,
}

const useStyles = makeStyles({
    blink:{
        animation:  `$blinker 2s linear infinite`
    },
    '@keyframes blinker':{
            "50%":  {
              opacity: 0
            }
    }  
});

/**A text component with **fadein** and **fadeout** animation */
const BlinkText:FC<props> = (props)=>{
  const classes = useStyles(props);  
  return  (     <Typography
                    color= {props.color}
                    className = {classes.blink}
                    display='inline'
                >
                    {props.children}
                </Typography>
          );
}
BlinkText.defaultProps = {
    color:'textPrimary'
}

export default BlinkText;