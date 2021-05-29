import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    // FAVORITE: ``,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;