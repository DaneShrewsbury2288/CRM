import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function TeamModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Grid container>
                <Grid item lg={3}></Grid>
                <Grid item lg={6}>
                    <Card className="card">
                        <CardContent>
                            <Grid container spacing={5}>
                                <Grid item lg={4}>
                                    <Typography className="title" color="textSecondary" gutterBottom>
                                        Sales
                                        </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="h5" component="h2">
                                        <ListItemAvatar>
                                            <Avatar alt={props.fullName} src={props.userImage} />
                                        </ListItemAvatar>
                                        {props.fullName}
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography className="pos" color="textSecondary">
                                        Employed since {props.startDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={5}>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h2">
                                        Revenue Generated: {props.totalSales}
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h2">
                                        Number of Sales: {props.numSales}
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h3">
                                        Most recent sale: {props.lastSaleDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={5}>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h2">
                                        Average Sale: {props.averageSale}
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h2">
                                        Sales in last 30 days: {props.lastMonthSales}
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="body2" component="h2">
                                        Most sold product: {props.popularProduct}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3}></Grid>
            </Grid>
        </Modal>
    )
}

export default TeamModal;