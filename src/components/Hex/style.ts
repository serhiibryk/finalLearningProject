import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .inner-block': {
      borderTop: '1px solid #000',
      borderBottom: '1px solid #000',
    },

    '&.level1': {
      zIndex: '10',

      '&.isActive': {
        transform: 'scale(1.5)',
        zIndex: '11 !important',
      },
    },

    '&.level2': {
      '&.isActive': {
        borderTop: '1px solid red',
        borderBottom: '1px solid red',

        '& .inner-block': {
          borderTop: '1px solid red',
          borderBottom: '1px solid red',
        },
      },
    },
  },
  board: {},
});

export default useStyles;
