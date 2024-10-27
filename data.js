const athletes = [
    {
        name: "Simone Biles",
        country: "USA",
        sport: "Gymnastics",
        photo: "simonbiles.png"
    },
    {
        name: "Eliud Kipchoge",
        country: "Kenya",
        sport: "Marathon",
        photo: "EliudKipchoge.png"
    },
    {
        name: "Naomi Osaka",
        country: "Japan",
        sport: "Tennis",
        photo: "NaomiOsaka.png"
    },
    {
        name: "Armand Duplantis",
        country: "Sweden",
        sport: "Pole Vault",
        photo: "ArmandDuplantis.png"
    },
    {
        name: "Katarina Johnson-Thompson",
        country: "Great Britain",
        sport: "Heptathlon",
        photo: "KatarinaJohnsonThompson.png"
    },
    {
        name: "Teddy Riner",
        country: "France",
        sport: "Judo",
        photo: "TeddyRiner.jpeg"
    },
    {
        name: "Katie Ledecky",
        country: "USA",
        sport: "Swimming",
        photo: "Katie Ledecky.jpeg"
    },
    {
        name: "Neeraj Chopra",
        country: "India",
        sport: "Javelin",
        photo: "neerajchopra.jpeg"
    },
    {
        name: "Sky Brown",
        country: "Great Britain",
        sport: "Skateboarding",
        photo: "Sky Brown.jpeg"
    },
    {
        name: "Sifan Hassan",
        country: "Netherlands",
        sport: "Track and Field",
        photo: "Sifan Hassan.jpeg"
    },
    {
        name: "Tom Daley",
        country: "Great Britain",
        sport: "Diving",
        photo: "Tom Daley.jpeg"
    },
    {
        name: "Allyson Felix",
        country: "USA",
        sport: "Track and Field",
        photo: "Allyson Felix.jpeg"
    },
    {
        name: "Mutaz Essa Barshim",
        country: "Qatar",
        sport: "High Jump",
        photo: "Mutaz Essa Barshim.jpeg"
    },
    {
        name: "Megan Rapinoe",
        country: "USA",
        sport: "Football (Soccer)",
        photo: "Megan Rapinoe.jpeg"
    },
    {
        name: "Yulimar Rojas",
        country: "Venezuela",
        sport: "Triple Jump",
        photo: "Yulimar Rojas.jpeg"
    },
    {
        name: "Novak Djokovic",
        country: "Serbia",
        sport: "Tennis",
        photo: "Novak Djokovic.jpeg"
    },
    {
        name: "Sydney McLaughlin",
        country: "USA",
        sport: "Track and Field",
        photo: "Sydney McLaughlin.jpeg"
    },
    {
        name: "Tori Bowie",
        country: "USA",
        sport: "Track and Field",
        photo: "Tori Bowie.jpeg"
    },
    {
        name: "Adam Peaty",
        country: "Great Britain",
        sport: "Swimming",
        photo: "Adam Peaty.jpeg"
    },
    {
        name: "Marcell Jacobs",
        country: "Italy",
        sport: "Track and Field",
        photo: "Marcell Jacobs.jpeg"
    },
    {
        name: "Lisa Carrington",
        country: "New Zealand",
        sport: "Canoeing",
        photo: "Lisa Carrington.jpeg"
    },
    {
        name: "Shaunae Miller-Uibo",
        country: "Bahamas",
        sport: "Track and Field",
        photo: "Shaunae Miller-Uibo.jpeg"
    },
    {
        name: "Caeleb Dressel",
        country: "USA",
        sport: "Swimming",
        photo: "Caeleb Dressel.jpeg"
    },
    {
        name: "Hidilyn Diaz",
        country: "Philippines",
        sport: "Weightlifting",
        photo: "Hidilyn Diaz.jpeg"
    },
    {
        name: "Pauline Ferrand-Prévot",
        country: "France",
        sport: "Cycling",
        photo: "Pauline Ferrand-Prévot.jpeg"
    },
    {
        name: "Anna van der Breggen",
        country: "Netherlands",
        sport: "Cycling",
        photo: "Anna van der Breggen.jpeg"
    },
    {
        name: "David Rudisha",
        country: "Kenya",
        sport: "800m",
        photo: "David Rudisha.jpeg"
    },
    {
        name: "Shelly-Ann Fraser-Pryce",
        country: "Jamaica",
        sport: "Track and Field",
        photo: "Shelly-Ann Fraser-Pryce.jpeg"
    },
    {
        name: "Karsten Warholm",
        country: "Norway",
        sport: "400m Hurdles",
        photo: "karsten Warholm.jpeg"
    },
    {
        name: "Annemiek van Vleuten",
        country: "Netherlands",
        sport: "Cycling",
        photo: "Annemiek van Vleuten.jpeg"
    },
    {
        name: "Kanoa Igarashi",
        country: "Japan",
        sport: "Surfing",
        photo: "Kanoa Igarashi.jpeg"
    },
    {
        name: "Janja Garnbret",
        country: "Slovenia",
        sport: "Sport Climbing",
        photo: "Janja Garnbret.jpeg"
    },
    {
        name: "Dalilah Muhammad",
        country: "USA",
        sport: "Track and Field",
        photo: "Dalilah Muhammad.jpeg"
    },
    {
        name: "Fernando Gaviria",
        country: "Colombia",
        sport: "Cycling",
        photo: "Fernando Gaviria.jpeg"
    },
    {
        name: "Sarah Sjöström",
        country: "Sweden",
        sport: "Swimming",
        photo: "Sarah Sjöström.jpeg"
    },
    {
        name: "Kelsey-Lee Barber",
        country: "Australia",
        sport: "Javelin",
        photo: "Kelsey-Lee Barber.jpeg"
    },
    {
        name: "Marcus Rashford",
        country: "Great Britain",
        sport: "Football (Soccer)",
        photo: "Marcus Rashford.jpeg"
    },
    {
        name: "Julian Alaphilippe",
        country: "France",
        sport: "Cycling",
        photo: "Julian Alaphilippe.jpeg"
    },
    {
        name: "Sally Pearson",
        country: "Australia",
        sport: "Track and Field",
        photo: "Sally Pearson.jpeg"
    },
    {
        name: "Félix Auger-Aliassime",
        country: "Canada",
        sport: "Tennis",
        photo: "Félix Auger-Aliassime.jpeg"
    },
    {
        name: "Rafael Nadal",
        country: "Spain",
        sport: "Tennis",
        photo: "Rafael Nadal.jpeg"
    },
    {
        name: "Laura Kenny",
        country: "Great Britain",
        sport: "Cycling",
        photo: "Laura Kenny.jpeg"
    },
    {
        name: "Yusra Mardini",
        country: "Refugee Olympic Team",
        sport: "Swimming",
        photo: "Yusra Mardini.jpeg"
    },
    {
        name: "Simona Halep",
        country: "Romania",
        sport: "Tennis",
        photo: "Simona Halep.jpeg"
    },
    {
        name: "Gwen Jorgensen",
        country: "USA",
        sport: "Triathlon",
        photo: "Gwen Jorgensen.jpeg"
    },
    {
        name: "Pau Gasol",
        country: "Spain",
        sport: "Basketball",
        photo: "Pau Gasol.jpeg"
    },
    {
        name: "Caster Semenya",
        country: "South Africa",
        sport: "Track and Field",
        photo: "Caster Semenya.jpeg"
    },
    {
        name: "PV Sindhu",
        country: "India",
        sport: "Badminiton",
        photo: "PV Sindhu.jpeg"
    }

];
