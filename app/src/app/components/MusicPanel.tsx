'use client'
import React, { useState } from "react"
import ButtonPanel from "./ButtonPanel";
import TrackPanel from "./TrackPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Artist, Track, User, stats } from "../types/types";

export interface MusicPanelProps {
    user: User;
    toptracks: Track[];
    topartists: Artist[];
    view: number;
    weeklytoptracks: Track[];
    weeklytopartists: Artist[];
    monthlytoptracks: Track[];
    monthlytopartists: Artist[];
}

export default function MusicPanel(props: MusicPanelProps) {
    const [currentView, setCurrentView] = useState(props.view);

    const onForwardButtonClick = () => {
        if (currentView === stats.monthly) {
            setCurrentView(stats.top)
        } else {
            setCurrentView(currentView + 1);
        }
    }

    const onRewindButtonClick = () => {
        if (currentView === stats.top) {
            setCurrentView(stats.monthly)
        } else {
            setCurrentView(currentView - 1);
        }
    }

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
                <TrackPanel {...{ view: currentView, user: props.user.name, tracks: props.user.track_count, toptracks: props.toptracks,
                     topartists: props.topartists, weeklytoptracks: props.weeklytoptracks, weeklytopartists: props.weeklytopartists,
                     monthlytoptracks: props.monthlytoptracks, monthlytopartists: props.monthlytopartists }}></TrackPanel>
                <Grid container sx={{ marginTop: '10%' }}>
                    <ButtonPanel {...{ onForwardButtonClick: onForwardButtonClick, onRewindButtonClick: onRewindButtonClick }}></ButtonPanel>
                </Grid>
            </Box>
        </div>
    )
}