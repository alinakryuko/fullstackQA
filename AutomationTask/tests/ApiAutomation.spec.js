import { test, expect } from '@playwright/test';

test.describe.serial("API Automation tests", () => {
    const authHeader = {
        'Authorization': 'Bearer f5fb37a9252e8073f62dbdeb0d31ae6788cf9b388f675769d6637112faa92239'
    };

    let createdUserId;
    let userData;

    test("User creation test", async ({ request }) => {
        const randomSuffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        userData = {
            name: `John Doe ${randomSuffix}`,
            email: `test.${randomSuffix}@example.com`,
            gender: "female",
            status: "active"
        };

        const response = await request.post('https://gorest.co.in/public/v2/users', { 
            data: userData,
            headers: authHeader
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        createdUserId = responseBody.id;

        console.log('Created user ID:', createdUserId);
    });

    test("Get user by ID", async ({ request }) => {
        const response = await request.get(`https://gorest.co.in/public/v2/users/${createdUserId}`, {
            headers: authHeader
        });
        expect(response.status()).toBe(200);

        const user = await response.json();

        // Verify that the response user matches the expected user data
        expect(user.id).toBe(createdUserId);
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
        expect(user.gender).toBe(userData.gender);
        expect(user.status).toBe(userData.status);
    });

    test("Update user gender to male", async ({ request }) => {
        const updateResponse = await request.patch(`https://gorest.co.in/public/v2/users/${createdUserId}`, {
            data: { gender: "male" },
            headers: authHeader
        });
        expect(updateResponse.status()).toBe(200);

        // Verify the user is updated by sending a GET request
        const getResponse = await request.get(`https://gorest.co.in/public/v2/users/${createdUserId}`, {
            headers: authHeader
        });
        expect(getResponse.status()).toBe(200);

        const updatedUser = await getResponse.json();
        expect(updatedUser.gender).toBe("male");
        console.log(updatedUser);
    });

    test("Delete user", async ({ request }) => {
        const deleteResponse = await request.delete(`https://gorest.co.in/public/v2/users/${createdUserId}`, {
            headers: authHeader
        });
        expect(deleteResponse.status()).toBe(204);

        // Verify user is removed by sending a GET request
        const getResponse = await request.get(`https://gorest.co.in/public/v2/users/${createdUserId}`, {
            headers: authHeader
        });
        expect(getResponse.status()).toBe(404);
    });
});