import React, { useMemo, useState } from 'react';

import Hex from '../Hex';

import useStyles from './style';
import './index.css';

const DEFAULT_CELL: HexCell = {
  parent: '',
  border: {},
  clickable: false,
  level: 0,
  interactiveCases: [],
};
const generateBoard = (activeCase: string, parent: string): HexCell[][] => {
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
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Automating the adminustrating tasks',
              clickable: false,
              level: 2,
              parent: '2+11',
              interactiveCases: [],
              backgroundColor: '#4991ff',
              color: 'white',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Medical treatment recommendation',
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',
              color: 'white',
              backgroundColor: '#2278fa',
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
        clickable: true,
        level: 1,
        interactiveCases: [],
        parent: '2+11',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              clickable: false,
              parent: '2+11',
              level: 0,
              interactiveCases: [],
              backgroundColor: '#4991ff',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Hospital Patient Managment',
              clickable: false,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              color: 'white',
              backgroundColor: '#4991ff',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Al-powered wearables',
              clickable: false,
              parent: '2+11',
              level: 0,
              interactiveCases: [],
              color: 'white',
              backgroundColor: '#2278fa',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Image analysis for medical diagnostics',
              clickable: false,
              level: 0,
              parent: '2+11',
              interactiveCases: [],
              color: 'white',
              backgroundColor: '#2278fa',
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
        title: 'Entertaiment and Media',

        clickable: true,
        level: 1,
        interactiveCases: [],
        parent: '',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Healthcare',

        clickable: true,
        level: 1,
        interactiveCases: ['0+12', '1+12', '2+13', '3+12'],
        parent: '2+11',
      },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',

              backgroundColor: '#4991ff',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              color: 'white',
              backgroundColor: '#b9936c',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Personalized Medications and Care',
              clickable: true,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              color: 'white',
              // border: {
              //   borderTop: '2px solid #2278fa',
              //   borderBottom: '2px solid #2278fa',
              // },
              backgroundColor: '#4991ff',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              color: 'white',
              backgroundColor: '#b9936c',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Early diagnosis',
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              color: 'white',
              backgroundColor: '#2278fa',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Assisted or Automated Diagnosis',
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',
              color: 'white',
              backgroundColor: '#2278fa',
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
        title: 'Education',

        clickable: true,
        level: 1,
        parent: '',
        interactiveCases: [],
      },
      { ...DEFAULT_CELL },
      {
        title: 'Automobile',

        clickable: true,
        parent: '',
        interactiveCases: [],
        level: 1,
      },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',

              backgroundColor: '#4991ff',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '3+12',
              color: 'white',
              backgroundColor: '#b9936c',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Drug Discovery',
              clickable: false,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              color: 'white',
              backgroundColor: '#4991ff',
            };
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '1',
              parent: '5+11',
              clickable: true,
              interactiveCases: [],
              level: 2,
              color: 'white',
              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Intelligent robots in surgery',
              parent: '2+11',
              interactiveCases: [],
              clickable: false,
              level: 0,
              color: 'white',
              backgroundColor: '#2278fa',
            };
          case ['5+13'].includes(activeCase):
            return {
              title: '2',
              interactiveCases: [],
              parent: '5+11',
              clickable: false,
              level: 0,
              color: 'white',
              backgroundColor: '#3e4444',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              interactiveCases: [],
              parent: '5+11',
              clickable: false,
              level: 0,
              color: 'white',
              backgroundColor: '#b9936c',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase) && parent === '2+11':
            return {
              title: 'Predicting illness and  patient outcome',
              parent: '2+11',
              interactiveCases: [],
              clickable: false,
              level: 0,
              color: 'white',
              backgroundColor: '#2278fa',
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
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',

              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '0',
              clickable: false,
              interactiveCases: [],
              parent: '5+11',
              level: 2,
              color: 'white',
              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['2+13'].includes(activeCase):
            return {
              interactiveCases: [],
              title: 'Patient Data Analytics',
              parent: '2+11',
              clickable: false,
              level: 0,
              color: 'white',
              backgroundColor: '#2278fa',
            };
          case ['5+13'].includes(activeCase):
            return {
              interactiveCases: [],
              title: '2',
              clickable: false,
              level: 0,
              color: 'white',
              parent: '5+11',
              backgroundColor: '#3e4444',
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
        title: 'Retail',

        interactiveCases: [],
        clickable: true,
        parent: '',
        level: 1,
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Telecommunication',
        interactiveCases: ['3+12', '4+13', '5+13', '6+13'],

        clickable: true,
        level: 1,
        parent: '',
      },
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              clickable: false,
              level: 0,
              parent: '5+11',
              interactiveCases: [],

              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '2',
              clickable: true,
              parent: '5+11',
              interactiveCases: [],
              level: 2,
              color: 'white',
              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['5+13'].includes(activeCase):
            return {
              title: '2',
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '5+11',
              color: 'white',
              backgroundColor: '#3e4444',
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
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',

              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '0',
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',
              color: 'white',
              backgroundColor: '#dac292',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['5+13'].includes(activeCase):
            return {
              title: '2',
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '5+11',
              color: 'white',
              backgroundColor: '#3e4444',
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
      {
        title: 'Isurance',
        interactiveCases: [],
        parent: '',

        clickable: true,
        level: 1,
      },
      { ...DEFAULT_CELL },
      {
        interactiveCases: ['7+11', '8+11', '9+9', '9+10'],
        title: 'Manufactures and Factories',
        parent: '7+9',

        clickable: true,
        level: 1,
      },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],

              backgroundColor: '#fa6f1e',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: 'Supply chain managment',
              clickable: false,
              parent: '7+9',
              interactiveCases: [],
              level: 2,
              color: 'white',
              backgroundColor: '#fa6f1e',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
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
        title: 'Public Sector',
        interactiveCases: [],

        clickable: true,
        level: 1,
        parent: '',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],

              backgroundColor: '#fa6f1e',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],

              backgroundColor: '#fa6f1e',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['7+9', '7+11', '8+11', '9+9', '9+10'].includes(activeCase) && parent === '7+9':
            return {
              title: 'Predictive Maintanance',
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              color: 'white',
              backgroundColor: '#fa6f1e',
            };
          default:
            return {
              title: 'Defence and Military',

              clickable: true,
              parent: '8+11',
              level: 1,
              interactiveCases: [],
            };
        }
      })(),
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
        title: 'Construction',

        clickable: true,
        level: 1,
        interactiveCases: [],
        parent: '',
      },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: 'Inventory managment',
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              color: 'white',
              backgroundColor: '#fa6f1e',
            };
          default:
            return {
              title: 'Agriculture',

              parent: '',
              clickable: true,
              interactiveCases: [],
              level: 1,
            };
        }
      })(),
      // {
      //   title: 'Agriculture',
      //
      //   parent: '',
      //   clickable: true,
      //   interactiveCases: [],
      //   level: 1,
      //
      //
      //   backgroundColor: '#234532',
      // },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: 'Robotic process automation',
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              color: 'white',
              backgroundColor: '#fa6f1e',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
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
  const [activeCase, setActiveCase] = useState({
    activeId: '',
    parent: '',
  });

  const board = useMemo(() => generateBoard(activeCase.activeId, activeCase.parent), [activeCase]);

  const selectCell = (rowIndex: number, cellIndex: number) => {
    board.forEach((row, currRowIndex) =>
      row.forEach((column, currCellIndex) => {
        if (column.clickable && rowIndex === currRowIndex && currCellIndex === cellIndex) {
          setActiveCase((prev) => ({
            ...prev,
            activeId: `${currRowIndex}+${currCellIndex}`,
            parent: column.parent,
          }));
        }
      })
    );
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
              {row.map((cell: HexCell, cellIndex: number) => {
                return (
                  <Hex
                    className={classes.hex}
                    key={cellIndex}
                    isActive={
                      activeCase.activeId === `${rowIndex}+${cellIndex}` ||
                      (activeCase.parent === `${rowIndex}+${cellIndex}` &&
                        cell.interactiveCases.includes(activeCase.activeId))
                    }
                    level={cell.level}
                    cell={cell}
                    onClick={() => selectCell(rowIndex, cellIndex)}
                    content={
                      cell.title && (
                        <span
                          style={{
                            color: cell.color,
                          }}
                        >
                          {cell.title}
                        </span>
                      )
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HexagonClear;
