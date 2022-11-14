import React from 'react';
import RegisterForm, {RegisterFormData} from ../components/Register.js;

const RegistrationView = () => {
    const onSubmit = (data: RegisterFormData) => {
        const registerRequest = async () =>{
            const  response = await  fetch();
        };
        registerRequest();
        console.log('fetch',data)
    }
}