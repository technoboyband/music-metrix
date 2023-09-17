import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Artist, MonthlyStats, Track, WeeklyStats } from '../types/types';

//TODO: Condense top stats props
interface TrackPanelProps {
    view: number;
    user: string;
    tracks: number;
    toptracks: Track[];
    topartists: Artist[];
    weeklyStats: WeeklyStats;
    monthlyStats: MonthlyStats;
};

//TODO: Can condense repetitive code for rendering stats
//TODO: Add artist of top tracks
function renderWeeklyStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>Weekly Stats</h1>
            <p>{'Top track: ' + props.weeklyStats.weeklyTopTracks[0].name} </p>
            <p>{'Top artist: ' + props.weeklyStats.weeklyTopArtists[0].name} </p>
        </div>
    );
}

function renderMonthlyStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>Monthly Stats</h1>
            <p>{'Top track: ' + props.monthlyStats.monthlyTopTracks[0].name} </p>
            <p>{'Top artist: ' + props.monthlyStats.monthlyTopArtists[0].name} </p>
        </div>
    );
}

function renderTopStats(props: TrackPanelProps) {
    return (
        <div>
            <h1>All Time Stats</h1>
            <p>{'Unique # of tracks listened to: ' + props.tracks} </p>
            <p>{'Top Track: ' + props.toptracks[0].name} </p>
            <p>{'Top Artist: ' + props.topartists[0].name} </p>
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