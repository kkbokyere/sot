import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerContainer from "./PlayerContainer";

it('renders blank players', () => {
    render(<PlayerContainer events={[]}/>);
});

describe('Points System', () => {

    it('should render AWAY player points', () => {
        render(<PlayerContainer events={[{
            "id": "812020420",
            "type": "point",
            "competitor": "away",
            "homeScore": "0",
            "awayScore": "30",
            "server": "home",
            "result": "receiverWon",
            "offset": 5831000
        }]}/>);
    });

    it('should render AWAY player points', () => {
        render(<PlayerContainer events={[{
            "id": "812020420",
            "type": "point",
            "competitor": "away",
            "homeScore": "30",
            "awayScore": "30",
            "server": "home",
            "result": "receiverWon",
            "offset": 5831000
        }]}/>);
    });

    it('should render Period player points', () => {
        render(<PlayerContainer events={[{
            "id": "812021432",
            "type": "periodScore",
            "period": "2",
            "homeScore": "1",
            "awayScore": "4",
            "server": "home",
            "result": "receiverWon",
            "offset": 5971000
        }]}/>);
    });
})
