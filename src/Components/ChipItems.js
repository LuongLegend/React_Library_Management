import { Chip } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add'
import React from 'react'

export default function ChipItems(props) {
    const { selectedItem, isSelected, name, handleSelectedItemChange } = props;
    const onHandleSelectedItemChange = () => {
        handleSelectedItemChange(selectedItem, name, isSelected)
    }
    return (
        <Chip
            label={name} color="primary"
            deleteIcon={isSelected ? <HighlightOffIcon /> : <AddIcon />}
            onDelete={onHandleSelectedItemChange}
            style = {{marginBottom: "8px"}}
        />
    )
}