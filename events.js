document.addEventListener('DOMContentLoaded', () => {
    const events = [
        'Acrobatic Gymnastics', 'Alpine Skiing', 'Archery', 'Artistic Gymnastics',
        'Artistic Swimming', 'Athletics', 'Badminton', 'Baseball 5', 'Baseball Softball',
        'Basketball', 'Basketball 3x3', 'Beach Handball', 'Beach Volleyball', 'Biathlon',
        'Bobsleigh', 'Boxing', 'Breaking', 'Canoe Slalom', 'Canoe Sprint', 'Coastal Rowing',
        'Cricket', 'Cross-Country Skiing', 'Curling', 'Cycling BMX Freestyle',
        'Cycling BMX Racing', 'Cycling Mountain Bike', 'Cycling Road', 'Cycling Track',
        'Diving', 'Equestrian', 'Fencing', 'Figure Skating', 'Flag Football', 'Football',
        'Freestyle Skiing', 'Futsal', 'Golf', 'Handball', 'Hockey', 'Ice Hockey', 'Judo',
        'Karate', 'Lacrosse', 'Luge', 'Marathon Swimming', 'Modern Pentathlon', 'Nordic Combined',
        'Rhythmic Gymnastics', 'Roller Speed Skating', 'Rowing', 'Rugby Sevens', 'Sailing',
        'Shooting', 'Short Track Speed Skating', 'Skateboarding', 'Skeleton', 'Ski Jumping',
        'Ski Mountaineering', 'Snowboard', 'Speed Skating', 'Sport Climbing', 'Squash',
        'Surfing', 'Swimming', 'Table Tennis', 'Taekwondo', 'Tennis', 'Trampoline', 'Triathlon',
        'Volleyball', 'Water Polo', 'Weightlifting', 'Wrestling', 'Wushu'
    ];

    const container = document.querySelector('.events-container');

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

        const eventTitle = document.createElement('h2');
        eventTitle.textContent = event;

        // Creates a button for each event
        const button = document.createElement('button');
        button.textContent = 'View Details';
        button.addEventListener('click', () => {
            // Generates a URL based on event name and points to the sports folder
            const formattedEventName = event.toLowerCase().replace(/ /g, '');
            window.location.href = `${formattedEventName}.html`; 
        });

        card.appendChild(eventTitle);
        card.appendChild(button);

        container.appendChild(card);
    });
});
