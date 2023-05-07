import ImageColors from 'react-native-image-colors'


export const getImageColors= async (uri : string) =>{
    const colors= await ImageColors.getColors(uri, {
        fallback:"#084f6a"
    })

    let primary 
    let secondary

    if(colors.platform === "android"){
        primary=colors.vibrant,
        secondary=colors.average
        
    } else if( colors.platform === "ios"){
        primary=colors.primary,
        secondary=colors.detail
    }

    return [primary, secondary]
}