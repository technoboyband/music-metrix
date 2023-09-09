import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';

interface fastForwardButtonProps{
    onClick: () => void;
}

interface fastRewindButtonProps{
    onClick: () => void;
}

function fastForwardButton(props: fastForwardButtonProps){
    return (<IconButton><FastForwardIcon></FastForwardIcon></IconButton>);
}

function fastRewindButton(props: fastRewindButtonProps){
    <IconButton><FastRewindIcon></FastRewindIcon></IconButton>
}

export default function ButtonPanel() {
    return (
        <Grid container display="flex" justifyContent="center">
            <Box sx={{
                width: 150,
                height: 150,
                backgroundColor: '#a09c8c',
                borderRadius: '50%',
                alignContent: "center",
                display: "flex",
            }}>
                <Grid container display="flex" direction="column" justifyContent="center" alignContent="center">
                    <Grid container justifyContent="center" alignContent="center" >
                        <IconButton><FastRewindIcon></FastRewindIcon></IconButton>
                    </Grid>
                    <Grid container display="flex" direction="row" justifyContent="center" >
                        <Button>MENU</Button>
                        <Grid container justifyContent="center" alignContent="center">
                            <Box sx={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#c682b0',
                                borderRadius: '50%',
                                display: "flex",
                            }}>
                            </Box>
                        </Grid>
                        <IconButton><PlayArrowIcon></PlayArrowIcon></IconButton>
                    </Grid>
                    <Grid container display="flex" direction="row" justifyContent="center">
                        <IconButton><FastForwardIcon></FastForwardIcon></IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Grid>);
}