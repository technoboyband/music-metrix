import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Artist, track } from '../types/types';

interface TrackPanelProps {
    user: string;
    tracks: number;
    toptracks: track[];
    topartists: Artist[];
};

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
                    <h1>all time top stats</h1>
                    <p>{'total tracks listened to: ' + props.tracks} </p>
                    <p>{'top track: ' + props.toptracks[0].name} </p>
                    <p>{'top artist: ' + props.topartists[0].name} </p>
                </Box>
            </Box>
        </Grid>);
}