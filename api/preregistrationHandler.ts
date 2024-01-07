import type { VercelRequest, VercelResponse } from '@vercel/node';

// https://developers.cloudflare.com/workers/tutorials/handle-form-submissions-with-airtable/
// AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME is set in the Vercel environment variables
// https://airtable.com/appNG12MMFNAfvZRK/api/docs#curl/metadata
export default function handler(
    request: VercelRequest,
    response: VercelResponse,
  ) {
    const parent_1_name = "Arvind"
    const parent_1_phone = "123-456-7890"
    const parent_1_email = "abc@gmail.com"
    const parent_2_name = "Vaidehi"
    const parent_2_phone = "234-567-8901"
    const parent_2_email = "def@gmail.com"
    const child_name = "Keshav"
    
    /*const reqBody = {
      fields: {
        "Parent 1 Name": request.body.parent_1_name,
        "Parent 1 Phone": request.body.parent_1_phone,
        "Parent 1 Email":request.body.parent_1_email,
        "Parent 2 Name": request.body.parent_2_name,
        "Parent 2 Phone": request.body.parent_2_phone,
        "Parent 2 Email": request.body.parent_2_email,
        "Child Name": request.body.child_1_name
      }
    }*/

    const reqBody = {
      fields: {
        "Parent 1 Name": parent_1_name,
        "Parent 1 Phone": parent_1_phone,
        "Parent 1 Email": parent_1_email,
        "Parent 2 Name": parent_2_name,
        "Parent 2 Phone": parent_2_phone,
        "Parent 2 Email": parent_2_email,
        "Child Name": child_name
      }
    }
    // const result = 
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
    /* var recordCreationStatus = "fail"
    if (result.ok || (result.status == 304) || (result.status==200)) {
      recordCreationStatus = "pass"
    }
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
      status: result.toString(),
    });*/
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