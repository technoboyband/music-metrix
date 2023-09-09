const view = "TOP_STATS" || "WEEKLY_STATS" || "MONTHLY_STATS";

export interface UserResponse {
    user: User;
}

export interface User {
    name: string;
    url: string;
    track_count: number;
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
    topartists: {
        artist: Array<Artist>;
    };
}

export interface Artist {
    name: string;
    url: string;
    playcount: number;
}