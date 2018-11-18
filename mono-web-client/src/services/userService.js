import axios from 'axios'

export const UserService = {
        getUser(userId, jwt) {
            return axios.get(`http://localhost:9001/api/v1/users/${userId}/avatar`, {headers: {"Authorization": jwt}})
                .then(res => {
                    console.log('forum user: ' + JSON.stringify(res));
                    return res.data;
                }).catch(err => err)
        }
};