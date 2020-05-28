import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'

export default function CatagoryComboBox(props) {
  const [catalogs, setCatalogs] = useState([]);
  const {selectedItem,handleSelectedItemChange} = props;

  const onHandleSelectedItemChange = (e,value) => {
    if(catalogs.filter(item => item.name === value).length!==0)
      handleSelectedItemChange(selectedItem,value)
}
  const getCatalogs = async () => {
    const { data } = await axios.get('http://localhost:3333/catalog');
    setCatalogs(data);
  };
  useEffect(() => {
    getCatalogs();
  }, [])
  
  return (
    <Autocomplete
      id="combo-box-demo"
      onInputChange = {onHandleSelectedItemChange}
      options={catalogs}
      getOptionLabel={(option) => option.name}
      style={{ width: parseInt(props.width) }}
      renderInput={(params) =>
        <TextField
          {...params}
          label="Catagory"
          variant="outlined"
          {...props.params}
        />
      }
    />
  );
}