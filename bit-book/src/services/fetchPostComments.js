import { API_BASE_URL } from '../shared/constants';

const fetchPostComments = () => {
    return fetch(`${API_BASE_URL}/posts?_embed[]=comments&_expand[]=user`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    }).then(response => response.json())
        .then(dataArray => {
            const fewData = dataArray
                .map(data => {
                    return data;
                })
            return fewData;
        })
}

export default fetchPostComments;

