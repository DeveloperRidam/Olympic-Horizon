// Example results of 1st, 2nd, and 3rd place finishes for all 32 sports
const results = [
    // Archery
    { sport: 'Archery', event: 'Individual Men', athlete: 'Brady Ellison', country: 'USA', medal: 'Gold' },
    { sport: 'Archery', event: 'Individual Men', athlete: 'Kim Woojin', country: 'KOR', medal: 'Silver' },
    { sport: 'Archery', event: 'Individual Men', athlete: 'Mauro Nespoli', country: 'ITA', medal: 'Bronze' },

    // Artistic Gymnastics
    { sport: 'Artistic Gymnastics', event: 'All-around Men', athlete: 'Daiki Hashimoto', country: 'JPN', medal: 'Gold' },
    { sport: 'Artistic Gymnastics', event: 'All-around Men', athlete: 'Xiao Ruoteng', country: 'CHN', medal: 'Silver' },
    { sport: 'Artistic Gymnastics', event: 'All-around Men', athlete: 'Nikita Nagornyy', country: 'ROC', medal: 'Bronze' },

    // Athletics
    { sport: 'Athletics', event: '100m Men', athlete: 'Fred Kerley', country: 'USA', medal: 'Gold' },
    { sport: 'Athletics', event: '100m Men', athlete: 'Lamont Jacobs', country: 'ITA', medal: 'Silver' },
    { sport: 'Athletics', event: '100m Men', athlete: 'Andre De Grasse', country: 'CAN', medal: 'Bronze' },

    // Badminton
    { sport: 'Badminton', event: 'Men\'s Singles', athlete: 'Viktor Axelsen', country: 'DEN', medal: 'Gold' },
    { sport: 'Badminton', event: 'Men\'s Singles', athlete: 'Chen Long', country: 'CHN', medal: 'Silver' },
    { sport: 'Badminton', event: 'Men\'s Singles', athlete: 'Anders Antonsen', country: 'DEN', medal: 'Bronze' },

    // Basketball
    { sport: 'Basketball', event: 'Men', athlete: 'USA Team', country: 'USA', medal: 'Gold' },
    { sport: 'Basketball', event: 'Men', athlete: 'France Team', country: 'FRA', medal: 'Silver' },
    { sport: 'Basketball', event: 'Men', athlete: 'Australia Team', country: 'AUS', medal: 'Bronze' },

    // Beach Volleyball
    { sport: 'Beach Volleyball', event: 'Men', athlete: 'Anders Mol/Christian Sørum', country: 'NOR', medal: 'Gold' },
    { sport: 'Beach Volleyball', event: 'Men', athlete: 'Viacheslav Krasilnikov/Oleg Stoyanovskiy', country: 'ROC', medal: 'Silver' },
    { sport: 'Beach Volleyball', event: 'Men', athlete: 'Cherif Younousse/Ahmed Tijan', country: 'QAT', medal: 'Bronze' },

    // Boxing
    { sport: 'Boxing', event: 'Flyweight Men', athlete: 'Galal Yafai', country: 'GBR', medal: 'Gold' },
    { sport: 'Boxing', event: 'Flyweight Men', athlete: 'Carlo Paalam', country: 'PHI', medal: 'Silver' },
    { sport: 'Boxing', event: 'Flyweight Men', athlete: 'Ryomei Tanaka', country: 'JPN', medal: 'Bronze' },

    // Breaking (New for 2024)
    { sport: 'Breaking', event: '1v1 Men', athlete: 'B-Boy Shigekix', country: 'JPN', medal: 'Gold' },
    { sport: 'Breaking', event: '1v1 Men', athlete: 'B-Boy Lilou', country: 'FRA', medal: 'Silver' },
    { sport: 'Breaking', event: '1v1 Men', athlete: 'B-Boy Menno', country: 'NED', medal: 'Bronze' },

    // Canoe Slalom
    { sport: 'Canoe Slalom', event: 'K1 Men', athlete: 'Jiri Prskavec', country: 'CZE', medal: 'Gold' },
    { sport: 'Canoe Slalom', event: 'K1 Men', athlete: 'Jakob Grigar', country: 'SVK', medal: 'Silver' },
    { sport: 'Canoe Slalom', event: 'K1 Men', athlete: 'Hannes Aigner', country: 'GER', medal: 'Bronze' },

    // Canoe Sprint
    { sport: 'Canoe Sprint', event: 'C1 1000m Men', athlete: 'Isaquias Queiroz', country: 'BRA', medal: 'Gold' },
    { sport: 'Canoe Sprint', event: 'C1 1000m Men', athlete: 'Sergey Yemelyanov', country: 'KAZ', medal: 'Silver' },
    { sport: 'Canoe Sprint', event: 'C1 1000m Men', athlete: 'Martin Fuksa', country: 'CZE', medal: 'Bronze' },

    // Cycling BMX Freestyle
    { sport: 'Cycling BMX Freestyle', event: 'Men', athlete: 'Logan Martin', country: 'AUS', medal: 'Gold' },
    { sport: 'Cycling BMX Freestyle', event: 'Men', athlete: 'Daniel Dhers', country: 'VEN', medal: 'Silver' },
    { sport: 'Cycling BMX Freestyle', event: 'Men', athlete: 'Declan Brooks', country: 'GBR', medal: 'Bronze' },

    // Cycling BMX Racing
    { sport: 'Cycling BMX Racing', event: 'Men', athlete: 'Niek Kimmann', country: 'NED', medal: 'Gold' },
    { sport: 'Cycling BMX Racing', event: 'Men', athlete: 'Kye Whyte', country: 'GBR', medal: 'Silver' },
    { sport: 'Cycling BMX Racing', event: 'Men', athlete: 'Carlos Ramirez', country: 'COL', medal: 'Bronze' },

    // Cycling Mountain Bike
    { sport: 'Cycling Mountain Bike', event: 'Men', athlete: 'Tom Pidcock', country: 'GBR', medal: 'Gold' },
    { sport: 'Cycling Mountain Bike', event: 'Men', athlete: 'Mathias Flückiger', country: 'SUI', medal: 'Silver' },
    { sport: 'Cycling Mountain Bike', event: 'Men', athlete: 'David Valero', country: 'ESP', medal: 'Bronze' },

    // Cycling Road
    { sport: 'Cycling Road', event: 'Men\'s Road Race', athlete: 'Richard Carapaz', country: 'ECU', medal: 'Gold' },
    { sport: 'Cycling Road', event: 'Men\'s Road Race', athlete: 'Wout van Aert', country: 'BEL', medal: 'Silver' },
    { sport: 'Cycling Road', event: 'Men\'s Road Race', athlete: 'Tadej Pogačar', country: 'SLO', medal: 'Bronze' },

    // Cycling Track
    { sport: 'Cycling Track', event: 'Men\'s Sprint', athlete: 'Harrie Lavreysen', country: 'NED', medal: 'Gold' },
    { sport: 'Cycling Track', event: 'Men\'s Sprint', athlete: 'Jeffrey Hoogland', country: 'NED', medal: 'Silver' },
    { sport: 'Cycling Track', event: 'Men\'s Sprint', athlete: 'Jack Carlin', country: 'GBR', medal: 'Bronze' },

    // Diving
    { sport: 'Diving', event: '10m Platform Men', athlete: 'Tom Daley', country: 'GBR', medal: 'Gold' },
    { sport: 'Diving', event: '10m Platform Men', athlete: 'Cao Yuan', country: 'CHN', medal: 'Silver' },
    { sport: 'Diving', event: '10m Platform Men', athlete: 'Aleksandr Bondar', country: 'ROC', medal: 'Bronze' },

    // Equestrian
    { sport: 'Equestrian', event: 'Dressage Individual', athlete: 'Jessica von Bredow-Werndl', country: 'GER', medal: 'Gold' },
    { sport: 'Equestrian', event: 'Dressage Individual', athlete: 'Isabell Werth', country: 'GER', medal: 'Silver' },
    { sport: 'Equestrian', event: 'Dressage Individual', athlete: 'Charlotte Dujardin', country: 'GBR', medal: 'Bronze' },

    // Fencing
    { sport: 'Fencing', event: 'Foil Men', athlete: 'Cheung Ka Long', country: 'HKG', medal: 'Gold' },
    { sport: 'Fencing', event: 'Foil Men', athlete: 'Daniele Garozzo', country: 'ITA', medal: 'Silver' },
    { sport: 'Fencing', event: 'Foil Men', athlete: 'Alexander Massialas', country: 'USA', medal: 'Bronze' },

    // Field Hockey
    { sport: 'Field Hockey', event: 'Men', athlete: 'Belgium Team', country: 'BEL', medal: 'Gold' },
    { sport: 'Field Hockey', event: 'Men', athlete: 'Australia Team', country: 'AUS', medal: 'Silver' },
    { sport: 'Field Hockey', event: 'Men', athlete: 'India Team', country: 'IND', medal: 'Bronze' },

    // Football
    { sport: 'Football', event: 'Men', athlete: 'Brazil Team', country: 'BRA', medal: 'Gold' },
    { sport: 'Football', event: 'Men', athlete: 'Spain Team', country: 'ESP', medal: 'Silver' },
    { sport: 'Football', event: 'Men', athlete: 'Mexico Team', country: 'MEX', medal: 'Bronze' },

    // Golf
    { sport: 'Golf', event: 'Men', athlete: 'Xander Schauffele', country: 'USA', medal: 'Gold' },
    { sport: 'Golf', event: 'Men', athlete: 'Rory Sabbatini', country: 'SVK', medal: 'Silver' },
    { sport: 'Golf', event: 'Men', athlete: 'CT Pan', country: 'TPE', medal: 'Bronze' },

    // Handball
    { sport: 'Handball', event: 'Men', athlete: 'France Team', country: 'FRA', medal: 'Gold' },
    { sport: 'Handball', event: 'Men', athlete: 'Denmark Team', country: 'DEN', medal: 'Silver' },
    { sport: 'Handball', event: 'Men', athlete: 'Spain Team', country: 'ESP', medal: 'Bronze' },

    // Judo
    { sport: 'Judo', event: '73kg Men', athlete: 'Shohei Ono', country: 'JPN', medal: 'Gold' },
    { sport: 'Judo', event: '73kg Men', athlete: 'Lasha Shavdatuashvili', country: 'GEO', medal: 'Silver' },
    { sport: 'Judo', event: '73kg Men', athlete: 'An Chang-rim', country: 'KOR', medal: 'Bronze' },

    // Karate
    { sport: 'Karate', event: 'Kumite -75kg Men', athlete: 'Luigi Busa', country: 'ITA', medal: 'Gold' },
    { sport: 'Karate', event: 'Kumite -75kg Men', athlete: 'Rafael Aghayev', country: 'AZE', medal: 'Silver' },
    { sport: 'Karate', event: 'Kumite -75kg Men', athlete: 'Gabor Harspataki', country: 'HUN', medal: 'Bronze' },

    // Modern Pentathlon
    { sport: 'Modern Pentathlon', event: 'Men', athlete: 'Joe Choong', country: 'GBR', medal: 'Gold' },
    { sport: 'Modern Pentathlon', event: 'Men', athlete: 'Ahmed El-Gendy', country: 'EGY', medal: 'Silver' },
    { sport: 'Modern Pentathlon', event: 'Men', athlete: 'Jun Woong-tae', country: 'KOR', medal: 'Bronze' },

    // Rowing
    { sport: 'Rowing', event: 'Single Sculls Men', athlete: 'Stefanos Ntouskos', country: 'GRE', medal: 'Gold' },
    { sport: 'Rowing', event: 'Single Sculls Men', athlete: 'Kjetil Borch', country: 'NOR', medal: 'Silver' },
    { sport: 'Rowing', event: 'Single Sculls Men', athlete: 'Damir Martin', country: 'CRO', medal: 'Bronze' },

    // Rugby Sevens
    { sport: 'Rugby Sevens', event: 'Men', athlete: 'Fiji Team', country: 'FIJ', medal: 'Gold' },
    { sport: 'Rugby Sevens', event: 'Men', athlete: 'New Zealand Team', country: 'NZL', medal: 'Silver' },
    { sport: 'Rugby Sevens', event: 'Men', athlete: 'Argentina Team', country: 'ARG', medal: 'Bronze' },

    // Sailing
    { sport: 'Sailing', event: 'Laser Men', athlete: 'Matt Wearn', country: 'AUS', medal: 'Gold' },
    { sport: 'Sailing', event: 'Laser Men', athlete: 'Tonci Stipanovic', country: 'CRO', medal: 'Silver' },
    { sport: 'Sailing', event: 'Laser Men', athlete: 'Hermann Tomasgaard', country: 'NOR', medal: 'Bronze' },

    // Shooting
    { sport: 'Shooting', event: '10m Air Rifle Men', athlete: 'William Shaner', country: 'USA', medal: 'Gold' },
    { sport: 'Shooting', event: '10m Air Rifle Men', athlete: 'Lihao Sheng', country: 'CHN', medal: 'Silver' },
    { sport: 'Shooting', event: '10m Air Rifle Men', athlete: 'Yang Haoran', country: 'CHN', medal: 'Bronze' },

    // Skateboarding
    { sport: 'Skateboarding', event: 'Street Men', athlete: 'Yuto Horigome', country: 'JPN', medal: 'Gold' },
    { sport: 'Skateboarding', event: 'Street Men', athlete: 'Kelvin Hoefler', country: 'BRA', medal: 'Silver' },
    { sport: 'Skateboarding', event: 'Street Men', athlete: 'Jagger Eaton', country: 'USA', medal: 'Bronze' },

    // Sport Climbing
    { sport: 'Sport Climbing', event: 'Men', athlete: 'Alberto Ginés López', country: 'ESP', medal: 'Gold' },
    { sport: 'Sport Climbing', event: 'Men', athlete: 'Nathaniel Coleman', country: 'USA', medal: 'Silver' },
    { sport: 'Sport Climbing', event: 'Men', athlete: 'Jakob Schubert', country: 'AUT', medal: 'Bronze' },

    // Surfing
    { sport: 'Surfing', event: 'Men', athlete: 'Italo Ferreira', country: 'BRA', medal: 'Gold' },
    { sport: 'Surfing', event: 'Men', athlete: 'Kanoa Igarashi', country: 'JPN', medal: 'Silver' },
    { sport: 'Surfing', event: 'Men', athlete: 'Owen Wright', country: 'AUS', medal: 'Bronze' },

    // Swimming
    { sport: 'Swimming', event: '200m Freestyle Men', athlete: 'David Popovici', country: 'ROU', medal: 'Gold' },
    { sport: 'Swimming', event: '200m Freestyle Men', athlete: 'Hwang Sun-Woo', country: 'KOR', medal: 'Silver' },
    { sport: 'Swimming', event: '200m Freestyle Men', athlete: 'Tom Dean', country: 'GBR', medal: 'Bronze' },

    // Table Tennis
    { sport: 'Table Tennis', event: 'Singles Men', athlete: 'Ma Long', country: 'CHN', medal: 'Gold' },
    { sport: 'Table Tennis', event: 'Singles Men', athlete: 'Fan Zhendong', country: 'CHN', medal: 'Silver' },
    { sport: 'Table Tennis', event: 'Singles Men', athlete: 'Dimitrij Ovtcharov', country: 'GER', medal: 'Bronze' },

    // Taekwondo
    { sport: 'Taekwondo', event: '-68kg Men', athlete: 'Ulugbek Rashitov', country: 'UZB', medal: 'Gold' },
    { sport: 'Taekwondo', event: '-68kg Men', athlete: 'Bradly Sinden', country: 'GBR', medal: 'Silver' },
    { sport: 'Taekwondo', event: '-68kg Men', athlete: 'Hakan Reçber', country: 'TUR', medal: 'Bronze' },

    // Tennis
    { sport: 'Tennis', event: 'Singles Men', athlete: 'Alexander Zverev', country: 'GER', medal: 'Gold' },
    { sport: 'Tennis', event: 'Singles Men', athlete: 'Karen Khachanov', country: 'ROC', medal: 'Silver' },
    { sport: 'Tennis', event: 'Singles Men', athlete: 'Pablo Carreno Busta', country: 'ESP', medal: 'Bronze' },

    // Triathlon
    { sport: 'Triathlon', event: 'Individual Men', athlete: 'Kristian Blummenfelt', country: 'NOR', medal: 'Gold' },
    { sport: 'Triathlon', event: 'Individual Men', athlete: 'Alex Yee', country: 'GBR', medal: 'Silver' },
    { sport: 'Triathlon', event: 'Individual Men', athlete: 'Hayden Wilde', country: 'NZL', medal: 'Bronze' },

    // Volleyball
    { sport: 'Volleyball', event: 'Men', athlete: 'France Team', country: 'FRA', medal: 'Gold' },
    { sport: 'Volleyball', event: 'Men', athlete: 'ROC Team', country: 'ROC', medal: 'Silver' },
    { sport: 'Volleyball', event: 'Men', athlete: 'Argentina Team', country: 'ARG', medal: 'Bronze' },

    // Water Polo
    { sport: 'Water Polo', event: 'Men', athlete: 'Serbia Team', country: 'SRB', medal: 'Gold' },
    { sport: 'Water Polo', event: 'Men', athlete: 'Greece Team', country: 'GRE', medal: 'Silver' },
    { sport: 'Water Polo', event: 'Men', athlete: 'Hungary Team', country: 'HUN', medal: 'Bronze' },

    // Weightlifting
    { sport: 'Weightlifting', event: '96kg Men', athlete: 'Fares El-Bakh', country: 'QAT', medal: 'Gold' },
    { sport: 'Weightlifting', event: '96kg Men', athlete: 'Keydomar Vallenilla', country: 'VEN', medal: 'Silver' },
    { sport: 'Weightlifting', event: '96kg Men', athlete: 'Plies Djiya', country: 'GEO', medal: 'Bronze' },

    // Wrestling
    { sport: 'Wrestling', event: 'Men\'s Freestyle 74kg', athlete: 'Zaurbek Sidakov', country: 'ROC', medal: 'Gold' },
    { sport: 'Wrestling', event: 'Men\'s Freestyle 74kg', athlete: 'Kyle Dake', country: 'USA', medal: 'Silver' },
    { sport: 'Wrestling', event: 'Men\'s Freestyle 74kg', athlete: 'Frank Chamizo', country: 'ITA', medal: 'Bronze' }
];
 

// Function to display results in the table
function displayResults(filteredCountry = 'All') {
    const tableBody = document.querySelector('#results-table tbody');
    tableBody.innerHTML = ''; // Clear the existing rows

    const filteredResults = filteredCountry === 'All' 
        ? results 
        : results.filter(result => result.country === filteredCountry);

    filteredResults.forEach(result => {
        const row = `<tr>
            <td>${result.sport}</td>
            <td>${result.event}</td>
            <td>${result.athlete}</td>
            <td>${result.country}</td>
            <td>${result.medal}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to populate the country filter dropdown
function populateCountryFilter() {
    const countryFilter = document.querySelector('#country-filter');
    const countries = [...new Set(results.map(result => result.country))];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

// Event listener for country filter change
document.querySelector('#country-filter').addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    displayResults(selectedCountry);
});

// Initialize the page by populating the filter and displaying results
document.addEventListener('DOMContentLoaded', () => {
    populateCountryFilter();
    displayResults();
});