import { useEffect, useState } from "react";
import './App.css';
import { WS_URL } from "./config";
import Clock from "./components/Clock";
import Player from "./components/Player";
const startMsg = {
    cmd: "start",
    opts: {
        speed: 60
    }
}
const stopMsg = {
    cmd: 'stop'
}

function App() {
    const ws = new WebSocket(WS_URL);

    const [startTime, setStartTime] = useState(new Date())
    const [clock, setClock] = useState(0);
    const [events, setEvents] = useState([]);

    useEffect(() => {
            ws.onopen = (event) => {
                ws.send(JSON.stringify(startMsg));
            };

            ws.onmessage = (event) => {
                const json = JSON.parse(event.data);
                console.log(json)
                try {
                    if ((json.event = "data")) {
                        const { clock, events } = json;
                        const secs = Math.floor((new Date(clock).getTime() - startTime.getTime()) / 1000)
                        setClock(secs);
                    }
                } catch (err) {
                    console.log(err)
                    // whatever you wish to do with the err
                }
            };

            }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports On Tap App</h1>
          <Clock time={clock}/>
          <Player name={'Player A'} type={'home'} score={0}/>
          <Player name={'Player B'} type={'away'} score={0}/>
      </header>
    </div>
  );
}

export default App;
