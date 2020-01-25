import React from 'react';
import {login, register} from '../../api/user';
import {useHistory} from 'react-router-dom';

const UserRegister = () => {
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    register(formElements).then(res => {
      if (!res.error) {
        login(formElements).then(res => {
          if (res) {
            history.push('/user/profile');
          }
        });
      }
    });
  };

  return (
    <div className='container'>
      <h1>Добавление пользователя</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group row'>
          <label htmlFor='first_name' className='col-sm-2 col-form-label'>Имя</label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id='first_name' placeholder='Имя'/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='last_name' className='col-sm-2 col-form-label'>Фамилия</label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id='last_name' placeholder='Фамилия'/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='email' className='col-sm-2 col-form-label'>Email</label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id='email' placeholder='Email'/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='password' className='col-sm-2 col-form-label'>Пароль</label>
          <div className='col-sm-10'>
            <input type='password' className='form-control' id='password' placeholder='Пароль'/>
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-sm-10'>
            <button type='submit' className='btn btn-success'>Зарегистрироваться</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default UserRegister;