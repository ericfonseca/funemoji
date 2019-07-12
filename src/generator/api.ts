import qs from 'query-string'
const BASE_URL = 'http://localhost:8000';

// export function getEmoji(top: string, bottom: string, percent: number): Promise<string> {
//   console.log(arguments)
//   const req = axios.get(BASE_URL + '/generate', { params: {top, bottom, percent} });
//   console.log(req);
//   return Promise.resolve('abc');
// }

export function getEmojiURL(top: string, bottom: string, percent: number): string {
  return `${BASE_URL}/generate?${qs.stringify({top, bottom, percent})}`;
}