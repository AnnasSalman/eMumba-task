import axios from 'axios';
axios.defaults.headers.common['app-id'] = '6157fe0e0652484099efbda7';

const getUsersUrl = 'https://dummyapi.io/data/v1/user';

export const getUsersApi = (page) => {
    return axios.get(getUsersUrl, {
        params: {
            limit: 10,
            page: page,
        },
    });
}

export const getFullUserApi = (id) => {
    return axios.get(`${getUsersUrl}/${id}`);
}

export const getPostsApi = (id) => {
    return axios.get(`${getUsersUrl}/${id}/post`);
}
