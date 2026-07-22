import { NextApiRequest, NextApiResponse } from 'next';
import axios from '../../utils/axios';
import { Media, MediaType } from '../../types';
import { parse } from '../../utils/apiResolvers';

interface Response {
  type: 'Success' | 'Error';
  data: Media[] | Error;
}

const apiKey = process.env.TMDB_KEY;

export default async function handler(request: NextApiRequest, response: NextApiResponse<Response>) {
  const { type, time } = request.query;

  if (!apiKey) {
    console.error('TMDB_KEY is missing. Add it to your .env.local file.');
    response.status(500).json({ type: 'Error', data: new Error('TMDB_KEY is not set') });
    return;
  }

  try {
    const result = await axios().get(`/trending/${type}/${time}`, {
      params: {
        api_key: apiKey,
        watch_region: 'US'
      }
    });
    const data = parse(result.data.results, type as MediaType);

    response.status(200).json({ type: 'Success', data });
  } catch (error: any) {
    const details = error?.response?.data || error?.message || error;
    console.error('trending API error:', details);
    response.status(500).json({ type: 'Error', data: details });
  }
}
