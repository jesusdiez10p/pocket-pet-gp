import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  camera:{
      flex: 1,
      backgroundColor: 'black',
      aspectRatio: 9/16,
  },
  bottomBarContainer:{
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      marginBottom: 30,
      alignItems: 'center'
  },

  takePhotoButtonContainer:{
      flex: 1,
      marginHorizontal: 30
  },
  takePhotoButton:{
      borderWidth: 8,
      borderColor: 'gold',
      backgroundColor: 'white',
      borderRadius: 100,
      height: 80,
      width: 80,
      alignSelf: 'center'
  },
  galleryButton: {
      borderWidth: 2,
      borderColor: 'gold',
      borderRadius: 10,
      overflow: 'hidden',
      width: 50,
      height: 50,
  },
  galleryButtonImage:{
    width: 50,
    height: 50,
  },
  sideBarContainer:{
      top: 60,
      marginHorizontal: 20,
      right: 0,
      position: 'absolute'
  },
  iconText:{
      color: 'white',
      fontSize: 12,
      marginTop: 5,
      marginBottom: 20
  },
  sideBarBotton:{
      alignItems: 'center',
      marginBottom: 25
  }
});

export default styles;