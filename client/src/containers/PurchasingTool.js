import React from "react";
import PageTitle from "../components/PageTitle";
import PTool from "../components/PTool";
import PropTypes from "prop-types";
import { connect } from "react-redux";




function PurchasingTool(props) {
    const { user } = props.auth;
    return (
        <div>
         <PageTitle title="Purchasing Tool"/>
         <PTool user={user}/>
        </div>
    )
};


PurchasingTool.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(PurchasingTool);