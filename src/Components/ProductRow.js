import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1000,
        display: 'flex',
    },
    media: {
        display: 'flex',
        width: 150,
        height: 150,
        // flexDirection: 'column',
        float: 'left'
    },
    content: {
        display: 'flex',
    }

}))
export default function ProductRow() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://m.media-amazon.com/images/I/51z2HY7kn4L._AC_UY218_ML3_.jpg"
                    title="this is a picture"
                />
                <CardContent className={classes.content}>
                    <Typography  variant="h5" align = "left">
                        Lizard asfasdfasd asdf asdf ad
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align = "left">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}