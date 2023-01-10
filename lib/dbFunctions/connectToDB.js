const { MongoClient } = require("mongodb");



async function connectToDB() {
    const uri =
    "mongodb+srv://YanaOskin:yanka9707@cluster0.dgfy3pb.mongodb.net/?retryWrites=true&w=majority";
    const client =  new MongoClient(uri)
    // console.log('client ',client);
    try{
        await client.connect();
        // console.log("connecteddddd");
        const db = await client.db('Exams')
        return db
    }catch(error){
        throw error
    }
    //  finally {
    //     await client.close()
    // }
}

async function getCollection(collectionName){
    try{
        const db = await connectToDB()
        // console.log("------");
        const collection = await db.collection((collectionName))
        // console.log('+++++');
        return collection;
    } catch(error){
        throw error
    }

}

module.exports = {
    getCollection
}
