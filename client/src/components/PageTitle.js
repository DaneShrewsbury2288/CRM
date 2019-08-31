import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const PageStyles = makeStyles(theme => ({
    pageTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(5),
      },
      typo: {
        color: theme.palette.text.hint,
      },
}))

export default function PageTitle(props) {
  var classes = PageStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h3" size="sm">
        {props.title}
      </Typography>
    </div>
  );
}