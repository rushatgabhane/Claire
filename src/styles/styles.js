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
  redBox: {
    width: 500,
    height: 500,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 500,
    height: 500,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 500,
    height: 500,
    backgroundColor: 'green',
  },
  yellowBox: {
    width: 500,
    height: 500,
    backgroundColor: 'yellow',
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
};

export default styles;