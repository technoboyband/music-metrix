'use client'
import React, { useState } from "react"
import ButtonPanel from "./ButtonPanel";
import TrackPanel from "./TrackPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Artist, MonthlyStats, Track, User, WeeklyStats, stats } from "../types/types";

export interface MusicPanelProps {
    user: User;
    toptracks: Track[];
    topartists: Artist[];
    view: number;
    weeklyStats: WeeklyStats;
    monthlyStats: MonthlyStats;
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
                    <p>{props.user.name}s mp3</p>
                </Grid>
                <TrackPanel {...{ view: currentView, user: props.user.name, tracks: props.user.track_count, toptracks: props.toptracks,
                     topartists: props.topartists, weeklyStats: props.weeklyStats, monthlyStats: props.monthlyStats }}></TrackPanel>
                <Grid container sx={{ marginTop: '10%' }}>
                    <ButtonPanel {...{ onForwardButtonClick: onForwardButtonClick, onRewindButtonClick: onRewindButtonClick }}></ButtonPanel>
                </Grid>
            </Box>
        </div>
    )
}