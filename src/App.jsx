import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)

  const quotes = [
    {
      text: '"Impossible is a word found only in the dictionary of fools."',
      author: '— Napoleon Bonaparte',
      color: '#FF6B4A',
    },
    {
      text: '"I came, I saw, I conquered."',
      author: '— Julius Caesar',
      color: '#3DDC97',
    },
    {
      text: '"I hated every minute of training, but I said, don\'t quit."',
      author: '— Muhammad Ali',
      color: '#B18CFF',
    },
  ]

  return (
    <div className="advice-wrap">
      {/* nav row */}
      <div className="advice-nav">
      {quotes.map((q,i) => (
        <span
        key={i}
        className="advice-num"
        onClick={() => setIndex(i)}
         style={{
              opacity: index === i ? 1 : 0.4,
              cursor: 'pointer',
            }}
        >
          {i + 1}
        </span>
      ))}
      </div>

      {/* quotes */}
      <div className="advice-list">
        <div className="advice-item" style={{ borderLeftColor: quotes[index].color }}>
          <p className="advice-quote">
           {quotes[index].text}
          </p>
          <p className="advice-author" tyle={{ color: quotes[index].color }}>
           {quotes[index].author}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App
