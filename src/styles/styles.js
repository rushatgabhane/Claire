import {colors} from "../theme";
const styles = {
  container: {
    flex: 1,
  },
  camera: {
    height: 400,
    width: 300,
    // top: -100,
    // position: 'absolute'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  allIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
  },
  iconBoxList: {
    alignItems: 'center',
  },
  iconImage: {
    height: 40,
    width: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
    // fontWeight: 'bold',
    color: colors.black,
  },
  w50: {
    width: '50%',
  },
  seperator: {
    backgroundColor: colors.secondary,
    width: 4,
  }
};

export default styles;
