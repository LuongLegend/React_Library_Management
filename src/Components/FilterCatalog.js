import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, AppBar, Chip, TableHead, TableContainer, TableRow } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//       },
//       chip: {
//         margin: theme.spacing(0.5),
//       },
//   }));
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: theme.spacing(0.1),
        overflowX: "auto"
    },
    table: {
        minWidth: 200
    },
    chip: {
        marginTop: '10px',
        marginBottom: '10px'
    }
}))
export default function FilterCatalog(props) {
    const [isClicked, setIsClicked] = useState(false);
    const {selectedItem, handleSelectedItemChange} = props;
    React.useEffect(() => {
        console.log(selectedItem)
    })
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* <Paper className={classes.root} varient = "outlined"> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} size="medium">
                    <TableBody>
                        <TableRow>
                            <TableHead component="th" scope="row">
                               { selectedItem.map(item => 
                                   <Chip
                                       label={item} color="primary"
                                       deleteIcon={isClicked ? <AddIcon /> : <HighlightOffIcon />}
                                       onDelete={() => setIsClicked(!isClicked)}
                                   />
                               )
                               }
                                
                            </TableHead>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >
            {/* </Paper> */}
        </div>
    )
}