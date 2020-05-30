import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(theme => ({
    root: {
        //maxWidth: 1000,
        //display: 'flex'
        marginBottom : 10
    },
    media: {
        width: 150,
        height: 150,
        //flexDirection: 'column',
        float: 'left'
    },
    content: {
        paddingTop: 20,
        marginLeft: 60,
        float: 'left'
    },
}))
export default function ProductRow(props) {
    const classes = useStyles();
    const {title, description} = props;
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://m.media-amazon.com/images/I/51z2HY7kn4L._AC_UY218_ML3_.jpg"
                    title="this is a picture"
                />
                <CardContent className = {classes.content}>
                    <Typography variant="h5"  align = "left" gutterBottom  >
                       {title}
                    </Typography>
                    <Typography variant="body2" align = "left" color="textSecondary"  >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}