export async function GET(request: Request) {
  try {
    const newRehabs = [
      {
        id: "1",
        name: "Rehab 1",
        description: "Rehab 1 description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Rehab 2",
        description: "Rehab 2 description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return new Response(JSON.stringify(newRehabs));
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
