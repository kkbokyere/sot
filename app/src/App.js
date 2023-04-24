import { useState } from "react";
import './App.css';
import { WS_URL } from "./config";

function App() {
    const ws = new WebSocket(WS_URL, 'ws');

    const [clock, setClock] = useState(0);

    ws.onopen = (event) => {
        const msg = {
            cmd: 'start'
        }
        ws.send(JSON.stringify(msg));
    };
    ws.onmessage = (event) => {
        const json = JSON.parse(event.data);

        try {
            if ((json.event = "data")) {
                const { clock } = json;
                setClock(new Date(clock).toLocaleTimeString())
            }
        } catch (err) {
            // whatever you wish to do with the err
        }

    };

    ws.onerror = (event) => {
        console.log('error', event)
    }

    ws.addEventListener("matchUpdate", (event) => {
        console.log("Message from server ", event.data);
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports On Tap App</h1>
          <div className='game-clock'>
              Time: {clock}
          </div>

      </header>
    </div>
  );
}

export default App;
