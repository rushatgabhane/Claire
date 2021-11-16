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
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
  },
  iconBoxList: {
    alignItems: 'center',
    elevation: 1,
    overflow: 'visible',
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
  verticalSeperator: {
    backgroundColor: colors.grey,
    width: 4,
    height: 550,
  },
  horizontalSeperator: {
    backgroundColor: colors.grey,
    height: 4,
    // position: 'absolute',
  },
  infoBox: {
    height: 130,
    backgroundColor: colors.secondary,
    textAlign: 'center',
    alignItems: 'center',
  },
  infoBoxText: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  pillBox: {
    width: 140,
    height: 46,
    borderRadius: 25,
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: colors.complement,
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 23,
    elevation: 1000,
  },
  pillBoxParent: {
    height: 0,
    width: '100%',
    margin: 0,
    padding: 0,
  },
  arrows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
};

export default styles;
