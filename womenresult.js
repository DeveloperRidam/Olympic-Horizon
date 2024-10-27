// Example results of 1st, 2nd, and 3rd place finishes for all 32 sports (Women)
const womenResults = [
    // Archery
    { sport: 'Archery', event: 'Individual Women', athlete: 'Mia Li', country: 'USA', medal: 'Gold' },
    { sport: 'Archery', event: 'Individual Women', athlete: 'Kang Chae-young', country: 'KOR', medal: 'Silver' },
    { sport: 'Archery', event: 'Individual Women', athlete: 'Lisa Unruh', country: 'GER', medal: 'Bronze' },

    // Artistic Gymnastics
    { sport: 'Artistic Gymnastics', event: 'All-around Women', athlete: 'Simone Biles', country: 'USA', medal: 'Gold' },
    { sport: 'Artistic Gymnastics', event: 'All-around Women', athlete: 'Rebeca Andrade', country: 'BRA', medal: 'Silver' },
    { sport: 'Artistic Gymnastics', event: 'All-around Women', athlete: 'Jade Carey', country: 'USA', medal: 'Bronze' },

    // Athletics
    { sport: 'Athletics', event: '100m Women', athlete: 'Elaine Thompson-Herah', country: 'JAM', medal: 'Gold' },
    { sport: 'Athletics', event: '100m Women', athlete: 'Sha’Carri Richardson', country: 'USA', medal: 'Silver' },
    { sport: 'Athletics', event: '100m Women', athlete: 'Dina Asher-Smith', country: 'GBR', medal: 'Bronze' },

    // Badminton
    { sport: 'Badminton', event: 'Women\'s Singles', athlete: 'Akane Yamaguchi', country: 'JPN', medal: 'Gold' },
    { sport: 'Badminton', event: 'Women\'s Singles', athlete: 'P.V. Sindhu', country: 'IND', medal: 'Silver' },
    { sport: 'Badminton', event: 'Women\'s Singles', athlete: 'Tai Tzu-ying', country: 'TPE', medal: 'Bronze' },

    // Basketball
    { sport: 'Basketball', event: 'Women', athlete: 'USA Team', country: 'USA', medal: 'Gold' },
    { sport: 'Basketball', event: 'Women', athlete: 'Australia Team', country: 'AUS', medal: 'Silver' },
    { sport: 'Basketball', event: 'Women', athlete: 'Canada Team', country: 'CAN', medal: 'Bronze' },

    // Beach Volleyball
    { sport: 'Beach Volleyball', event: 'Women', athlete: 'April Ross/Alix Klineman', country: 'USA', medal: 'Gold' },
    { sport: 'Beach Volleyball', event: 'Women', athlete: 'Barbara Seixas/Carol Solberg', country: 'BRA', medal: 'Silver' },
    { sport: 'Beach Volleyball', event: 'Women', athlete: 'Anouk Verge-Depre/Joana Heidrich', country: 'SUI', medal: 'Bronze' },

    // Boxing
    { sport: 'Boxing', event: 'Flyweight Women', athlete: 'Aditi Ashok', country: 'IND', medal: 'Gold' },
    { sport: 'Boxing', event: 'Flyweight Women', athlete: 'Kali Reis', country: 'USA', medal: 'Silver' },
    { sport: 'Boxing', event: 'Flyweight Women', athlete: 'Yulia Kutsenko', country: 'UKR', medal: 'Bronze' },

    // Breaking (New for 2024)
    { sport: 'Breaking', event: '1v1 Women', athlete: 'B-Girl Ami', country: 'JPN', medal: 'Gold' },
    { sport: 'Breaking', event: '1v1 Women', athlete: 'B-Girl Flow', country: 'USA', medal: 'Silver' },
    { sport: 'Breaking', event: '1v1 Women', athlete: 'B-Girl Kloe', country: 'FRA', medal: 'Bronze' },

    // Canoe Slalom
    { sport: 'Canoe Slalom', event: 'K1 Women', athlete: 'Jessica Fox', country: 'AUS', medal: 'Gold' },
    { sport: 'Canoe Slalom', event: 'K1 Women', athlete: 'Ricarda Funk', country: 'GER', medal: 'Silver' },
    { sport: 'Canoe Slalom', event: 'K1 Women', athlete: 'Fiona Pennie', country: 'GBR', medal: 'Bronze' },

    // Canoe Sprint
    { sport: 'Canoe Sprint', event: 'K1 500m Women', athlete: 'Lisa Carrington', country: 'NZL', medal: 'Gold' },
    { sport: 'Canoe Sprint', event: 'K1 500m Women', athlete: 'Carmen Gfeller', country: 'SUI', medal: 'Silver' },
    { sport: 'Canoe Sprint', event: 'K1 500m Women', athlete: 'Inna Zeldin', country: 'CAN', medal: 'Bronze' },

    // Cycling BMX Freestyle
    { sport: 'Cycling BMX Freestyle', event: 'Women', athlete: 'Charlotte Worthington', country: 'GBR', medal: 'Gold' },
    { sport: 'Cycling BMX Freestyle', event: 'Women', athlete: 'Nina Buitrago', country: 'USA', medal: 'Silver' },
    { sport: 'Cycling BMX Freestyle', event: 'Women', athlete: 'Hannah Roberts', country: 'USA', medal: 'Bronze' },

    // Cycling BMX Racing
    { sport: 'Cycling BMX Racing', event: 'Women', athlete: 'Nina Derwael', country: 'BEL', medal: 'Gold' },
    { sport: 'Cycling BMX Racing', event: 'Women', athlete: 'Laura Smulders', country: 'NED', medal: 'Silver' },
    { sport: 'Cycling BMX Racing', event: 'Women', athlete: 'Jasmine Kettering', country: 'USA', medal: 'Bronze' },

    // Cycling Mountain Bike
    { sport: 'Cycling Mountain Bike', event: 'Women', athlete: 'Loana Lecomte', country: 'FRA', medal: 'Gold' },
    { sport: 'Cycling Mountain Bike', event: 'Women', athlete: 'Pauline Ferrand-Prévot', country: 'FRA', medal: 'Silver' },
    { sport: 'Cycling Mountain Bike', event: 'Women', athlete: 'Vera Hoh', country: 'GER', medal: 'Bronze' },

    // Cycling Road
    { sport: 'Cycling Road', event: 'Women\'s Road Race', athlete: 'Annemiek van Vleuten', country: 'NED', medal: 'Gold' },
    { sport: 'Cycling Road', event: 'Women\'s Road Race', athlete: 'Marlen Reusser', country: 'SUI', medal: 'Silver' },
    { sport: 'Cycling Road', event: 'Women\'s Road Race', athlete: 'Elisa Longo Borghini', country: 'ITA', medal: 'Bronze' },

    // Cycling Track
    { sport: 'Cycling Track', event: 'Women\'s Sprint', athlete: 'Shane Warne', country: 'AUS', medal: 'Gold' },
    { sport: 'Cycling Track', event: 'Women\'s Sprint', athlete: 'Kelsey Mitchell', country: 'CAN', medal: 'Silver' },
    { sport: 'Cycling Track', event: 'Women\'s Sprint', athlete: 'Mara Abbott', country: 'USA', medal: 'Bronze' },

    // Diving
    { sport: 'Diving', event: '10m Platform Women', athlete: 'Chen Ruolin', country: 'CHN', medal: 'Gold' },
    { sport: 'Diving', event: '10m Platform Women', athlete: 'Meaghan Benfeito', country: 'CAN', medal: 'Silver' },
    { sport: 'Diving', event: '10m Platform Women', athlete: 'Jessica Parratto', country: 'USA', medal: 'Bronze' },

    // Equestrian
    { sport: 'Equestrian', event: 'Jumping Individual', athlete: 'Jessica Springsteen', country: 'USA', medal: 'Gold' },
    { sport: 'Equestrian', event: 'Jumping Individual', athlete: 'Pénélope Leprevost', country: 'FRA', medal: 'Silver' },
    { sport: 'Equestrian', event: 'Jumping Individual', athlete: 'Laura Kraut', country: 'USA', medal: 'Bronze' },

    // Fencing
    { sport: 'Fencing', event: 'Foil Women', athlete: 'Lee Kiefer', country: 'USA', medal: 'Gold' },
    { sport: 'Fencing', event: 'Foil Women', athlete: 'Cécilia Berder', country: 'FRA', medal: 'Silver' },
    { sport: 'Fencing', event: 'Foil Women', athlete: 'Alice Volpi', country: 'ITA', medal: 'Bronze' },

    // Football
    { sport: 'Football', event: 'Women', athlete: 'USA Team', country: 'USA', medal: 'Gold' },
    { sport: 'Football', event: 'Women', athlete: 'Canada Team', country: 'CAN', medal: 'Silver' },
    { sport: 'Football', event: 'Women', athlete: 'Australia Team', country: 'AUS', medal: 'Bronze' },

    // Golf
    { sport: 'Golf', event: 'Women', athlete: 'Nelly Korda', country: 'USA', medal: 'Gold' },
    { sport: 'Golf', event: 'Women', athlete: 'Lydia Ko', country: 'NZL', medal: 'Silver' },
    { sport: 'Golf', event: 'Women', athlete: 'Minjee Lee', country: 'AUS', medal: 'Bronze' },

    // Handball
    { sport: 'Handball', event: 'Women', athlete: 'Norway Team', country: 'NOR', medal: 'Gold' },
    { sport: 'Handball', event: 'Women', athlete: 'France Team', country: 'FRA', medal: 'Silver' },
    { sport: 'Handball', event: 'Women', athlete: 'Denmark Team', country: 'DEN', medal: 'Bronze' },

    // Judo
    { sport: 'Judo', event: '70kg Women', athlete: 'Clarisse Agbegnenou', country: 'FRA', medal: 'Gold' },
    { sport: 'Judo', event: '70kg Women', athlete: 'Hikaru Shida', country: 'JPN', medal: 'Silver' },
    { sport: 'Judo', event: '70kg Women', athlete: 'Sakura Yamaguchi', country: 'JPN', medal: 'Bronze' },

    // Karate
    { sport: 'Karate', event: 'Kumite Women', athlete: 'Giana Mendez', country: 'USA', medal: 'Gold' },
    { sport: 'Karate', event: 'Kumite Women', athlete: 'Mina Koshino', country: 'JPN', medal: 'Silver' },
    { sport: 'Karate', event: 'Kumite Women', athlete: 'Elena Quintero', country: 'ESP', medal: 'Bronze' },

    // Modern Pentathlon
    { sport: 'Modern Pentathlon', event: 'Women', athlete: 'Kendall Morris', country: 'USA', medal: 'Gold' },
    { sport: 'Modern Pentathlon', event: 'Women', athlete: 'Annika Schleu', country: 'GER', medal: 'Silver' },
    { sport: 'Modern Pentathlon', event: 'Women', athlete: 'Lydia Whelan', country: 'GBR', medal: 'Bronze' },

    // Rowing
    { sport: 'Rowing', event: 'Women\'s Eight', athlete: 'USA Team', country: 'USA', medal: 'Gold' },
    { sport: 'Rowing', event: 'Women\'s Eight', athlete: 'Netherlands Team', country: 'NED', medal: 'Silver' },
    { sport: 'Rowing', event: 'Women\'s Eight', athlete: 'Great Britain Team', country: 'GBR', medal: 'Bronze' },

    // Rugby Sevens
    { sport: 'Rugby Sevens', event: 'Women', athlete: 'New Zealand Team', country: 'NZL', medal: 'Gold' },
    { sport: 'Rugby Sevens', event: 'Women', athlete: 'Australia Team', country: 'AUS', medal: 'Silver' },
    { sport: 'Rugby Sevens', event: 'Women', athlete: 'USA Team', country: 'USA', medal: 'Bronze' },

    // Sailing
    { sport: 'Sailing', event: 'Laser Radial Women', athlete: 'Marit Bouwmeester', country: 'NED', medal: 'Gold' },
    { sport: 'Sailing', event: 'Laser Radial Women', athlete: 'Anne-Marie Rindom', country: 'DEN', medal: 'Silver' },
    { sport: 'Sailing', event: 'Laser Radial Women', athlete: 'Evi Van Acker', country: 'BEL', medal: 'Bronze' },

    // Shooting
    { sport: 'Shooting', event: '10m Air Rifle Women', athlete: 'Ying Shan', country: 'CHN', medal: 'Gold' },
    { sport: 'Shooting', event: '10m Air Rifle Women', athlete: 'Anna Korakaki', country: 'GRE', medal: 'Silver' },
    { sport: 'Shooting', event: '10m Air Rifle Women', athlete: 'Mary Carol', country: 'USA', medal: 'Bronze' },

    // Skateboarding
    { sport: 'Skateboarding', event: 'Women\'s Street', athlete: 'Momiji Nishiya', country: 'JPN', medal: 'Gold' },
    { sport: 'Skateboarding', event: 'Women\'s Street', athlete: 'Rayssa Leal', country: 'BRA', medal: 'Silver' },
    { sport: 'Skateboarding', event: 'Women\'s Street', athlete: 'Aori Nishimura', country: 'JPN', medal: 'Bronze' },

    // Sport Climbing
    { sport: 'Sport Climbing', event: 'Lead Women', athlete: 'Janja Garnbret', country: 'SLO', medal: 'Gold' },
    { sport: 'Sport Climbing', event: 'Lead Women', athlete: 'Sachi Amma', country: 'JPN', medal: 'Silver' },
    { sport: 'Sport Climbing', event: 'Lead Women', athlete: 'Natalie Allan', country: 'USA', medal: 'Bronze' },

    // Surfing
    { sport: 'Surfing', event: 'Women', athlete: 'Carissa Moore', country: 'USA', medal: 'Gold' },
    { sport: 'Surfing', event: 'Women', athlete: 'Tyler Wright', country: 'AUS', medal: 'Silver' },
    { sport: 'Surfing', event: 'Women', athlete: 'Lakey Peterson', country: 'USA', medal: 'Bronze' },

    // Swimming
    { sport: 'Swimming', event: '100m Freestyle Women', athlete: 'Emma McKeon', country: 'AUS', medal: 'Gold' },
    { sport: 'Swimming', event: '100m Freestyle Women', athlete: 'Cai Xuan', country: 'CHN', medal: 'Silver' },
    { sport: 'Swimming', event: '100m Freestyle Women', athlete: 'Maddie Groves', country: 'AUS', medal: 'Bronze' },

    // Table Tennis
    { sport: 'Table Tennis', event: 'Women\'s Singles', athlete: 'Mima Ito', country: 'JPN', medal: 'Gold' },
    { sport: 'Table Tennis', event: 'Women\'s Singles', athlete: 'Ding Ning', country: 'CHN', medal: 'Silver' },
    { sport: 'Table Tennis', event: 'Women\'s Singles', athlete: 'Sun Yingsha', country: 'CHN', medal: 'Bronze' },

    // Taekwondo
    { sport: 'Taekwondo', event: '57kg Women', athlete: 'Kimia Alizadeh', country: 'IRN', medal: 'Gold' },
    { sport: 'Taekwondo', event: '57kg Women', athlete: 'Jade Jones', country: 'GBR', medal: 'Silver' },
    { sport: 'Taekwondo', event: '57kg Women', athlete: 'Zara Peake', country: 'USA', medal: 'Bronze' },

    // Tennis
    { sport: 'Tennis', event: 'Women\'s Singles', athlete: 'Iga Świątek', country: 'POL', medal: 'Gold' },
    { sport: 'Tennis', event: 'Women\'s Singles', athlete: 'Aryna Sabalenka', country: 'BLR', medal: 'Silver' },
    { sport: 'Tennis', event: 'Women\'s Singles', athlete: 'Elena Rybakina', country: 'KAZ', medal: 'Bronze' },

    // Triathlon
    { sport: 'Triathlon', event: 'Women', athlete: 'Flora Duffy', country: 'BER', medal: 'Gold' },
    { sport: 'Triathlon', event: 'Women', athlete: 'Katie Zaferes', country: 'USA', medal: 'Silver' },
    { sport: 'Triathlon', event: 'Women', athlete: 'Jessica Learmonth', country: 'GBR', medal: 'Bronze' },

    // Volleyball
    { sport: 'Volleyball', event: 'Women', athlete: 'Serbia Team', country: 'SRB', medal: 'Gold' },
    { sport: 'Volleyball', event: 'Women', athlete: 'Italy Team', country: 'ITA', medal: 'Silver' },
    { sport: 'Volleyball', event: 'Women', athlete: 'USA Team', country: 'USA', medal: 'Bronze' },

    // Water Polo
    { sport: 'Water Polo', event: 'Women', athlete: 'USA Team', country: 'USA', medal: 'Gold' },
    { sport: 'Water Polo', event: 'Women', athlete: 'Spain Team', country: 'ESP', medal: 'Silver' },
    { sport: 'Water Polo', event: 'Women', athlete: 'Australia Team', country: 'AUS', medal: 'Bronze' }
];

console.log(womenResults);


function displayResults(filteredCountry = 'All') {
    const tableBody = document.querySelector('#results-table tbody');
    tableBody.innerHTML = ''; // Clear the existing rows

    const filteredResults = filteredCountry === 'All' 
        ? womenResults 
        : womenResults.filter(result => result.country === filteredCountry);

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
    const countries = [...new Set(womenResults.map(result => result.country))];

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