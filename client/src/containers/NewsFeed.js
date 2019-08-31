import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import Kanban from "../components/Kanban";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const styles = theme => ({
  root: {
      display: 'flex',
  },
  kanban: {
    height: 500
  }
});


class NewsFeed extends Component {
  render(){
    const { classes } = this.props;
    const KanbanHeight = clsx(classes.kanban);

    return (
        <div>
        <PageTitle title="News Feed" />
        <Kanban className={KanbanHeight} />
       </div>
    );
    }
  }

export default withStyles(styles)(NewsFeed);