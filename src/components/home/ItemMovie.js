import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image'
import {DOMAIN_IMAGE} from "../../utis/constants/servicesConstants";
import LinearGradient from 'react-native-linear-gradient';
import {placeholderImg} from "../../assets";

export const HEIGHT_ITEM = 260;

export const ItemMovie = ({itemMovies}) => {
    const {poster_path, release_date, title, vote_average} = itemMovies;
    const yearRelease = new Date(release_date).getFullYear();

    return (
        <View style={styles.container}>
            <View style={styles.viewItem}>
                <ImageBackground
                    style={styles.image}
                    source={placeholderImg}>
                    <FastImage
                        style={styles.image}
                        source={{
                            uri: DOMAIN_IMAGE + poster_path
                        }}/>
                </ImageBackground>


                <View style={styles.viewInfo}>

                    <LinearGradient style={styles.lgVoteAverage}
                                    colors={['#f89d12', '#d01f55']}
                                    start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                        <View style={styles.viewVoteAverage}>
                            <Text style={styles.txtVoteAverageIntScore}>{parseInt(vote_average)}</Text>

                            {vote_average.toString().split(".").length > 1 &&
                                <Text
                                    style={styles.txtVoteAverage}>{"." + vote_average.toString().split(".")[1]}</Text>}
                        </View>
                    </LinearGradient>

                    <LinearGradient style={styles.lgBgTitle}
                                    colors={['#00000000', '#000']}
                                    start={{x: 1, y: 0}} end={{x: 1, y: 1}}/>

                    <Text style={styles.txtReleaseYear}>{yearRelease}</Text>
                    <Text style={styles.txtTitle}>{title}</Text>
                </View>
            </View>

        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        height: HEIGHT_ITEM
    },
    viewItem: {
        margin: '8@s',
        borderRadius: "6@ms",
        backgroundColor: '#00000000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '3@ms',
        },
        shadowOpacity: 0.25,
        shadowRadius: "3.65@ms",
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: "6@ms"
    },
    viewInfo: {
        position: 'absolute',
        justifyContent: 'flex-end',
        width: '100%',
        height: "100%",
        padding: "10@s",
    },
    txtReleaseYear: {
        color: '#fff',
        fontSize: '16@ms0.3'
    },
    txtTitle: {
        color: '#fff',
        fontSize: '18@ms0.3',
        fontWeight: '700'
    },
    lgVoteAverage: {
        position: 'absolute',
        top: "10@s",
        right: "10@s",
        width: "32@ms",
        height: "32@ms",
        borderRadius: "16@ms",
        justifyContent: 'center',
        alignItems: 'center'
    },
    lgBgTitle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: "100@ms",
        borderRadius: "6@ms",
    },
    viewVoteAverage: {
        flexDirection: 'row',
    },
    txtVoteAverageIntScore: {
        color: '#fff',
        fontSize: '20@ms0.3',
        fontWeight: '700',
        includeFontPadding: false
    },
    txtVoteAverage: {
        color: '#fff',
        fontSize: '14@ms0.3',
        fontWeight: '400',
    }
});
