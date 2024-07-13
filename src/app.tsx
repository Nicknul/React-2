import React from 'react';
// import { minam } from '../static/basic-data';
import Minam from './Minam';

import names from '../static/basic-data';
import Li from './Li';
// const Minam = (textNode: string) => {
//   return <h1>{textNode}</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Minam textNode={minam} />
//       <h1>hello</h1>
//     </div>
//   );
// };

// interface listItem {
//   listItem: string[];
// }
// const hoyeong: string[] = ['호영인', '언제쯤', '이길까'];

// const UlLi: React.FC<listItem> = (listItem) => {
//   return (
//     <ul>
//       <li>listItem[0]</li>
//       <li>listItem[1]</li>
//       <li>listItem[2]</li>
//     </ul>
//   );
// };

// export default UlLi;

const App = () => {
  return (
    <div>
      <ul>
        <Li textNode={names[0]} />
        <Li textNode={names[1]} />
      </ul>
    </div>
  );
};

export default App;
