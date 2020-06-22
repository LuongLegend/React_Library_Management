import React, { useState, useEffect, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { SearchBookContext } from '../HomePage'

export default function CatagoryComboBox(props) {
  const { selectedItem, handleSelectedItemChange } = useContext(SearchBookContext);
  const [catalogs, setCatalogs] = useState([]);

  const onHandleSelectedItemChange = (e, value) => {
    if (catalogs.filter(item => item.name === value).length !== 0)
      handleSelectedItemChange(selectedItem, value)
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
      onInputChange={onHandleSelectedItemChange}
      options={catalogs}
      getOptionLabel={(option) => option.name}
      style={{ width: parseInt(props.width) }}
      renderInput={(params) =>
        <TextField
          {...params}
          label="Catagory"
          variant="standard"
          {...props.params}
        />
      }
    />
  );
}