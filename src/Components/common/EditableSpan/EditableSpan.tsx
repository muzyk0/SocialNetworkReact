import React, { ChangeEvent, useState } from "react";

type PropsType = {
    title: string;
    onChange: (value: string) => void;
};

const EditableSpan: React.FC<PropsType> = React.memo((props) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState<string>("");

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    };
    const DeactivateEditMode = () => {
        setEditMode(false);
        props.onChange(title);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false);
            props.onChange(title);
        }
    };

    return (
        <div>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.title || "Status is not defined"}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        type={"text"}
                        value={title}
                        onBlur={DeactivateEditMode}
                        onChange={onChange}
                        onKeyPress={onEnter}
                        autoFocus
                    />
                </div>
            )}
        </div>
    );
});

export default EditableSpan;
