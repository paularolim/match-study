import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  none: { display: 'none' },
  body: {
    backgroundColor: '#7E549F',
    height: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    fontFamily: 'Poppins-Regular',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    color: '#f2f2f2',
    fontFamily: 'Poppins-Bold',
  },
  alertDanger: {
    backgroundColor: '#f8d7da',
    textAlign: 'center',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Poppins-Regular',
    color: '#721c24',
  },
  label: {
    marginBottom: 4,
    fontSize: 18,
    color: '#f2f2f2',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#f2f2f2',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#FFCB3E',
    borderRadius: 10,
    padding: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#7E549F',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  actions: {
    marginTop: 15,
  },
  actionText: {
    textAlign: 'center',
    color: '#f2f2f2',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  actionLink: {
    color: '#FFCB3E',
  },
  footer: {
    width: '100%',
    display: 'flex',
    marginTop: '10%'
  },
  buttonBorder: {
    borderColor: '#FFCB3E',
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  buttonBorderText: {
    textAlign: 'center',
    color: '#FFCB3E',
    fontFamily: 'Poppins-Bold',
  },
});

export default style;
