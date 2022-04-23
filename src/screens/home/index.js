import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {loadMovies} from "../../services/moviesServices";
import {HEIGHT_ITEM, ItemMovie} from "../../components/home/ItemMovie";
import styles from './style';

export const Home = () => {

    const [isLoadAll, setIsLoadAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataMovies, setDataMovies] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);


    useEffect(() => {
        loadData(currentPage);
    }, [])

    const onRefreshData = useCallback(async () => {
        setRefreshing(true);
        setIsLoadAll(false);
        await loadData(1);
        setRefreshing(false);
    }, [])

    const onLoadMoreData = () => {
        if (!isLoadAll)
            loadData(currentPage + 1, dataMovies);
    }

    const loadData = async (page, currentData = []) => {
        let dataFirstPage = await loadMovies(page);
        if (dataFirstPage.totalPages === page)
            setIsLoadAll(true);
        setCurrentPage(page);
        setDataMovies([...currentData, ...dataFirstPage.data]);
    }

    const renderItemMovies = useCallback(({item}) => {
        return <ItemMovie itemMovies={item}/>
    }, []);

    const keyExtractor = useCallback((item) => item.id, []);

    const getItemLayout = useCallback((data, index) => ({
        length: HEIGHT_ITEM,
        offset: HEIGHT_ITEM * index,
        index
    }), []);
    console.log(dataMovies.length)
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitleList}>Popular list</Text>
            <FlatList data={dataMovies}
                      extraData={dataMovies}
                      numColumns={2}
                      keyExtractor={keyExtractor}
                      getItemLayout={getItemLayout}
                      renderItem={renderItemMovies}
                      contentContainerStyle={styles.contentContainerStyle}
                      removeClippedSubviews={true}
                      onEndReached={onLoadMoreData}
                      onEndReachedThreshold={0.1}
                      onRefresh={onRefreshData}
                      refreshing={refreshing}
            />
        </View>
    );
};
