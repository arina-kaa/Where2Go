const config = {
  'host': (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : '',
  'event': {
    'getAll': '/event',
    'getById': '/event/{ID}',
    'getMultipleByIds': '/event/multipleByIds',
    'add': '/event/add',
  },
  'user': {
    'register': '/user/register',
    'update': '/user/update',
    'login': '/user/login',
    'profile': '/user/profile'
  }
};

export { config };