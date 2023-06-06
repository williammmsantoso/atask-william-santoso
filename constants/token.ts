export const SESSION_TOKEN = process.env.NEXT_SESSION_TOKEN;

export const headers = { 
    headers: {
        "Authorization" : `Bearer ${SESSION_TOKEN}`,
        'Accept': 'application/json'
    }
}