import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    //state hooks
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResult = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    };

    return (
        <>
            <SearchBar searchTerm={searchTerm}
                       onSearchTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                       onSearchTermSubmit={() => searchApi(searchTerm)}>
            </SearchBar>
            {error ? <Text>{error}</Text> : null}

            <ScrollView>
                <ResultsList title={"Cost Effective"}
                             results={filterResult('$')}
                />
                <ResultsList title={"Big Pricier"}
                             results={filterResult('$$')}
                />
                <ResultsList title={"Big Spender"}
                             results={filterResult('$$$')}
                />
            </ScrollView>
        </>);
};

const styles = StyleSheet.create({});

export default SearchScreen;
