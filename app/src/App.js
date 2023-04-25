import { useEffect, useState } from "react";
import './App.scss';
import { WS_URL } from "./config";
import Clock from "./components/Clock";
import Player from "./components/Player";
import Status from "./components/Status";
import PlayerContainer from "./containers/PlayerContainer";
const startMsg = {
    cmd: "start"
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
                try {
                    if ((json.event = "data")) {
                        const { clock, events } = json;
                        const secs = Math.floor((new Date(clock).getTime() - startTime.getTime()) / 1000)
                        setClock(secs);
                        setEvents(events)
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
          <PlayerContainer events={events}/>
          <Status/>
      </header>
    </div>
  );
}

export default App;
