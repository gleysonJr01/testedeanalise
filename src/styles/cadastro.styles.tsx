import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',  
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
 
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0, 
    left: 0,   
    right: 0, 
    backgroundColor: 'red', 
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '115%', 
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20, 
    marginLeft: -10,
  }
});

export default styles;
