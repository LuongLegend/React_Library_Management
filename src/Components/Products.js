import React from 'react'
import ProductRow from './ProductRow'
import { Typography } from '@material-ui/core'
export default function Products(props) {
    const { products,msg, noResult} = props;
    return (
        <div>
            { {msg} && <Typography variant = "h5" color = "primary">{msg} </Typography>}
            { {noResult} && <Typography variant = "h5" color = "secondary">{noResult} </Typography>}
            {
                products.map(
                    item =>
                        <ProductRow
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                )
            }
        </div>
    )
}
