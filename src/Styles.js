import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';
const Styles = StyleSheet.create({
  posterImage: {
    height: 250,
    width: 180,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  container: {
    // flex: 1,
    display: 'flex',
    paddingTop: 20,
    justifyContent: 'center'
  },

  stylesTouchableOpacity: {
    marginHorizontal: 13
  },

  circle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: 'teal',
    position: 'absolute',
    top: 10,
    left: 130,
    justifyContent: 'center'
  },

  title: {
    marginHorizontal: 13,
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },

  viewVote: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textVote: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textVoteFirst: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  item: {
    fontSize: 18,
    height: 44,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    fontWeight: 'bold'
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
    color : 'black'
  },

  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Styles;