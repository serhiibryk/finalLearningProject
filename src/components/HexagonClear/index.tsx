import React, { useMemo, useState } from 'react';

import Hex from '../Hex';

import useStyles from './style';
import './index.css';
const DEFAULT_CELL: HexCell = {
  title: '',
  isOpen: false,
  clickable: false,
  level: 0,
  icon: <></>,
  interactiveCases: [],
  backgroundColor: '',
};
const generateBoard = (activeCase: string): HexCell[][] => {
  return [
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: 'Text1',
              isOpen: false,
              clickable: true,
              level: 2,
              icon: <></>,
              interactiveCases: [],
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 1,
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Banking and Financial Services',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: 'Text2',
              isOpen: false,
              clickable: true,
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test1',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: ['0+12', '1+12', '2+13', '3+12'],
        icon: <></>,
        backgroundColor: '#234532',
      },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: 'Text3',
              isOpen: false,
              clickable: true,
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 1,
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        interactiveCases: [],
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 1,
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase):
            return {
              title: 'Text4',
              isOpen: false,
              clickable: true,
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#321312',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              interactiveCases: [],
              clickable: false,
              level: 1,
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              interactiveCases: [],
              clickable: false,
              level: 1,
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              interactiveCases: [],
              title: '',
              isOpen: false,
              clickable: false,
              level: 1,
              icon: <></>,
              backgroundColor: '#787887',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        interactiveCases: [],
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        interactiveCases: [],
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        interactiveCases: [],
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      {
        interactiveCases: [],
        title: 'Test',
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        interactiveCases: [],
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      {
        title: 'Test',
        isOpen: false,
        clickable: true,
        interactiveCases: [],
        level: 1,
        icon: <></>,
        backgroundColor: '#234532',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
  ];
};

const HexagonClear = () => {
  const classes = useStyles();
  const size = 70;
  const [activeCase, setActiveCase] = useState('');

  const board = useMemo(() => generateBoard(activeCase), [activeCase]);

  const selectCell = (rowIndex: number, cellIndex: number) => {
    board.forEach((row, currRowIndex) =>
      row.forEach((column, currCellIndex) => {
        if (column.clickable && rowIndex === currRowIndex && currCellIndex === cellIndex) {
          setActiveCase(`${currRowIndex}+${currCellIndex}`);
        }
      })
    );
    // setState((prev) => {
    //   return prev.map((row, currRowIndex) =>
    //     row.map((column, currCellIndex) => {
    //       column.isOpen = false;
    //       if (rowIndex === currRowIndex && currCellIndex === cellIndex) {
    //         column.isOpen = true;
    //         setActiveCase(`${currRowIndex}+${currCellIndex}`);
    //       }
    //       return column;
    //     })
    //   );
    // });
  };

  return (
    <div
      className={'App'}
      style={{
        marginTop: '35px',
      }}
    >
      <div>
        {board.map((row: any, rowIndex: number) => {
          return (
            <div
              key={rowIndex}
              className={classes.board}
              style={{
                marginTop: '-10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {row.map((cell: HexCell, cellIndex: number) => (
                <Hex
                  className={classes.hex}
                  key={cellIndex}
                  activeCase={activeCase}
                  isActive={activeCase === `${rowIndex}+${cellIndex}` || cell.interactiveCases.includes(activeCase)}
                  level={cell.level}
                  cell={cell}
                  size={size}
                  onClick={() => selectCell(rowIndex, cellIndex)}
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
