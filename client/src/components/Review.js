import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import * as Table from '../components/EditableTable';
import * as StartForm from '../components/AddressForm';
import API from '../utilities/api';
import PropTypes from "prop-types";
import { connect } from "react-redux";

// function seeObject(x){
//   console.log(Table.selectedBrews.arrayOne.slice(-1));
//   const why = Table.selectedBrews.arrayOne.slice(-1);
// }

export const QuantityState = [{}];

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

// const selectedProducts = Table.selectedBrews.arrayOne[0];


function Review(props) {
  const { user } = props.auth;
  const [values, setValues] = React.useState([{
    productid: '',
    BlackRavenQuantity: 0,
    HopsPotatoQuantity: 0,
    SizzleBirdCiderQuantity: 0,
    SoundsPugetQuantity: 0,
    ExtraFoamLimitedQuantity: 0,
    TheKrakenQuantity: 0,
    SamsBeerQuantity: 0
    

  }]);

  // const [activeStep, setActiveStep] = React.useState(0);
  // const [y] = React.useState(false);

  console.log(props);


  // const handleNext = () => {
  //   setActiveStep(activeStep + 1);
  // };

  // // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };
   

  const classes = useStyles();

  const BlackRavenID = '5d6574318debf3d6cb3e549d';
  const HopsPotatoID = '5d657d75d2a2ace0a8b4c42b';
  const SizzlebirdCiderID = '5d657dc1d2a2ace0a8b4c42d';
  const SoundsPugetID = '5d657e36d2a2ace0a8b4c42e';
  const ExtraFoamLimitedEditionID = '5d657ebdd2a2ace0a8b4c42f';
  const TheKrakenID = '5d657eecd2a2ace0a8b4c430';
  const SamsBeerID = '5d68789eaa05cb5e20b390d7';



  // const x = Table.selectedBrews.arrayOne.slice(-1);
  // console.log(x);
  // console.log(Table.rows);
  // console.log(selected);
  // console.log(rows);

  // handle input change
  const handleChange = quantity => event => {
    setValues({ ...values, [quantity]: event.target.value });
    
  };

  // const addresses = ['costOfCo@costco.com', '206-206-2062', '98188'];

  //Checks States
  // function checkState() {
  //   console.log(Table.rows);
  //   console.log(values);
  //   console.log(StartForm.selectedClient);
  //   console.log(newOrder);
  // }

  function pushValues(){
    QuantityState.push(values);
  }

  pushValues();

  // function checkStateAll(){
  //   console.log(BlackRavenQuantity);
  // }

  // seeObject();

  const newOrder = {
    client: StartForm.selectedClient,
    user: user._id,
    lineItems: [
      {
        product: {
                _id: BlackRavenID
        },
        quantity: values.BlackRavenQuantity
      },
      {
        product: {
                _id: HopsPotatoID
        },
        quantity: values.HopsPotatoQuantity
      },
      {
        product: {
                _id: SizzlebirdCiderID
        },
        quantity: values.SizzleBirdCiderQuantity
      },
      {
        product: {
                _id: SoundsPugetID
        },
        quantity: values.SoundsPugetQuantity
      },
      {
        product: {
                _id: ExtraFoamLimitedEditionID
        },
        quantity: values.ExtraFoamLimitedQuantity
      },
      {
        product: {
                _id: TheKrakenID
        },
        quantity: values.TheKrakenQuantity
      },
      {
        product: {
                _id: SamsBeerID
        },
        quantity: values.SamsBeerQuantity
      }
    ]
  }

  // console.log(newOrder);

  // console.log(user._id);

  function CreateOrder(){
    API.saveOrder(newOrder);
    alert("Your order has been placed! Please refer to the Clients list to look at their order history.");
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter quantity of products desired to purchase
      </Typography>
      {/* <button onClick={checkState}>Click me to check state</button> */}
      <List>
      {/* <button onClick={checkStateAll}>Click me to check state</button> */}
          <ListItem
            className={classes.listItem}
            key="1">
            <ListItemText
              primary="Black Raven Trickster" />
            <Typography
              variant="body2"> $5 </Typography>
            <Typography>
              <TextField
                id="5d6574318debf3d6cb3e549d"
                name="We"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('BlackRavenQuantity')}
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
              primary="Hops Potato" />
            <Typography
              variant="body2">$7.5</Typography>
            <Typography>
              <TextField
                id="5d657d75d2a2ace0a8b4c42b"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('HopsPotatoQuantity')}
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
              primary="Sizzlebird Cider" />
            <Typography
              variant="body2">$8</Typography>
            <Typography>
              <TextField
                id="5d657dc1d2a2ace0a8b4c42d"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('SizzleBirdCiderQuantity')}
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
              primary="Sounds Puget" />
            <Typography
              variant="body2">$8.89</Typography>
            <Typography>
              <TextField
                id="5d657e36d2a2ace0a8b4c42e"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('SoundsPugetQuantity')}
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
              primary="Extra Foam - Limited Edition" />
            <Typography
              variant="body2">$9.19</Typography>
            <Typography>
              <TextField
                id="5d657ebdd2a2ace0a8b4c42f"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('ExtraFoamLimitedQuantity')}
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
              primary="The Kraken" />
            <Typography
              variant="body2">$9.49</Typography>
            <Typography>
              <TextField
                id="5d657eecd2a2ace0a8b4c430"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('TheKrakenQuantity')}
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
            key="7">
            <ListItemText
              primary="Sam's Beer" />
            <Typography
              variant="body2">$14.99</Typography>
            <Typography>
              <TextField
                id="5d68789eaa05cb5e20b390d7"
                name="you"
                label="Quantity Desired"
                value={values.quantity}
                onChange={handleChange('SamsBeerQuantity')}
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
                <Button onClick={CreateOrder}> Click here to submit </Button>
          </Typography>
        </ListItem>
      </List>


      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Client Information
          </Typography>
          <Typography gutterBottom></Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

Review.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Review);