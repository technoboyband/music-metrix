'use client'
import React from "react"
import ButtonPanel from "./ButtonPanel";
import TrackPanel from "./TrackPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Artist, track, User } from "../types/types";

interface MusicPanelProps {
    user: User;
    toptracks: track[];
    topartists: Artist[];
}

export default function MusicPanel(props: MusicPanelProps) {
    let stats = "TOP_STATS";
    return (
        <div>
            <Box sx={{
                width: 550,
                height: 700,
                backgroundColor: '#c682b0',
                borderRadius: '16px',
            }}>
                <Grid container justifyContent="center">
                    <p>{props.user.name}'s mp3</p>
                </Grid>
                <TrackPanel {...{ user: props.user.name, tracks: props.user.track_count, toptracks: props.toptracks, topartists:props.topartists}}></TrackPanel>
                <Grid container sx={{ marginTop: '10%' }}>
                    <ButtonPanel></ButtonPanel>
                </Grid>
            </Box>
        </div>
    )
}