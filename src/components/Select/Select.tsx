import {useState,FC} from 'react';
import { FormControl,FormHelperText, Select,MenuItem, InputLabel } from "@material-ui/core";

interface props{
  /**
   * Type of Select
   */
  item:string|number
  /**
   * Values of Select
   */
  items: (string|number)[]
}
const MySelect:FC<props>= ({item,items})=>{
  const [itemval, setItemval] = useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setItemval(event.target.value as string);
  };
    return (
      
      <FormControl >
      <InputLabel id="demo-simple-select-helper-label">{item}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={itemval}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
              items.map((val)=>{
                return (<MenuItem value={val}>{val}</MenuItem>);
              })
        }
        
      </Select>
      <FormHelperText>Select our gender</FormHelperText>
    </FormControl>
    );
}
export default MySelect;