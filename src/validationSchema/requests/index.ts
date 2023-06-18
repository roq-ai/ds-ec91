import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
