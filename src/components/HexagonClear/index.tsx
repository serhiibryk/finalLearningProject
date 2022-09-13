import React from 'react';
import './index.css';

// const Hex = () => {
//   return <Hexagon className="hexagon" style={{ stroke: 'orange' }} />;
// };

const Hex = (props: any) => {
  const { A, B, content, side = '', ...divProps } = props;

  return (
    <div
      {...divProps}
      className={`hex ${side}`}
      style={{
        // border: '1px solid #000',
        boxSizing: 'border-box',
        height: '100px',
        width: '100px',
        ...props.style,
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
        }}
      >
        <div style={{ rotate: '-90deg' }}>{content}</div>
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
          right: 0,
        }}
      />
    </div>
  );
};
const createBoard = () => {
  const rosLengthList = [18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18];

  return rosLengthList.map((length, rowIndex) =>
    new Array(length).fill({}).map((column, index) => {
      if (index === 15 && rowIndex === 2) {
        return {
          title: 'Test',
          isOpen: false,
          clickable: true,
          lavel: 1,
          position: index,
          icon: <></>,
        };
      }

      return {
        title: '',
        isOpen: false,
        clickable: false,
        lavel: 0,
        position: index,
        icon: <></>,
      };
    })
  );
};

const put = (board: any, rowIndex: number, cellIndex: number, side: string) => {
  const newBoard = board.map((row: any) => [...row]);
  newBoard[rowIndex][cellIndex] = side;
  console.log(newBoard);
  console.log(newBoard.indexOf('A'));
  return newBoard;
};

const changeSide = (side: string) => {
  return side === 'A' ? 'B' : 'A';
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'put':
      return {
        ...state,
        board: put(state.board, action.payload.rowIndex, action.payload.cellIndex, state.currentSide),
        currentSide: changeSide(state.currentSide),
      };
    default:
      return state;
  }
};

const HexagonClear = () => {
  // const classes = useStyles();
  const r = 70;
  const [state, setState] = React.useReducer(reducer, {
    board: createBoard(),
    currentSide: 'A',
  });

  return (
    <div
      className={'App'}
      style={{
        //  width: '1000px',
        marginTop: '35px',
      }}
    >
      <div>
        {state.board.map((row: any, rowIndex: number) => {
          return (
            <div
              key={rowIndex}
              //  className={classes.board}
              style={{
                marginTop: '-9.5px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {row.map((cell: any, cellIndex: number) => (
                <Hex
                  className={'hex'}
                  key={cellIndex}
                  side={cell.position}
                  style={{ height: `${r}px`, width: `${r}px` }}
                  onClick={() =>
                    setState({
                      type: 'put',
                      payload: { rowIndex, cellIndex },
                    })
                  }
                  content={<span>{cell.title}</span>}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HexagonClear;
