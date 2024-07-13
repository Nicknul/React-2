import React from 'react';

interface YeonProperties {
  textNode: string;
  styles: React.CSSProperties;
}

let styel: React.CSSProperties = {
  color: 'white',
  backgroundColor: 'black',
  fontSize: '50px',
};

const Yeon: React.FC<YeonProperties> = ({ textNode, styles }) => {
  return (
    <div>
      <h1 style={styles}>{textNode}</h1>
    </div>
  );
};

export default Yeon;
