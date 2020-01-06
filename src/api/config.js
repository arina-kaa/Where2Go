const config = {
  'host': (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : '',
  'event': {
    'getAll': '/event',
    'getById': '/event/{ID}',
    'add': '/event/add',
  }
};

export { config };