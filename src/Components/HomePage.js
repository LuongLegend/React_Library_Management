import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import Header from './Header/AppBarHeader'
import { makeStyles } from '@material-ui/core/styles';
import FilterCatlog from './FilterCatalog'
import Products from './Products'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export const SearchBookContext = createContext(null);

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState(null);
  const [noResult, setNoResult] = useState(null);
  const [seeMoreCount, setSeeMoreCount] = useState(1);
  const [outOfProduct, setOutOfProduct] = useState(true);
  const [productsLength, setProductsLength] = useState(0);
  const getProducts = async (filterText, selectedItem, productsLength) => {
    setSeeMoreCount(1);
    if (filterText.trim().length === 0) {
      const { data } = await axios.get(`http://localhost:3333/book`);
      const allData = await axios.get(`http://localhost:3333/book?isLimited=f`);
      setProductsLength(allData.data.length);
      if (allData.data.length === data.length) setOutOfProduct(true);
      else setOutOfProduct(false);
      setProducts(data);
      setMsg(null);
      setNoResult(null);
    }
    else {
      const { data } = await axios.get(`http://localhost:3333/book?q=${filterText}&c=${selectedItem.join(',')}`);
      const allData = await axios.get(`http://localhost:3333/book?q=${filterText}&c=${selectedItem.join(',')}&isLimited=f`);
      setProductsLength(allData.data.result.length);
      if (typeof (data.result) === 'string') {
        setProducts([]);
        setMsg(data.msg);
        setNoResult(data.result);
        setOutOfProduct(true);
      }
      else {
        setProducts(data.result);
        if (data.result.length === productsLength) setOutOfProduct(true);
        else setOutOfProduct(false);
        setMsg(data.msg);
        setNoResult(null);
      }
    }
  }

  const getProductsWithPage = async (page) => {
    if (page === 1) return;
    let data;
    if (filterText.trim().length === 0) {
      const getData = await axios.get(`http://localhost:3333/book?page=${page}`);
      data = getData.data;
    } else {
      const getData = await axios.get(`http://localhost:3333/book?q=${filterText}&c=${selectedItem.join(',')}&page=${page}`);
      data = getData.data.result;
    }
    if (typeof (data) === 'string') {
      setOutOfProduct(true);
    }
    else {
      let a = products;
      for (let item of data) {
        a = [...a, item];
      }
      setProducts(a);
      if (products.length + data.length === productsLength) setOutOfProduct(true);
      console.log(data);
      console.log(products);
    }
  }
  useEffect(() => {
    getProducts(filterText, selectedItem, productsLength)
  }, [filterText, selectedItem, productsLength]);

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
  const handleClick = () => {
    setSeeMoreCount(seeMoreCount + 1);
    console.log(seeMoreCount);
    getProductsWithPage(seeMoreCount + 1)
  }
  return (
    <SearchBookContext.Provider value = {{selectedItem, filterText, handleSelectedItemChange, handleFilterTextChange}}>
      <div className={classes.root}>
        <Header />
        {
          selectedItem.length > 0 && <FilterCatlog selectedItem={selectedItem}
            handleSelectedItemChange={handleSelectedItemChange}
          />
        }
        <Products products={products} msg={msg} noResult={noResult} />
        {
          !outOfProduct &&
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Xem thêm
        </Button>
        }
      </div>
    </SearchBookContext.Provider>
  )
}
