import React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

  biscoitoImg:{
    marginTop: 110,
    width: 200,
    height: 200,
  },

  text:{
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    
  },

  textMesage: {
    fontSize: 20,
    marginTop: 15,
    color: 'orange',
    fontStyle: 'italic',
    margin: 20,
    textAlign: 'center',
  },

  button:{
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 200,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 2,
    marginBottom: -35,

  },

  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
  }
});