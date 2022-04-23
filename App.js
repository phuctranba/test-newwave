import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Home} from "./src/screens/home";


const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor={"#fff"} barStyle={'dark-content'}/>
            <Home/>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
