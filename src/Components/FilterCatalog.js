import React from 'react'
import { Tabs, AppBar, Chip } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      chip: {
        margin: theme.spacing(0.5),
      },
  }));
  
export default function FilterCatalog(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="relative" color="default" >
                <Tabs
                    variant="scrollable"
                    scrollButtons="on"
                    textColor="primary"
                >
                <Chip
                    label="Hehe" color="primary"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                    deleteIcon={<AddIcon />}
                    onDelete={() => console.log('hihi')}
                    className = {classes.chip}
                />
                </Tabs>
            </AppBar>
        </div>
    )
}