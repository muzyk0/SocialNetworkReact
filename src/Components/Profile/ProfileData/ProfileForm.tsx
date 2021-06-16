import {ProfileType} from '../../../redux/profile-reducer';
import React from 'react';
import styles from './ProfileData.module.css';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    fullName: yup.string().required(),
    lookingForAJobDescription: yup.string().required(),
    aboutMe: yup.string().required(),
})

interface ProfileFormType {
    initialValues: ProfileType
    onSubmit: (value: ProfileType) => void
}

export const ProfileForm: React.FC<ProfileFormType> = props => {
    const {initialValues, onSubmit} = props

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <button type={'submit'}>Save</button>
                </div>
                <div>
                    <div>
                        <b>Full name</b>:
                    </div>
                    <div>
                        <Field name={'fullName'}/>
                    </div>
                    <div>
                        <ErrorMessage name="fullName"/>
                    </div>
                </div>


                <div>
                    <p><b>Looking for a job</b>:
                        <Field type={'checkbox'} name={'lookingForAJob'}/>
                        <div>
                            <ErrorMessage name="lookingForAJob"/>
                        </div>
                    </p>
                    <p><b>My professional skills</b>:
                        <div>
                            <Field type={'textarea'} name={'lookingForAJobDescription'}/>
                        </div>
                        <ErrorMessage name="lookingForAJobDescription"/>
                    </p>
                </div>


                <div>
                    <h3>About me:</h3>
                    <div>
                        <Field name={'aboutMe'}/>
                        <ErrorMessage name="lookingForAJobDescription"/>
                    </div>
                </div>
                <div>
                    <h3>My contacts:</h3>
                    <div className={styles.contacts}>
                        {initialValues && Object.keys(initialValues.contacts)
                            .map(key => <div key={key} className={styles.contacts}>
                                <b>{key}</b>:
                                <Field name={`contacts.${key}`} placeholder={key}/>
                            </div>)}
                    </div>
                </div>
            </Form>
        </Formik>
    )
}