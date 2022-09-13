import React, { FC } from 'react';

// import useStyles from './style';

const Hex: FC<HexProps> = ({ content, cell, size, onClick }) => {
  // const classes = useStyles();
  const bgColor = cell.backgroundColor || '#FFF';

  return (
    <div
      className={'hex'}
      onClick={onClick}
      style={{
        // border: '1px solid #000',
        height: `${size}px`,
        width: `${size}px`,
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: '100%',
      }}
    >
      <div
        style={{
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000',
          boxSizing: 'border-box',
          width: 70 / Math.sqrt(3) + 'px',
          height: '100%',
          margin: '0 auto',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: 'rotate(90deg)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
          zIndex: 10,
        }}
      >
        <div style={{ rotate: '-90deg', position: 'relative', zIndex: 1 }}>{content}</div>
      </div>
      <div
        style={{
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000',
          boxSizing: 'border-box',
          width: 70 / Math.sqrt(3) + 'px',
          height: '100%',
          margin: '0 auto',
          transform: 'rotate(150deg)',
          transformOrigin: 'center center',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: bgColor,
          right: 0,
        }}
      />
      <div
        style={{
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000',
          boxSizing: 'border-box',
          width: 70 / Math.sqrt(3) + 'px',
          height: '100%',
          margin: '0 auto',
          transform: 'rotate(210deg)',
          transformOrigin: 'center center',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: bgColor,
          right: 0,
        }}
      />
    </div>
  );
};

export default Hex;
