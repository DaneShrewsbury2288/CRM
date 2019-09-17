import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as Table from '../components/EditableTable';

// function seeObject(x){
//   console.log(Table.selectedBrews.arrayOne.slice(-1));
//   const why = Table.selectedBrews.arrayOne.slice(-1);
// }

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
  const [values, setValues] = React.useState([{
    productid: '',
    quantity: 0
  }]);
  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled',
  //   currency: 'EUR',
  // });

  const classes = useStyles();


  const x = Table.selectedBrews.arrayOne.slice(-1);
  console.log(x);
  console.log(Table.rows);
  // console.log(selected);
  // console.log(rows);

  // handle input change
  const handleChange = quantity => event => {
    setValues({ ...values, [quantity]: event.target.value });
  };

  const addresses = ['costOfCo@costco.com', '206-206-2062', '98188'];

  function checkState() {
    console.log(Table.rows);
  }

  // seeObject();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter quantity of products desired to purchase
      </Typography>
      <button onClick={checkState}>Click me to check state</button>
      <List>
          <ListItem
            className={classes.listItem}
            key="0">
            <ListItemText
              primary="Black Raven Trickster" />
            <Typography
              variant="body2">$5</Typography>
            <Typography>
              <TextField
                id="0"
                name="We"
                label="Quantity Desired"
                value={values}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="1">
            <ListItemText
              primary="Hops Potato" />
            <Typography
              variant="body2">$7.5</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="2">
            <ListItemText
              primary="Sizzlebird Cider" />
            <Typography
              variant="body2">$8</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="3">
            <ListItemText
              primary="Sounds Puget" />
            <Typography
              variant="body2">$8.89</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="4">
            <ListItemText
              primary="Extra Foam - Limited Edition" />
            <Typography
              variant="body2">$9.19</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="5">
            <ListItemText
              primary="The Kraken" />
            <Typography
              variant="body2">$9.49</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
          <ListItem
            className={classes.listItem}
            key="6">
            <ListItemText
              primary="Sam's Beer" />
            <Typography
              variant="body2">$14.99</Typography>
            <Typography>
              <TextField
                id="1"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('quantity')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Typography>
          </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="" />
          <Typography variant="subtitle1" className={classes.total}>

          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Client Information
          </Typography>
          <Typography gutterBottom></Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}