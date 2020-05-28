import React,{useState} from 'react'
import Header from './Header/AppBarHeader'
import { makeStyles } from '@material-ui/core/styles';
import FilterCatlog from './FilterCatalog'
import ProductRow from './ProductRow'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));


export default function HomePage() {
    const [selectedItem, setSelectedItem] = useState([]);
    const classes = useStyles();

    const handleSelectedItemChange = (selectedItem, newValue, isSelected) => {
      if(selectedItem.indexOf(newValue) === -1)
        setSelectedItem([...selectedItem,newValue]);
      if(isSelected){//change when click
        setSelectedItem(selectedItem.filter(item => item !== newValue));
    }
  }
    return (
        <div className={classes.root}>
            <Header selectedItem = {selectedItem} handleSelectedItemChange = {handleSelectedItemChange}/>
            <FilterCatlog  selectedItem = {selectedItem} handleSelectedItemChange = {handleSelectedItemChange}/>
            <ProductRow selectedItem = {selectedItem}/>
        </div>
    )   
}
