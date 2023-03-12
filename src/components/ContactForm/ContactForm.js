import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  Form,
  Label,
  ErrorMessage,
  Field,
  FormSubmit,
} from './ContactForm.styled';
let initialValues = { name: '', number: '' };

let userSchema = object({
  name: string().required(),
  number: string().min(6, 'Minimum 6 symbols').required(),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          Number
          <Field name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </Label>
        <FormSubmit type="submit">Add contact</FormSubmit>
      </Form>
    </Formik>
  );
};
