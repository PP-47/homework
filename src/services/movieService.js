import axios from "axios";

const apikey = 'b1f8474699224ee081d207b868d8e8cb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async(setectedYear , selectePage) => {
    try {
        const url = `${BASE_URL}/discover/movie`;
        const params = {
            api_key: apikey,
            inclde_adult: false,
            language: 'en-US',
            year:setectedYear,
            page: selectePage
        };
        const res = await axios.get( url , {params} );
        return res.data;
    } catch (error) {
        console.log("ผิดพลาดในการขอข้อมูล" , error);
        throw error;
    }
}
