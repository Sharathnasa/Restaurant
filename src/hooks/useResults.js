import {useEffect, useState} from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (defaultSearchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 5,
                    term: defaultSearchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setError('Something Went Wrong')
        }
    };

    //it will make sure to call when UI renders for the first time or whenever values gets change. Based on the requirement
    useEffect(() => {
        searchApi('pasta').then(r => {
            console.log("yo")
        });
    }, []);

    return [searchApi, results, error];
};
