import React, {ChangeEventHandler} from 'react';

type PropsType = {
    title: string
    onChange: (value: string) => void
}

class EditableSpan extends React.Component<PropsType> {
    state = {
        editMode: false,
        title: this.props.title,
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
            editMode: false,
        })
        this.props.onChange(this.state.title)
    }

    onChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.title !== this.state.title) {
            this.setState({
                title: this.props.title
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.title || 'Status is not defined'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input
                        type={'text'}
                        value={this.state.title}
                        onBlur={this.DeactivateEditMode}
                        onChange={this.onChange}
                        autoFocus
                    />
                </div>}
            </div>
        );
    }
}

export default EditableSpan;