import React, {useState} from 'react';
import {login} from '../../api/user';
import {Link, useHistory} from 'react-router-dom';

const UserLogin = () =>
{
    let history = useHistory();
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);

    const onSubmit = (e) =>
    {
        e.preventDefault();
        login(e.target.elements)
            .then(res =>
            {
                if (res) history.push('/user/profile');
            });
    };

    const highlightElement = (expr, element) =>
    {
        if (!expr) document.getElementById(element.name).classList.add('is-invalid');
        else {
            document.getElementById(element.name).classList.remove('is-invalid');
            switch (element.name)
            {
                case 'email':
                    if (isPasswordValid) document.getElementById('submitButton').removeAttribute('disabled');
                    break;
                case 'password':
                    if (isEmailValid) document.getElementById('submitButton').removeAttribute('disabled');
                    break;
                default:
                    break;
            }
        }
    };

    const validateElement = (e) =>
    {
        let isFieldValid;
        switch (e.target.name)
        {
            case 'email':
                const reg = /^([\w._-]+)@([\w-]+\.)+([\w]{2,})$/i;
                isFieldValid = reg.test(e.target.value);
                setEmailValid(isFieldValid);
                highlightElement(isFieldValid, e.target);
                break;
            case 'password':
                isFieldValid = e.target.value.length >= 4;
                setPasswordValid(isFieldValid);
                highlightElement(isFieldValid, e.target);
                break;
        }
    };

    return (
        <div className='container'>
            <h1>Войти в систему</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group row'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>Email</label>
                    <div className='col-sm-10'>
                        <input type='text' className='form-control' id='email' name='email' placeholder='Email'
                               onChange={validateElement} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='password' className='col-sm-2 col-form-label'>Пароль</label>
                    <div className='col-sm-10'>
                        <input type='password' className='form-control' id='password' name='password'
                               placeholder='Пароль' onChange={validateElement} />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className='col-sm-10'>
                        <button type='submit' disabled id='submitButton' className='btn btn-success'>Войти</button>
                    </div>
                </div>
            </form>
            <p>У Вас еще нет аккаунта? <Link to='/user/register'>Зарегистрироваться</Link></p>
        </div>
    )
};

export default UserLogin;