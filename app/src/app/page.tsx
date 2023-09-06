
import Container from '@mui/material/Container';
import MusicPanel from './components/MusicPanel';

export interface user {
  user: {
    name: string;
    url: string;
    track_count: number;
  };
}

export interface toptracks {
  toptracks: {
    track: Array<track>;
  };
}

export interface track {
  id: string;
  name: string;
  url: string;
  playcount: number;
}

function getUserInfo(): Promise<user> {
  return fetch('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
    .then((response) => response.json())
    .then((json) => { return json })
}

function getAllTimeTopTracks(): Promise<toptracks> {
  return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
    .then((response) => response.json())
    .then((json) => { return json })
}

export default async function Home() {
  const user = await getUserInfo() as user;
  const topTrackResponse = await getAllTimeTopTracks() as toptracks;

  let allTimeTopTracks: track[] = [];
  topTrackResponse.toptracks.track.forEach(t => {
    let track = { name: t.name, id: t.id, url: t.url, playcount: t.playcount };
    allTimeTopTracks.push(track);
  });
  console.log(allTimeTopTracks)
  return (
    <Container maxWidth="sm">
      <MusicPanel {...{ user: user, toptracks: allTimeTopTracks }}></MusicPanel>
    </Container>
  )
}
