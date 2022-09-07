import { useState } from 'react';
import './App.css';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "smenu01-1", link: "/" },
      { content: "smenu01-2", link: "/" },
      { content: "smenu01-3", link: "/" }
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/s2",
    submenu: [
      { content: "smenu02-1", link: "/" },
      { content: "smenu02-2", link: "/" },
      { content: "smenu02-3", link: "/" }
    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/s3",
    submenu: [
      { content: "smenu03-1", link: "/" },
      { content: "smenu03-2", link: "/" },
      { content: "smenu03-3", link: "/" }
    ]
  }
]

function App() {
  const [CB, setCB] = useState("");
  const [TG, setTG] = useState(false);

  return (
    <header>
      <h1 className={CB} onClick={() => setCB('on')}>LOGO</h1>
      <h2 className={`${TG ? 'on' : ''}`}>toggle class</h2>
      <button onClick={() => setTG(!TG)}>class 토글</button>
      <nav className='GNB'>
        <ul>
          {
            DB.map((it, idx) => <li key={idx}>
              <a href={it.link}>{it.content}</a>
              <ul className='smenu'>
                {
                  it.submenu.map((smenu, idx) => <li key={idx}>
                    <a href={smenu.link}>{smenu.content}</a>
                  </li>)
                }
              </ul>
            </li>)
          }
        </ul>
      </nav>
    </header>
  );
}

export default App;
