import React from 'react';
import HexagonGrid from './index';
import times from 'lodash/times';

const HexGridDemo = () => {
  const getHexProps = (hexagon: any) => {
    return {
      style: {
        fill: '#007aff',
        stroke: 'white',
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`),
    };
  };

  const renderHexagonContent = (hexagon: any) => {
    return (
      <text x={'50%'} y={'50%'} fontSize={70} fontWeight={'lighter'} style={{ fill: 'white' }} textAnchor={'middle'}>
        {hexagon}
      </text>
    );
  };

  const hexagons = times(102, (id) => id);

  return (
    <HexagonGrid
      gridWidth={1250}
      gridHeight={1250}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
  );
};

export default HexGridDemo;
