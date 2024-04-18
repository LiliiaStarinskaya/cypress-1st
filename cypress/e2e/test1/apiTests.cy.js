import { faker } from "@faker-js/faker";

describe("API Tests", () => {
  let taskId;
  const baseUrl = "https://sqlverifier-live-6e21ca0ed768.herokuapp.com";
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzE1Mjk3MDc2LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjcwNTA3Nn0.6-hsIZl8EUPQn1ZXudKmUm5sX-u1NmVqzyPtkWG30YXTewf9DANe8VvEzBEGgGnK8sgHQhKZopXpv8-NEyX1Dw";

  it("should create a task via API", () => {
    const requestData = {
      text: faker.lorem.sentence(),
      answer: faker.lorem.sentence(),
      title: faker.lorem.words(),
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/api/tasks`,
      body: requestData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      taskId = response.body.id;
    });
  });

  it("should edit a task via API", () => {
    const editData = {
      text: faker.lorem.sentence(),
      answer: faker.lorem.sentence(),
      title: faker.lorem.words(),
    };

    cy.request({
      method: "PATCH",
      url: `${baseUrl}/api/tasks/${taskId}`,
      body: { id: taskId, ...editData },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.text).to.eq(editData.text);
      expect(response.body.answer).to.eq(editData.answer);
      expect(response.body.title).to.eq(editData.title);
    });
  });

  it("should delete a task via API", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/api/tasks/${taskId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
