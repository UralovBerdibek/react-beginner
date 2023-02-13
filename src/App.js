import React from 'react';
import './index.scss';

// =========== FIRST WAY =========== //
// function App() {
//   const [visible, setVisible] = React.useState(false)
//   return (
//     <div className="App">
//       <button onClick={() => setVisible(true)} className="open-modal-btn">✨ Открыть окно</button>
//       {visible && (
//         <div className="overlay">
//           <div className="modal">
//             <svg onClick={() => setVisible(false)} height="200" viewBox="0 0 200 200" width="200">
//               <title />
//               <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//             </svg>
//             <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='img' />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// =========== SECOND WAY =========== //
function App() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div className="App">
      <button onClick={() => setVisible(true)} className="open-modal-btn">✨ Открыть окно</button>
      <div className={`overlay animated ${visible ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setVisible(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='img' />
        </div>
      </div>
    </div>
  );
}

export default App;