import type { VercelRequest, VercelResponse } from '@vercel/node';

// https://developers.cloudflare.com/workers/tutorials/handle-form-submissions-with-airtable/
// AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME is set in the Vercel environment variables
// https://airtable.com/appNG12MMFNAfvZRK/api/docs#curl/metadata
// Trying out to push a change using visual studio and git command prompt
export default function handler(
    request: VercelRequest,
    response: VercelResponse,
  ) {
  
    const reqBody = {
      fields: {
        "Parent 1 Name": request.body.parent_1_name,
        "Parent 1 Phone": request.body.parent_1_phone,
        "Parent 1 Email":request.body.parent_1_email,
        "Parent 2 Name": request.body.parent_2_name,
        "Parent 2 Phone": request.body.parent_2_phone,
        "Parent 2 Email": request.body.parent_2_email,
        "Child Name": request.body.child_1_name
      }
    }

    createAirtableRecord(process.env, reqBody)
    .then(result => {
      var recordCreationStatus = "fail"
      if (result.ok || (result.status == 304) || (result.status==200)) {
        recordCreationStatus = "pass"
      }
      response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        status: recordCreationStatus,
      });
    })
  }
export async function createAirtableRecord(env, body) {
  try {
    const result = fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json', 
      }
    })
    // let json = await result.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
  