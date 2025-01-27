 
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../lib/mongodb';

export async function GET(req,{ params }) {
  try {
 
  
    const { id } = params;
  
    const objectId = ObjectId.createFromHexString(id)
    
    const client = await clientPromise;
    const db = client.db('wespark');  
 
    const pkg = await db.collection('news').findOne({ _id: objectId });

     
    if (!pkg) {
      return new Response(JSON.stringify({ error: 'Package not found' }), {
        status: 404,
      });
    }

    
    return new Response(JSON.stringify(pkg), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
     
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}


 