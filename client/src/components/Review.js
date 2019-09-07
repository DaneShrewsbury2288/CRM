import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as Table from '../components/EditableTable';



// const products = [
//   { name: Table.selectedBrews.arrayOne.slice(-1),
//     desc: 'A nice thing',
//     price: '$9.99' 
//     },
//   { name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45' 
//     },
//   { name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51' 
//     },
//   { name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11' 
//     },
// ];

// function pushIntoProducts(){
//   products.push()

// }


function seeObject(x){
  console.log(Table.selectedBrews.arrayOne.slice(-1));
  const why = Table.selectedBrews.arrayOne.slice(-1);
  console.log(why[0][0]);
}

const addresses = ['costco@costco.com', '425-425-4252', '98008'];

//This is where the clients info should be pushed
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const selectedProducts = Table.selectedBrews.arrayOne[0];

console.log(selectedProducts);

export default function Review() {
  // const [quantityValue] = React.useState([]);
  const classes = useStyles();

  const x = Table.selectedBrews.arrayOne.slice(-1);
  console.log(x);
  console.log(Table.items);
  // console.log(selected);
  // console.log(rows);

  seeObject();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        {Table.items.map(item => (
          <ListItem
          className={classes.listItem} 
          key={item.name}>
            <ListItemText
            primary={item.productName} />
            <Typography 
            variant="body2">${item.price}</Typography>
            <Typography>
            <TextField
            id="outlined-number"
            label="Quantity"
            // value={values.age}
            // onChange={handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="filled"
            width="200"
      />
      </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Client Information
          </Typography>
          <Typography gutterBottom>Costco</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Product Selection
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}