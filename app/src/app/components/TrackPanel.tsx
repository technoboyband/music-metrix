import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { track } from '../types/types';

interface TrackPanelProps {
    user: string;
    tracks: number;
    toptracks: track[];
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
                }}>
                    <p>{'total tracks listened to: ' + props.tracks} </p>
                    <p>{'user name: ' + props.user} </p>
                    <p>{'TOP TRACK: ' + props.toptracks[0].name} </p>
                </Box>
            </Box>
        </Grid>);
}