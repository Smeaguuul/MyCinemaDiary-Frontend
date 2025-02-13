
export async function login(username: string, password: string) {
    console.log("Attempting login with Username " + username + " and password " + password +".")
    let loginRequest = {username: username, password: password}
    var res = await fetch(`/api/user/login`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(loginRequest)

    });

    const { token } = await res.json();
    localStorage.setItem('token', token);
}

export function isTokenValid() {
    var token = localStorage.getItem('token')
    if (token == null) {
      return false;
    }
  
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }
  
    // Decoding the payload (the second part of the token)
    const payload = JSON.parse(atob(parts[1]));
    // Get the expiration time from the payload
    const exp = payload.exp;
  
    // Check if the token is expired
    if (typeof exp !== 'number') {
      throw new Error('Expiration time (exp) is not a number');
    }
  
    // Compare the expiration time with the current time
    return exp * 1000 > Date.now(); // Convert exp to milliseconds
  }

