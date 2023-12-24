import type { VercelRequest, VercelResponse } from '@vercel/node';

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

  /*
async function submitHandler (request, env) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405
    })
  }
  const body = await request.formData();

  const {
    first_name,
    last_name,
    email,
    phone,
    subject,
    message
  } = Object.fromEntries(body)

  // The keys in "fields" are case-sensitive, and
  // should exactly match the field names you set up
  // in your Airtable table, such as "First Name".
  const reqBody = {
    fields: {
      "First Name": first_name,
      "Last Name": last_name,
      "Email": email,
      "Phone Number": phone,
      "Subject": subject,
      "Message": message
    }
  }
  await createAirtableRecord(env, reqBody)
}
  
async function createAirtableRecord(env, body) {
  try {
    const result = fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json', 
      }
    })
    return result;
  } catch (error) {
    console.error(error);
  }
}
*/