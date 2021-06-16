import {FC} from 'react'; 
import {  makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 1,
      marginRight: 1,
      width: 200,
    },
  }
);
interface props{
        /**
         * @ignore
         * 1.id of the field
         * 2.This props will be ignored in the documentation
         */
        id:string,
        /**
         * Label of the text field
         * @version 1.0.0
         */
        label?:String,
        /**
         * type of the field
         */
        type?:string,
        /**
         * default value display in the text field
         * @author Optum
         */
        defaultValue?:string,
}
/** * A DateTimePicker with field value date/time/datetime as specified by the type 
 *  * Different [JSDoc](https://jsdoc.app/) tags are used to describe the props
 *  * Markdown is used to render this list
*/
const DateTimePickers:FC<props>=({id,label='default label',type='date',defaultValue='2020-06-12'})=>{
    const classes = useStyles();
    return (
      <form className={classes.container} noValidate>
        <TextField
          id={id}
          label={label}
          type={type}
          defaultValue={defaultValue}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
}

export default  DateTimePickers;

