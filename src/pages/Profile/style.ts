import { createUseStyles } from 'react-jss';
import { pallet } from '../../utils';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: '15px',
    margin: '15px',
    width: '100%',
    maxWidth: '98%',
    border: 'none',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).dark,
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,

    '& .ant-card-meta-title': {
      padding: '0 0 0 40px',
      fontStyle: 'italic',
      fontSize: '23px',
      fontWeight: 'lighter',
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },
  textP: {
    fontStyle: 'italic',
    fontSize: '23px',
    fontWeight: 'lighter',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
  spiner: {
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '400px',
  },
  graphics: {},
  graphicsOneTwo: {
    display: 'flex',
    flexWrap: 'row',
  },
  graphicsThreeFour: {
    display: 'flex',
    flexWrap: 'row',
  },
  buttonsModal: {
    width: '100%',
  },
  buttonAntModal: {
    backgroundColor: 'grey',
    width: '49%',
  },
  buttonReactModal: {
    backgroundColor: 'grey',
    width: '49%',
  },
  modalAnt: {
    width: '100%',
    top: '0px',
    maxWidth: 'none',
    paddingBottom: '0px',
    height: '100vh',
  },

  graphicOne: {
    width: '48%',
  },
  graphicTwo: {
    width: '36%',
  },
  graphicThree: {
    width: '48%',
  },
  graphicFour: {
    width: '48%',
  },
  containerBox: {},
  smallContainer: {
    margin: '0 auto',
    width: '600px',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    background: 'red',
    width: '600px',
    height: '450px',
  },
  // buttons: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  // },
  // arrowLeft: {
  //   display: 'flex',
  //   width: '70px',
  //   height: '30px',
  // },
  // arrowRight: {
  //   display: 'flex',
  //   width: '70px',
  //   height: '30px',
  // },
  img: {
    border: 'none',
    borderColor: 'grey',
    width: '600px',
    objectFit: 'cover',
    // minWidth: '300px',
    // minHeight: '300px',
    // maxWidth: '600px',
    // maxHeight: '600px',
  },
});

export default useStyles;
