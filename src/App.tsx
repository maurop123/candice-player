import React from 'react';
import logo from './logo.svg';
import './App.css';
import talks from './list-of-talks'

const randomTalk = getRandomTalk()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Candice Player
        </p>
        <audio id="player" controls>
          <source type="audio/mp3" src={randomTalk.url} />
        </audio>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function getRandomTalk() {
  const titles = Object.keys( talks )

  const randomIndex = Math.floor( Math.random() * titles.length )

  const title = titles[randomIndex]
  console.log("title", title)

  const url = talks[ title ]

  return { title, url }
}

export default App;
