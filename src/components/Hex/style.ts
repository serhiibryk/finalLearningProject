import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .inner-block': {
      borderTop: '0.9px solid #e3e3e8',
      borderBottom: '0.9px solid #e3e3e8',
    },

    '&.level1': {
      zIndex: '10',

      '& .inner-block': {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
      },

      '&.isActive': {
        transform: 'scale(1.5)',
        zIndex: '11 !important',

        '& .inner-block': {
          borderTop: '1px solid #4991ff',
          borderBottom: '1px solid #4991ff',
        },
      },
    },

    '&.level2': {
      '&.isActive': {
        // borderTop: '1px solid blue',
        // borderBottom: '1px solid blue',

        '& .inner-block': {
          borderTop: '2px solid #2278fa',
          borderBottom: '2px solid #2278fa',
        },
      },
    },
  },
  board: {},
});

export default useStyles;
