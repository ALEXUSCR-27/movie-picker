import axiosService from "./axios_service";
import { movie_title_param } from "../types/params";
import { card_data } from "../types/params";

export const getMovies = async (movie_title:movie_title_param) => {
    try {
        const response = await axiosService.post<card_data[]>(`/search_movies`, movie_title);
        return response;
    }
    catch(error) {
        console.log(error)
    }
};