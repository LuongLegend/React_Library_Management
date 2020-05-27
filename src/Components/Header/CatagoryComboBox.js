import React, { useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'

export default function CatagoryComboBox(props) {
  const [catalogs, setCatalogs] = useState([]);
  const getCatalogs = async() => {
    const {data} = await  axios.get('http://localhost:3333/catalog');
    setCatalogs(data);
  };
  useEffect(() => {
      getCatalogs();
  }, [])
  return (
        <Autocomplete
          id="combo-box-demo"
          options={catalogs}
          {...props}
          getOptionLabel={(option) => option.name}
          style={{ width: parseInt(props.width) }}
          renderInput={(params) => <TextField {...params} label="Catagory" variant="outlined" {...props.params} />}
        />
      );
}