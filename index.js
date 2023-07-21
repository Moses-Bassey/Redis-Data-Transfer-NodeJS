const Redis = require("ioredis");

// Create Redis clients for source and destination Redis servers

const sourceRedis = new Redis({
  host: "host_address",
  port: "host_port",
  password: "host_server_password",
});

const destinationRedis = new Redis({
  host: "host_address",
  port: "host_port",
  password: "host_server_password",
});

// Function to fetch all keys and data from the source Redis server and transfer to the destination Redis server
async function transferData() {
  try {
    // Fetch all keys from the source Redis server
    const keys = await sourceRedis.keys("*");

    console.log(keys);

    // Fetch values for each key and transfer to the destination Redis server
    for (const key of keys) {
      const value = await sourceRedis.get(key);
      
      // await destinationRedis.set(key, value);
    }

    console.log("Data transfer completed successfully!");
  } catch (error) {
    console.error("Error transferring data:", error);
  } finally {
    // Close the Redis connections
    sourceRedis.disconnect();
    destinationRedis.disconnect();
  }
}

// Call the function to transfer data between Redis servers
transferData();
