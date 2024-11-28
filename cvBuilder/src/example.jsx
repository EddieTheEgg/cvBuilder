const example = {
    name: "John Doe",
    email: "email@address.com",
    phone: "(123) 456-7890",
    location: "Boston, MA",
    objective: "I wanna be the very best like no one ever was. To catch them is my real test, to train them is my cause. I will travel across the land searching far and wide. Each Pokémon to understand the power that's inside.",


    experience: [
        {
            company: "ABC Company",
            position: "Web Developer",
            workLocation: "Boston, MA",
            startDate: "09/10/2020",
            endDate: "11/28/2024",
            responsibilities: "*Create functional web applications using JavaScript, React, and HTML/CSS skills \n*Implement unit test driven design using Jest to improve productivity and specification\n*Enforce reactive and scalable design techniques to accommodate for web accessibility",
            id: crypto.randomUUID,
            expanded: true,
        },
    ],

    education: [
        {
            school: "Northeastern University",
            degree: "Computer Science BS, Minor in Mathematics",
            location: "Boston, MA",
            gradDate: "05/20/2020",
            id: crypto.randomUUID,
            expanded: true,
        },
    ],
};

export default example;