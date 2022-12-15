import React, { useEffect } from 'react';
import { useContext } from 'react'
import {themeContext} from '../App'

const s = "";

const getCurrentTheme = (theme) => {
    s = theme;
    return theme;
}


function Config() {
    const { theme } = useContext(themeContext);

    useEffect(()=> {
        console.log("TH", theme);
        getCurrentTheme(theme)
    },[])

    return (
        <div>Config</div>
    )
}

export default Config


/**
 * Colors
 */
export const Colors = {
transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#000000',
  primary: '#2F195F', //temporary
  primaryLight:"#F1E8F4",
  secondary:'#7353ba', //temporary
  secondaryLight: '#7353ba40',
  tertiary:'#fcca03', //temporary
  success: '#28a745',
  error: '#dc3545',
  gray: '#e0e0e0',
  darkGray: '#808080',
  lightGray: '#f5f5f5',
  black:'#000000',


  // DARK THEME
  darkPrimary : "#121212"
}

export const razorPayKey = {
  LIVE_KEY :'rzp_live_sR38iZSC8kB6wx',
  TEST_KEY :'rzp_test_jJOjkgwTJLzLNG',
  // TEST_KEY :'rzp_live_sR38iZSC8kB6wx',
  // LIVE_KEY :'rzp_test_jJOjkgwTJLzLNG'


  KEY_ID : 'rzp_test_6nrzVdGATrNgQD',
  KEY_SECRET : 'f14Et4s8RFEDtXH2mtLwBP2O',
}

export const appVersion = {
  iOS:"3.1.0",
  Android:"5.0.0",
}

export const revenuecatKey = {
  //revenue cat config

  API_KEY : 'NiFShmocfqREVObuUgBbEzHMzMMLKANp',

}


// export const liveBackIcon = <AntDesign name = 'arrowleft' color = 'white' size = {30} />


/**
 * FontSize
 */

export const FontSize = {
    teeny:12,
    tiny:15,
    small:18,
    regular: 20,
    large: 25,
    extraLarge: 35,
  }


  

  /**
 * Metrics Sizes
 */

const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}


// export const Styles = StyleSheet.create({
//   loading: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#F5FCFF99'
//   },

//   above: {
//     position: 'absolute',
//     top: 100,
//     alignItems: 'center',
//     backgroundColor:'#F5FCFF99',...StyleSheet.absoluteFill

//   },

//   loading_HideScreen: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'#FFFFFF'
//   }
// })

export const fontSheet = StyleSheet.create({

    backgroundTheme :{
        backgroundColor :(s == 'DARK') ? 'white' : 'black' 
    },
    textTheme :{
        color :(s == 'DARK') ? 'black' : 'white' 
    },

    /* logo */
    logoText: {
      //fontFamily: 'Comfortaa',
      color: '#ffffff',
      fontSize: 26,
      paddingTop: 10,
      fontWeight: '900',
      letterSpacing: 3
    },

    /* EXTRA LIGHT */
    Thin_Tiny: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.tiny
  
    },
    Thin_Small: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.small

      
  
    },
    Thin_Normal: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.regular

      
  
    },
    Thin_Large: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.large
    },

    /* LIGHT */
    Light_Teeny: {
        //fontFamily: 'Comfortaa',
          fontSize: FontSize.teeny
      
        },
    Light_Tiny: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.tiny
  
    },
    Light_Small: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.small

      
  
    },
    Light_Normal: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.regular

      
  
    },
    Light_Large: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.large
    },
    
    /* Medium */
    Medium_Teeny: {
      //fontFamily: 'Comfortaa',
        fontSize: FontSize.teeny
    
      },
    Medium_Tiny: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.tiny
  
    },
    Medium_Small: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.small

      
  
    },
    Medium_Normal: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.regular

      
  
    },
    Medium_Large: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.large
    },

    /* Normal */

    Normal_Tiny: {
    //fontFamily: 'Comfortaa',
      fontSize: FontSize.tiny
  
    },
    Normal_Small: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.small

      
  
    },
    Normal_Normal: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.regular

      
  
    },
    Normal_Large: {
      //fontFamily: 'Comfortaa',
      fontSize: FontSize.large
    },

     /* Bold */

     Bold_Tiny: {
      //fontFamily: 'Comfortaa-Bold',
      fontSize: FontSize.tiny
      
        },
        Bold_Small: {
          //fontFamily: 'Comfortaa-Bold',
          fontSize: FontSize.small
    
          
      
        },
        Bold_Normal: {
          //fontFamily: 'Comfortaa-Bold',
          fontSize: FontSize.regular,
          marginBottom:10
    
          
      
        },
        Bold_Large: {
          //fontFamily: 'Comfortaa-Bold',
          fontSize: FontSize.large
        },

        SemiBold: {
          //fontFamily: 'Comfortaa-Bold',
        },
        ExtraBold: {
          //fontFamily: 'Comfortaa-Bold',
        },
        ExtraLight: {
          //fontFamily: 'Comfortaa',
        },
        Black : {
          //fontFamily: 'Comfortaa',
        }
    
  });