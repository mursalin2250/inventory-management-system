const signUpUser = async (userData) => {
    
    const response = await fetch(
        "http://localhost:3000/api/v01/user/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
    );

    const data = await response.json();
    return data;
};

export default signUpUser;
