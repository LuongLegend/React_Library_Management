import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header/AppBarHeader'
import { makeStyles } from '@material-ui/core/styles';
import FilterCatlog from './FilterCatalog'
import Products from './Products'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HomePage() {

  const [selectedItem, setSelectedItem] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState(null);
  const [noResult, setNoResult] = useState(null);
  const getProducts = async (filterText, selectedItem) => {
    if (filterText.trim().length === 0) {
      const { data } = await axios.get(`http://localhost:3333/book?q=${filterText}`);
      setProducts(data);
      setMsg(null);
      setNoResult(null);
    }
    else {
      const { data } = await axios.get(`http://localhost:3333/book?q=${filterText}&c=${selectedItem.join(',')}`);
      if (typeof (data.result) === 'string') {
        setProducts([]);
        setMsg(data.msg);
        setNoResult(data.result);
      }
      else {
        setProducts(data.result);
        setMsg(data.msg);
        setNoResult(null);
      }
    }
  }
  useEffect(() => {
    getProducts(filterText, selectedItem) 
  }, [filterText,selectedItem])
  const classes = useStyles();

  const handleSelectedItemChange = (selectedItem, newValue, isSelected) => {
    if (selectedItem.indexOf(newValue) === -1)
      setSelectedItem([...selectedItem, newValue]);
    if (isSelected) {//change when click
      setSelectedItem(selectedItem.filter(item => item !== newValue));
    }
  }

  const handleFilterTextChange = (newFilterText) => {
    setFilterText(newFilterText);
  }

  return (
    <div className={classes.root}>
      <Header
        selectedItem={selectedItem}
        handleSelectedItemChange={handleSelectedItemChange}
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      {
        selectedItem.length > 0 && <FilterCatlog selectedItem={selectedItem}
          handleSelectedItemChange={handleSelectedItemChange}
        />
      }
      <Products products={products} msg={msg} noResult={noResult} />
    </div>
  )
}
