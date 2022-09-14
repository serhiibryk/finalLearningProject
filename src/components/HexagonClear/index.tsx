import React, { useMemo, useState } from 'react';

import Hex from '../Hex';

import useStyles from './style';
import './index.css';

const DEFAULT_CELL: HexCell = {
  title: '',
  parent: '',
  isOpen: false,
  clickable: false,
  level: 0,
  icon: <></>,
  interactiveCases: [],
  backgroundColor: '',
  color: '',
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
              isOpen: false,
              clickable: false,
              level: 2,
              parent: '2+11',
              icon: <></>,
              interactiveCases: [],
              backgroundColor: '#4991ff',
              color: 'white !important',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
        parent: '2+11',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: '',
              isOpen: false,
              clickable: false,
              parent: '2+11',
              level: 0,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              parent: '2+11',
              level: 0,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '2+11',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        parent: '',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Healthcare',
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: ['0+12', '1+12', '2+13', '3+12'],
        parent: '2+11',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#b9936c',
              color: 'black',
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
              isOpen: false,
              clickable: true,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#b9936c',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
        isOpen: false,
        clickable: true,
        level: 1,
        parent: '',
        interactiveCases: [],
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      {
        title: 'Automobile',
        isOpen: false,
        clickable: true,
        parent: '',
        interactiveCases: [],
        level: 1,
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['2+11', '0+12', '1+12', '2+13', '3+12'].includes(activeCase) && parent === '2+11':
            return {
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '3+12',
              icon: <></>,
              backgroundColor: '#b9936c',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 2,
              parent: '2+11',
              icon: <></>,
              backgroundColor: '#4991ff',
              color: 'black',
            };
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '1',
              isOpen: false,
              parent: '5+11',
              clickable: true,
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              parent: '2+11',
              interactiveCases: [],
              clickable: false,
              level: 0,
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
            };
          case ['5+13'].includes(activeCase):
            return {
              title: '2',
              isOpen: false,
              interactiveCases: [],
              parent: '5+11',
              clickable: false,
              level: 0,
              icon: <></>,
              backgroundColor: '#3e4444',
              color: 'black',
            };
          case ['3+12'].includes(activeCase) && parent === '5+11':
            return {
              title: '1',
              isOpen: false,
              interactiveCases: [],
              parent: '5+11',
              clickable: false,
              level: 0,
              icon: <></>,
              backgroundColor: '#b9936c',
              color: 'black',
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
              isOpen: false,
              interactiveCases: [],
              clickable: false,
              level: 0,
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
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
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              parent: '5+11',
              level: 2,
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              parent: '2+11',
              clickable: false,
              level: 0,
              icon: <></>,
              backgroundColor: '#2278fa',
              color: 'black',
            };
          case ['5+13'].includes(activeCase):
            return {
              interactiveCases: [],
              title: '2',
              isOpen: false,
              clickable: false,
              level: 0,
              icon: <></>,
              parent: '5+11',
              backgroundColor: '#3e4444',
              color: 'black',
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
        isOpen: false,
        interactiveCases: [],
        clickable: true,
        parent: '',
        level: 1,
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      {
        title: 'Telecommunication',
        interactiveCases: ['3+12', '4+13', '5+13', '6+13'],
        isOpen: false,
        clickable: true,
        level: 1,
        parent: '',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      (() => {
        switch (true) {
          case ['5+11', '3+12', '4+13', '5+13', '6+13'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '5+11',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              clickable: true,
              parent: '5+11',
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '5+11',
              icon: <></>,
              backgroundColor: '#3e4444',
              color: 'black',
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
              title: '',
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              interactiveCases: [],
              level: 0,
              parent: '5+11',
              icon: <></>,
              backgroundColor: '#dac292',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              level: 0,
              interactiveCases: [],
              parent: '5+11',
              icon: <></>,
              backgroundColor: '#3e4444',
              color: 'black',
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
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      {
        interactiveCases: ['7+11', '8+11', '9+9', '9+10'],
        title: 'Manufactures and Factories',
        parent: '7+9',
        isOpen: false,
        clickable: true,
        level: 1,
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              parent: '7+9',
              interactiveCases: [],
              level: 2,
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
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
        isOpen: false,
        clickable: true,
        level: 1,
        parent: '',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
            };
          default:
            return { ...DEFAULT_CELL };
        }
      })(),
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: '',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
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
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
            };
          default:
            return {
              title: 'Defence and Military',
              isOpen: false,
              clickable: true,
              parent: '8+11',
              level: 1,
              interactiveCases: [],
              icon: <></>,
              backgroundColor: 'white',
              color: 'black',
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
        isOpen: false,
        clickable: true,
        level: 1,
        interactiveCases: [],
        parent: '',
        icon: <></>,
        backgroundColor: 'white',
        color: 'black',
      },
      { ...DEFAULT_CELL },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: 'Inventory managment',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
            };
          default:
            return {
              title: 'Agriculture',
              isOpen: false,
              parent: '',
              clickable: true,
              interactiveCases: [],
              level: 1,
              icon: <></>,
              backgroundColor: 'white',
              color: 'black',
            };
        }
      })(),
      // {
      //   title: 'Agriculture',
      //   isOpen: false,
      //   parent: '',
      //   clickable: true,
      //   interactiveCases: [],
      //   level: 1,
      //   icon: <></>,
      //   backgroundColor: '#234532',
      // },
      (() => {
        switch (true) {
          case ['7+9', '7+11', '9+10'].includes(activeCase):
            return {
              title: 'Robotic process automation',
              isOpen: false,
              clickable: false,
              level: 0,
              parent: '7+9',
              interactiveCases: [],
              icon: <></>,
              backgroundColor: '#fa6f1e',
              color: 'black',
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
  const size = 70;
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
  console.log(activeCase);

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
                    activeCase={activeCase.activeId}
                    isActive={
                      activeCase.activeId === `${rowIndex}+${cellIndex}` ||
                      (activeCase.parent === `${rowIndex}+${cellIndex}` &&
                        cell.interactiveCases.includes(activeCase.activeId))
                    }
                    level={cell.level}
                    cell={cell}
                    size={size}
                    onClick={() => selectCell(rowIndex, cellIndex)}
                    content={<span>{cell.title}</span>}
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
