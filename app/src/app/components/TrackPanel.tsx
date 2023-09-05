import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { track } from '../page';

interface TrackPanelProps {
    user: string;
    tracks: number;
    toptracks: track;
};

export default function TrackPanel(props: TrackPanelProps) {
    const toptrack = props.toptracks.toptracks.track;
    return (
        <Grid container justifyContent="center">
            <Box sx={{
                width: 400,
                height: 300,
                backgroundColor: 'primary.dark',
            }}>
               <p> {'total tracks: ' + props.tracks} </p>
                <p>{'user name: ' + props.user} </p>
            </Box>
        </Grid>);
}