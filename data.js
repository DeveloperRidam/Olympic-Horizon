const athletes = [
    {
        name: "Simone Biles",
        country: "USA",
        sport: "Gymnastics",
        photo: "img/simonbiles.png"
    },
    {
        name: "Eliud Kipchoge",
        country: "Kenya",
        sport: "Marathon",
        photo: "img/EliudKipchoge.png"
    },
    {
        name: "Naomi Osaka",
        country: "Japan",
        sport: "Tennis",
        photo: "img/NaomiOsaka.png"
    },
    {
        name: "Armand Duplantis",
        country: "Sweden",
        sport: "Pole Vault",
        photo: "img/ArmandDuplantis.png"
    },
    {
        name: "Katarina Johnson-Thompson",
        country: "Great Britain",
        sport: "Heptathlon",
        photo: "img/KatarinaJohnsonThompson.png"
    },
    {
        name: "Teddy Riner",
        country: "France",
        sport: "Judo",
        photo: "img/TeddyRiner.jpeg"
    },
    {
        name: "Katie Ledecky",
        country: "USA",
        sport: "Swimming",
        photo: "img/Katie Ledecky.jpeg"
    },
    {
        name: "Neeraj Chopra",
        country: "India",
        sport: "Javelin",
        photo: "img/neerajchopra.jpeg"
    },
    {
        name: "Sky Brown",
        country: "Great Britain",
        sport: "Skateboarding",
        photo: "img/Sky Brown.jpeg"
    },
    {
        name: "Sifan Hassan",
        country: "Netherlands",
        sport: "Track and Field",
        photo: "img/Sifan Hassan.jpeg"
    },
    {
        name: "Tom Daley",
        country: "Great Britain",
        sport: "Diving",
        photo: "img/Tom Daley.jpeg"
    },
    {
        name: "Allyson Felix",
        country: "USA",
        sport: "Track and Field",
        photo: "img/Allyson Felix.jpeg"
    },
    {
        name: "Mutaz Essa Barshim",
        country: "Qatar",
        sport: "High Jump",
        photo: "img/Mutaz Essa Barshim.jpeg"
    },
    {
        name: "Megan Rapinoe",
        country: "USA",
        sport: "Football (Soccer)",
        photo: "img/Megan Rapinoe.jpeg"
    },
    {
        name: "Yulimar Rojas",
        country: "Venezuela",
        sport: "Triple Jump",
        photo: "img/Yulimar Rojas.jpeg"
    },
    {
        name: "Novak Djokovic",
        country: "Serbia",
        sport: "Tennis",
        photo: "img/Novak Djokovic.jpeg"
    },
    {
        name: "Sydney McLaughlin",
        country: "USA",
        sport: "Track and Field",
        photo: "img/Sydney McLaughlin.jpeg"
    },
    {
        name: "Tori Bowie",
        country: "USA",
        sport: "Track and Field",
        photo: "img/Tori Bowie.jpeg"
    },
    {
        name: "Adam Peaty",
        country: "Great Britain",
        sport: "Swimming",
        photo: "img/Adam Peaty.jpeg"
    },
    {
        name: "Marcell Jacobs",
        country: "Italy",
        sport: "Track and Field",
        photo: "img/Marcell Jacobs.jpeg"
    },
    {
        name: "Lisa Carrington",
        country: "New Zealand",
        sport: "Canoeing",
        photo: "img/Lisa Carrington.jpeg"
    },
    {
        name: "Shaunae Miller-Uibo",
        country: "Bahamas",
        sport: "Track and Field",
        photo: "img/Shaunae Miller-Uibo.jpeg"
    },
    {
        name: "Caeleb Dressel",
        country: "USA",
        sport: "Swimming",
        photo: "img/Caeleb Dressel.jpeg"
    },
    {
        name: "Hidilyn Diaz",
        country: "Philippines",
        sport: "Weightlifting",
        photo: "img/Hidilyn Diaz.jpeg"
    },
    {
        name: "Pauline Ferrand-Prévot",
        country: "France",
        sport: "Cycling",
        photo: "img/Pauline Ferrand-Prévot.jpeg"
    },
    {
        name: "Anna van der Breggen",
        country: "Netherlands",
        sport: "Cycling",
        photo: "img/Anna van der Breggen.jpeg"
    },
    {
        name: "David Rudisha",
        country: "Kenya",
        sport: "800m",
        photo: "img/David Rudisha.jpeg"
    },
    {
        name: "Shelly-Ann Fraser-Pryce",
        country: "Jamaica",
        sport: "Track and Field",
        photo: "img/Shelly-Ann Fraser-Pryce.jpeg"
    },
    {
        name: "Karsten Warholm",
        country: "Norway",
        sport: "400m Hurdles",
        photo: "img/karsten Warholm.jpeg"
    },
    {
        name: "Annemiek van Vleuten",
        country: "Netherlands",
        sport: "Cycling",
        photo: "img/Annemiek van Vleuten.jpeg"
    },
    {
        name: "Kanoa Igarashi",
        country: "Japan",
        sport: "Surfing",
        photo: "img/Kanoa Igarashi.jpeg"
    },
    {
        name: "Janja Garnbret",
        country: "Slovenia",
        sport: "Sport Climbing",
        photo: "img/Janja Garnbret.jpeg"
    },
    {
        name: "Dalilah Muhammad",
        country: "USA",
        sport: "Track and Field",
        photo: "img/Dalilah Muhammad.jpeg"
    },
    {
        name: "Fernando Gaviria",
        country: "Colombia",
        sport: "Cycling",
        photo: "img/Fernando Gaviria.jpeg"
    },
    {
        name: "Sarah Sjöström",
        country: "Sweden",
        sport: "Swimming",
        photo: "img/Sarah Sjöström.jpeg"
    },
    {
        name: "Kelsey-Lee Barber",
        country: "Australia",
        sport: "Javelin",
        photo: "img/Kelsey-Lee Barber.jpeg"
    },
    {
        name: "Marcus Rashford",
        country: "Great Britain",
        sport: "Football (Soccer)",
        photo: "img/Marcus Rashford.jpeg"
    },
    {
        name: "Julian Alaphilippe",
        country: "France",
        sport: "Cycling",
        photo: "img/Julian Alaphilippe.jpeg"
    },
    {
        name: "Sally Pearson",
        country: "Australia",
        sport: "Track and Field",
        photo: "img/Sally Pearson.jpeg"
    },
    {
        name: "Félix Auger-Aliassime",
        country: "Canada",
        sport: "Tennis",
        photo: "img/Félix Auger-Aliassime.jpeg"
    },
    {
        name: "Rafael Nadal",
        country: "Spain",
        sport: "Tennis",
        photo: "img/Rafael Nadal.jpeg"
    },
    {
        name: "Laura Kenny",
        country: "Great Britain",
        sport: "Cycling",
        photo: "img/Laura Kenny.jpeg"
    },
    {
        name: "Yusra Mardini",
        country: "Refugee Olympic Team",
        sport: "Swimming",
        photo: "img/Yusra Mardini.jpeg"
    },
    {
        name: "Simona Halep",
        country: "Romania",
        sport: "Tennis",
        photo: "img/Simona Halep.jpeg"
    },
    {
        name: "Gwen Jorgensen",
        country: "USA",
        sport: "Triathlon",
        photo: "img/Gwen Jorgensen.jpeg"
    },
    {
        name: "Pau Gasol",
        country: "Spain",
        sport: "Basketball",
        photo: "img/Pau Gasol.jpeg"
    },
    {
        name: "Caster Semenya",
        country: "South Africa",
        sport: "Track and Field",
        photo: "img/Caster Semenya.jpeg"
    },
    {
        name: "PV Sindhu",
        country: "India",
        sport: "Badminiton",
        photo: "img/PV Sindhu.jpeg"
    }

];
