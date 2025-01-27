import clientPromise from "../../../lib/mongodb";

 

export async function GET() {
    try {
        const client = await clientPromise;
    const db = client.db('etc');

    const messages = await db.collection('messages').find({}).sort({ _id: -1 }).toArray()

    return new Response(JSON.stringify(messages),{
        status:200,
        headers:{ 'Content-Type':'application/json'}
    })
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({error:'Database connection failed'}),{
                status:500,
                headers:{ 'Content-Type':'application/json'}
            }
        )
    }



}



export async function POST(req) {
    try {
        const client = await clientPromise
        const db = await client.db('wespark')

        const body = await req.json()

        await db.collection('news').insertOne(body);
        return new Response(
            JSON.stringify({Message: 'News Created'}),{
                status:200,
                headers: { "Content-Type": "application/json" },
            }
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({ error: "Database connection failed" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
    }
}