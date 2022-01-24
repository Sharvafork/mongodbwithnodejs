
const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/databaseName?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // Create a single new listing
        await createListing(client,
            {
                name: "Sorrow",
                description: "Sorrowing list  of your cluster",
                love:12221
            }
        );
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);
async function createListing(client, newListing){
    const result = await client.db("database name").collection("collection name").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings){
    const result = await client.db("database name").collection("collection name").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

module.exports = { main };
