import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCommentIcon from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(2),
        width: 35,
        height: 32,
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles2 = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        textAlign: 'center',
        width: 1200,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const useStyles3 = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 1000,
        minHeight: 500,
    },
  }));

function createData(name, comment, date) {
    return { name, comment, date};
  }
  
  const rows = [ 
    createData('Anthony', "Ask for George. George likes basketball.", "02/20/2019"),
    createData('Anthony', "Clippers 2020", "03/20/2019"),
  ]


export default function ClientAddComment(props) {

    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="Add" aria-label="add" onClick={handleOpen}>
                <Fab style={{backgroundColor: '#313131'}}  color="primary" className={classes.fab}>
                    <AddCommentIcon />
                </Fab>
            </Tooltip>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes2.paper}>
                    <h2 id="simple-modal-title">Comments</h2>

                    <Paper className={classes3.root}>
                        <Title> {props.clientName} </Title>
                        <Table className={classes3.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Sales Associate Name</TableCell>
                                    <TableCell align="right">Comment</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.comment}</TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>

                </div>
            </Modal>
        </div>
    );
}