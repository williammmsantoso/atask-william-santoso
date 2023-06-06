import { Octokit } from 'octokit';
import { SESSION_TOKEN } from '../../constants/token';

const octokit = new Octokit({ auth: SESSION_TOKEN });

export const getUser = async () => {
    const { data } = await octokit.request("GET /users");

    return data;
}

export const searchUser = async (username: string) => {
    // const { data } = await octokit.request(`GET /search/users?q=${username}&per_page=5`);
    const { data } = await octokit.request(`GET /users/${username}/repos`);

    return data;
}