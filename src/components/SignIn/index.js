import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormH1,
  FormButton,
  FormInput,
  FormLabel,
  Form,
  Text,
} from './SignInElements';

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password ?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
