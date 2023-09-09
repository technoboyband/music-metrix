import { topArtists, toptracks, UserResponse } from "../types/types"

export function getUserInfo(): Promise<UserResponse> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getAllTimeTopTracks(): Promise<toptracks> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getWeeklyTopTracks(): Promise<toptracks> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=hackerdaddie&period=7day&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getMonthlyTopTracks(): Promise<toptracks> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=hackerdaddie&period=1month&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getAllTimeTopArtists(): Promise<topArtists> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=hackerdaddie&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getWeeklyTopArtists(): Promise<topArtists> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=hackerdaddie&period=7day&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}

export function getMonthlyTopArtists(): Promise<topArtists> {
    return fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=hackerdaddie&period=1month&api_key=9d126053b6fe4fca733e9b5861d21404&format=json')
        .then((response) => response.json())
        .then((json) => { return json })
}