import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       sendMessage: (newMessageBody) => {dispatch(sendMessageCreator(newMessageBody))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);