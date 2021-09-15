import axios from 'axios';

const API_CALL = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records';

const EventService = {
    
    async fetchAll(sortValue, limitValue, searchValue) {
        let url = `${API_CALL}?sort=${sortValue}&limit=${limitValue}`;

        if (searchValue) {
            url += `&search=${searchValue}`;
        }

        try {
            const response = await axios
                .get(url);
            return response.data.records;
        } catch (err) {
            return errorHandler(err);
        }
    },

    
    async fetchId(id) {
        let url = `${API_CALL}/${id}`;
        try {
            const response = await axios
                .get(url);
            return response.data.record;
        } catch (err) {
            return errorHandler(err);
        }
    },
};

const errorHandler = (err) => {
    console.log(err);
};

export default EventService;