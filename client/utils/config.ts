export const IS_PROD = process.env.NODE_ENV === 'production';

export const API_URL = IS_PROD
  ? 'https://????/api'
  : 'http://localhost:8000/api';