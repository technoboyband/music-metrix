
import Container from '@mui/material/Container';
import MusicPanel, { MusicPanelProps } from './components/MusicPanel';
import { Artist, stats, topArtists, topTracks, Track, UserResponse } from './types/types';
import { getAllTimeTopArtists, getAllTimeTopTracks, getMonthlyTopArtists, getMonthlyTopTracks, getUserInfo, getWeeklyTopArtists, getWeeklyTopTracks } from './api/fetchProfileData';

export default async function Home() {
  const user = await getUserInfo() as UserResponse;
  const topTrackResponse = await getAllTimeTopTracks() as topTracks;
  const topArtistResponse = await getAllTimeTopArtists() as topArtists;

  const weeklyTrackResponse = await getWeeklyTopTracks() as topTracks;
  const weeklyArtistResponse = await getWeeklyTopArtists() as topArtists;

  const monthlyTrackResponse = await getMonthlyTopTracks() as topTracks;
  const monthlyArtistResponse = await getMonthlyTopArtists() as topArtists;

  let currentView = stats.top;

  let allTimeTopTracks: Track[] = [];
  topTrackResponse.toptracks.track.forEach(t => {
    let track = { name: t.name, id: t.id, url: t.url, playcount: t.playcount };
    allTimeTopTracks.push(track);
  });

  let allTimeTopArtists: Artist[] = [];
  topArtistResponse.topartists.artist.forEach(a => {
    let artist = {name: a.name, url: a.url, playcount: a.playcount};
    allTimeTopArtists.push(artist);
  })

  let weeklyTopTracks: Track[] = [];
  weeklyTrackResponse.toptracks.track.forEach(t => {
    let track = { name: t.name, id: t.id, url: t.url, playcount: t.playcount };
    weeklyTopTracks.push(track);
  });

  let weeklyTopArtists: Artist[] = [];
  weeklyArtistResponse.topartists.artist.forEach(a => {
    let artist = {name: a.name, url: a.url, playcount: a.playcount};
    weeklyTopArtists.push(artist);
  })

  let monthlyTopTracks: Track[] = [];
  monthlyTrackResponse.toptracks.track.forEach(t => {
    let track = { name: t.name, id: t.id, url: t.url, playcount: t.playcount };
    monthlyTopTracks.push(track);
  });

  let monthlyTopArtists: Artist[] = [];
  monthlyArtistResponse.topartists.artist.forEach(a => {
    let artist = {name: a.name, url: a.url, playcount: a.playcount};
    monthlyTopArtists.push(artist);
  })

  const props: MusicPanelProps = {
    user: user.user,
    toptracks: allTimeTopTracks,
    topartists: allTimeTopArtists,
    view: currentView,
    weeklytoptracks: weeklyTopTracks,
    weeklytopartists: weeklyTopArtists,
    monthlytoptracks: monthlyTopTracks,
    monthlytopartists: monthlyTopArtists,

  }

  return (
    <Container maxWidth="sm">
      <MusicPanel { ...props}></MusicPanel>
    </Container>
  )
}
