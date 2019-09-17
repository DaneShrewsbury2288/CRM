import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import API from '../utilities/api';
// import values from '../components/Review'; 
import { QuantityState } from '../components/Review';
import { selectedClient } from '../components/AddressForm';
import * as Table from '../components/EditableTable';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Enter a new order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function PurchasingTool(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
   

  console.log(props.user);
  
  const BlackRavenID = '5d6574318debf3d6cb3e549d';
  const HopsPotatoID = '5d657d75d2a2ace0a8b4c42b';
  const SizzlebirdCiderID = '5d657dc1d2a2ace0a8b4c42d';
  const SoundsPugetID = '5d657e36d2a2ace0a8b4c42e';
  const ExtraFoamLimitedEditionID = '5d657ebdd2a2ace0a8b4c42f';
  const TheKrakenID = '5d657eecd2a2ace0a8b4c430';
  const SamsBeerID = '5d68789eaa05cb5e20b390d7';

  const BlackRavenQuantity = QuantityState[QuantityState.length - 1];
  const HopsPotatoQuantity = QuantityState[QuantityState.length - 1].HopsPotatoQuantity;
  const SizzlebirdCiderQuantity = QuantityState[QuantityState.length - 1].BlackRavenQuantity;
  const SoundsPugetQuantity = QuantityState[QuantityState.length - 1].SoundsPugetQuantity;
  const ExtraFoamLimitedEditionQuantity = QuantityState[QuantityState.length - 1].ExtraFoamLimitedEditionQuantity;
  const TheKrakenQuantity = QuantityState[QuantityState.length - 1].TheKrakenQuantity;
  const SamsBeerQuantity = QuantityState[QuantityState.length - 1].SamsBeerQuantity;
  

  function checkState(){
    console.log(QuantityState);
    console.log(QuantityState[QuantityState.length - 1].TheKrakenQuantity);
    console.log(selectedClient[selectedClient.length -1]);
    console.log(Table.rows);
    console.log(newOrder);
    console.log(BlackRavenQuantity);
  }

  const newOrder = {
    client: selectedClient[selectedClient.length -1],
    user: props.user._id,
    lineItems: [
      {
        product: {
                _id: BlackRavenID
        },
        quantity: BlackRavenQuantity
      },
      {
        product: {
                _id: HopsPotatoID
        },
        quantity: HopsPotatoQuantity
      },
      {
        product: {
                _id: SizzlebirdCiderID
        },
        quantity: SizzlebirdCiderQuantity
      },
      {
        product: {
                _id: SoundsPugetID
        },
        quantity: SoundsPugetQuantity
      },
      {
        product: {
                _id: ExtraFoamLimitedEditionID
        },
        quantity: ExtraFoamLimitedEditionQuantity
      },
      {
        product: {
                _id: TheKrakenID
        },
        quantity: TheKrakenQuantity
      },
      {
        product: {
                _id: SamsBeerID
        },
        quantity: SamsBeerQuantity
      }
    ]
  }

  console.log(newOrder);
  

  function CreateOrder(){
    API.saveOrder(newOrder);

  }



  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">

          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  You have created an order.
                </Typography>
                <Typography variant="subtitle1">
                  You can refer to the order created in the client list and then their order history.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                    </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {/* Function on click to check if quantity of products greater than 0, POST create order , update */}
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                    <Button onClick={checkState}>Click me</Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}