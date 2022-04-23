import {API_KEY, API_MOVIE, PARAM_API_KEY, PARAM_PAGE_KEY} from "../utis/constants/servicesConstants";

export async function loadMovies(page: number = 1) {
    return fetch(API_MOVIE + new URLSearchParams({
        [PARAM_API_KEY]: API_KEY,
        [PARAM_PAGE_KEY]: page
    }), {
        method: 'GET',
    })
        .then(response => response.json())
        .then(({totalPages, results}) => {
            return {totalPages: totalPages, data: results}
        });
}
