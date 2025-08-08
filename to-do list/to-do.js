document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.getElementById('button');
    const outputDiv = document.getElementById('output');

    createButton.addEventListener('click', function() {
        const newPerson = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            occupation: "Developer"
        };

        let info="User Info:\n"
        info += "First Name: " + newPerson.firstName + "\n";
        info += "Last Name: " + newPerson.lastName + "\n";
        info += "Age: " + newPerson.age + "\n";
        info += "Occupation: " + newPerson.occupation;
        const infoElement = document.createElement('pre');
        infoElement.classList.add('highlight');
        infoElement.textContent = info;
        outputDiv.append(infoElement);
        outputDiv.append(document.createElement('br'));
        console.log("New object created:", newPerson);
    });
    });
