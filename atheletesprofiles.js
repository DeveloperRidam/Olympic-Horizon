window.onload = function() {
    const container = document.getElementById('athletes-container');

    athletes.forEach(athlete => {
        // Create the athlete card
        const athleteCard = document.createElement('div');
        athleteCard.classList.add('athlete-card');

        // Add the athlete photo
        const athletePhoto = document.createElement('img');
        athletePhoto.classList.add('athlete-photo');
        athletePhoto.src = athlete.photo;
        athletePhoto.alt = athlete.name;
        athleteCard.appendChild(athletePhoto);

        // Add the athlete's name
        const athleteName = document.createElement('h2');
        athleteName.classList.add('athlete-name');
        athleteName.innerText = athlete.name;
        athleteCard.appendChild(athleteName);

        // Add the athlete's country
        const athleteCountry = document.createElement('p');
        athleteCountry.classList.add('athlete-country');
        athleteCountry.innerText = athlete.country;
        athleteCard.appendChild(athleteCountry);

        // Add the athlete's sport
        const athleteSport = document.createElement('span');
        athleteSport.classList.add('athlete-sport');
        athleteSport.innerText = athlete.sport;
        athleteCard.appendChild(athleteSport);

        // Add the athlete card to the container
        container.appendChild(athleteCard);
    });
};
