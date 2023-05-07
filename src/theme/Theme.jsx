import {StyleSheet} from 'react-native'

export const theme ={
    light:{
        background:{
            main: "#fff",
            secondary:"#eee"
        }
    },
    dark:{
        background:{
            main: "#0A0A0A"
        }
    }

}

export const styles = StyleSheet.create({
    loadingSpinnerContainer:{
        flex: 1,
        justifyContent:'center',
        alignContent:'center'
    },

    homePosterContainer:{
        marginHorizontal:8
    },
    
    homePosterShadow:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius:15
        
    },
    
    homePosterImage: {
        flex:1,
        borderRadius:15
    },

    detailMoviePosterContainer:{
        width:'100%',
        overflow:'hidden',
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    detailMoviePoster:{
        flex:1
    },

    detailsTextCont:{
        marginHorizontal:20,
        marginTop:20
    },

    detailsTitle:{
        fontSize:20,
        fontWeight:'bold'
    },

    detailsSubTitleContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        overflow:'scroll',
        
    },

    detailsSubTitle:{
        fontSize:18
    },

    detailInfoContainer:{
        marginTop:10,
        gap: 15
    },

    castCard:{
        marginVertical:15, 
        marginLeft:20, 
        paddingRight:20, 
        borderRadius:10, 
        backgroundColor:theme.light.background.main, 
        overflow:'hidden',
        alignItems:'center', 
        flexDirection:'row', 
        gap: 15,
        overflow:'hidden',
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    castCardText:{
        fontSize:14
    },


})