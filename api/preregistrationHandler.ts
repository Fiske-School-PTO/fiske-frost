import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  runtime: 'nodejs', // this is a pre-requisite
};

// https://developers.cloudflare.com/workers/tutorials/handle-form-submissions-with-airtable/
// AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME is set in the Vercel environment variables
// https://airtable.com/appNG12MMFNAfvZRK/api/docs#curl/metadata
export default function handler(
    request: VercelRequest,
    response: VercelResponse,
  ) {
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }