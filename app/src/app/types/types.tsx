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

export interface topArtists {
    topArtists: {
        artist: Array<Artist>;
    };
}

export interface Artist {
    name: string;
    url: string;
    playcount: number;
}