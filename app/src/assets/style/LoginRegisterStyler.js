import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  body: {
    backgroundColor: '#7E549F',
    height: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  title: {
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#f2f2f2',
  },
  label: {
    marginBottom: 2,
    fontSize: 18,
    color: '#f2f2f2',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 5,
    color: '#f2f2f2',
  },
  button: {
    backgroundColor: '#FFCB3E',
    borderRadius: 10,
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
  },
  actions: {
    marginTop: 15,
  },
  actionText: {
    textAlign: 'center',
    color: '#f2f2f2',
    fontSize: 15,
  },
  actionLink: {
    color: '#FFCB3E',
  },
});

export default style;