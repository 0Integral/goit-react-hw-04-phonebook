import styled from 'styled-components';

import {
  Form as FormF,
  ErrorMessage as FormikError,
  Field as FieldF,
} from 'formik';

export const Form = styled(FormF)`
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  font-weight: 700;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-weight: 400;
`;

export const Field = styled(FieldF)`
  width: 60%;
`;

export const FormSubmit = styled.button`
  width: 25%;
`;
