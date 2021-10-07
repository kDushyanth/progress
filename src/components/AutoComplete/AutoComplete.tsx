/* eslint-disable no-use-before-define */

import React,{FC} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface objType{
  title:string,
}
interface props{
   /**
    * width of input field
    */
   width?:number,
   /**Options of the autocomplete */
   options:objType[],
   /**
    * margin on left
    */   
   ml?:number,
   /**
    * margin on top
    */ 
   mt?:number,
   /**
    * margin on right
    */ 
   mr?:number,
   /**
    * margin on bottom
    */ 
   mb?:number
}
/**An autocomplete component with margin and width props */
const CheckboxesTags:FC<props> = ({options,width=400,ml=0,mt=0,mr=0,mb=0})=>{
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option:objType) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: width,marginTop:mt,marginBottom:mb,marginLeft:ml,marginRight:mr }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

export default CheckboxesTags;
