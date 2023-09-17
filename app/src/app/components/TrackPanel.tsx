import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Artist, MonthlyStats, Track, WeeklyStats } from '../types/types';

interface TrackPanelProps {
    view: number;
    user: string;
    tracks: number;
    toptracks: Track[];
    topartists: Artist[];
    weeklyStats: WeeklyStats;
    monthlyStats: MonthlyStats;
};

function renderWeeklyStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>weekly stats</h1>
            <p>{'weekly top track: ' + props.weeklyStats.weeklyTopTracks[0].name} </p>
            <p>{'weekly top artist: ' + props.weeklyStats.weeklyTopArtists[0].name} </p>
        </div>
    );
}

function renderMonthlyStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>monthly stats</h1>
            <p>{'monthly top track: ' + props.monthlyStats.monthlyTopTracks[0].name} </p>
            <p>{'monthly top artist: ' + props.monthlyStats.monthlyTopArtists[0].name} </p>
        </div>
    );
}

function renderTopStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>all time top stats</h1>
            <p>{'total tracks listened to: ' + props.tracks} </p>
            <p>{'top track: ' + props.toptracks[0].name} </p>
            <p>{'top artist: ' + props.topartists[0].name} </p>
        </div>
    );
}

function renderStats(props: TrackPanelProps) {
    return (
        <div>
            {props.view === 1 ? renderWeeklyStats(props) : renderMonthlyStats(props)}
        </div>
    );
}

export default function TrackPanel(props: TrackPanelProps) {
    return (
        <Grid container justifyContent="center">
            <Box sx={{
                width: 430,
                height: 318,
                backgroundColor: 'black',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: '16px',
            }}>
                <Box sx={{
                    width: 400,
                    height: 300,
                    backgroundColor: '#a45094',
                    textAlign: "center",
                }}>
                    {props.view === 0 ? renderTopStats(props) : renderStats(props)}
                </Box>
            </Box>
        </Grid>);
}