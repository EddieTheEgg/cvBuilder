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
            workLocation: "Toronto, ON",
            startDate: "September 2020",
            endDate: "November 2024",
            responsibilities: "*Create functional web applications using JavaScript, React, and HTML/CSS skills \n*Implement unit test driven design using Jest to improve productivity and specification\n*Enforce reactive and scalable design techniques to accommodate for web accessibility",
            id: crypto.randomUUID,
            expanded: true,
        },
    ],

    education: [
        {
            school: "Carleton University",
            degree: "B.Eng, Electrical Engineer",
            location: "Ottawa, ON",
            gradDate: "May 2020",
            id: crypto.randomUUID,
            expanded: true,
        },
    ],
};

export default example;