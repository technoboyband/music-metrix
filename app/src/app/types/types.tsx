export enum stats {
    top,
    weekly,
    monthly,
}

export interface UserResponse {
    user: User;
}

export interface User {
    name: string;
    url: string;
    track_count: number;
}

export interface topTracks {
    toptracks: {
        track: Array<Track>;
    };
}

export interface Track {
    id: string;
    name: string;
    url: string;
    playcount: number;
}

export interface topArtists {
    topartists: {
        artist: Array<Artist>;
    };
}

export interface Artist {
    name: string;
    url: string;
    playcount: number;
}