import cookies from 'react-cookie';

// load elements from cookie
const csrftoken = cookies.load('csrftoken');

export { csrftoken }
