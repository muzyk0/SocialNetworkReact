import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { FilterUserType } from "../../redux/users-reducer";

interface userSearchFormProps {
    onFilterChanged: (filter: FilterUserType) => void;
}

export const UserSearchForm: React.FC<userSearchFormProps> = React.memo(
    ({ onFilterChanged }) => {
        const onSubmit = (
            values: FilterUserType,
            { setSubmitting }: FormikHelpers<FilterUserType>
        ) => {
            onFilterChanged(values);

            setSubmitting(false);
        };

        return (
            <div>
                <Formik<FilterUserType>
                    initialValues={{
                        term: "",
                        friend: null,
                    }}
                    onSubmit={onSubmit}
                >
                    {({ values, isSubmitting, setFieldValue }) => (
                        <Form>
                            <Field name="term" type="input" />
                            <Field
                                name="friend"
                                as="select"
                                value={values.friend}
                                onChange={({
                                    currentTarget: { value },
                                }: React.ChangeEvent<HTMLInputElement>) => {
                                    setFieldValue(
                                        "friend",
                                        value === "null"
                                            ? null
                                            : value === "true"
                                            ? true
                                            : false
                                    );
                                }}
                            >
                                <option value="all">All</option>
                                <option value="true">Only friend</option>
                                <option value="false">Only unfollowed</option>
                            </Field>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
);
