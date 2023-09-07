
import Container from '@mui/material/Container';
import MusicPanel from './components/MusicPanel';
import { Artist, topArtists, toptracks, track, user } from './types/types';
import { getAllTimeTopArtists, getAllTimeTopTracks, getUserInfo } from './api/fetchProfileData';

export default async function Home() {
  const user = await getUserInfo() as user;
  const topTrackResponse = await getAllTimeTopTracks() as toptracks;
  const topArtistResponse = await getAllTimeTopArtists() as topArtists;

  let allTimeTopTracks: track[] = [];
  topTrackResponse.toptracks.track.forEach(t => {
    let track = { name: t.name, id: t.id, url: t.url, playcount: t.playcount };
    allTimeTopTracks.push(track);
  });

  let allTimeTopArtists: Artist[] = [];
  topArtistResponse.topArtists.artist.forEach(a => {
    let artist = {name: a.name, url: a.url, playcount: a.playcount};
    allTimeTopArtists.push(artist);
  })

  console.log(allTimeTopTracks)
  return (
    <Container maxWidth="sm">
      <MusicPanel {...{ user: user, toptracks: allTimeTopTracks }}></MusicPanel>
    </Container>
  )
}
