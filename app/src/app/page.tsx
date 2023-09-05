
import Container from '@mui/material/Container';
import MusicPanel from './components/MusicPanel';
import { useEffect, useState } from 'react';


export interface user{
  user: {
    name: string;
    url: string;
    track_count: number;
  };
}

export interface track{
toptracks: {
  track: {
    name: string;
    playcount: number;
  };
}
}



function getUserInfo(): Promise<user>{
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
      .then((response) => response.json())
      .then((json) => {return json})
}

function getWeeklyTrack(): Promise<track>{
  return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
  .then((response) => response.json())
  .then((json) => {return json})
}

export default async function Home() {
  
const user = await getUserInfo() as user;
const weeklyTrack = await getWeeklyTrack() as track;
console.log(weeklyTrack.toptracks);
  return (
    <Container maxWidth="sm">
      <MusicPanel {...{user:user, toptracks: weeklyTrack}}></MusicPanel>
    </Container>
  )
}
