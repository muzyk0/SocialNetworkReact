import React, {ChangeEventHandler} from 'react';
import {usersAPI} from '../../../API/api';

class EditableSpan extends React.Component {
    componentDidMount() {
        usersAPI.getProfileStatus('2')
            .then(response => {

            })
    }

    state = {
        editMode: false,
        status: '',
    }

    activateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: true,
        })
    }
    DeactivateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: true,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>status</span>
                </div>}
                {this.state.editMode && <div>
                    <input
                        type={'text'}
                        value={this.state.status}
                        onBlur={this.DeactivateEditMode}
                        onChange={() => {}}
                        autoFocus
                    />
                </div>}
            </div>
        );
    }
}

export default EditableSpan;