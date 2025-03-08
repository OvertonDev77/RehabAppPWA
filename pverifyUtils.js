async function getPverifyToken() {
  const url = "https://api.pverify.com/Token";
  const params = new URLSearchParams();

  params.append("Client_Id", "523c1e0e-9e04-49a3-853b-c35f310b28d5");
  params.append("Client_Secret", "zvl2HyIHwFdglBqYSkVEmyBk8opAYw");
  params.append("grant_type", "client_credentials");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Token object including `access_token`
  } catch (error) {
    console.error("Error fetching pVerify token:", error);
    return null;
  }
}

getPverifyToken()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Exporting for use in other scripts
