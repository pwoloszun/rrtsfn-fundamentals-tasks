export const PORT = 4100;

const BASE_URL = `http://localhost:${PORT}`;

export default function getApiUrl(absolutePath: string): string {
  return `${BASE_URL}${absolutePath}`;
}
