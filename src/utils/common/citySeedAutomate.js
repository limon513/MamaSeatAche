//this is by gemini google ai with a smart prompt.
const cityList = [
    { name: "Dhaka", createdAt: new Date(), updatedAt: new Date() },
    { name: "Dinajpur", createdAt: new Date(), updatedAt: new Date() },
    { name: "Panchagarh", createdAt: new Date(), updatedAt: new Date() },
    { name: "Nilphamari", createdAt: new Date(), updatedAt: new Date() },
    { name: "Kurigram", createdAt: new Date(), updatedAt: new Date() },
    { name: "Rangpur", createdAt: new Date(), updatedAt: new Date() },
    { name: "Thakurgaon", createdAt: new Date(), updatedAt: new Date() },
    { name: "Cox's Bazar", createdAt: new Date(), updatedAt: new Date() },
    { name: "Feni", createdAt: new Date(), updatedAt: new Date() },
    { name: "Darshana", createdAt: new Date(), updatedAt: new Date() },
    { name: "Joypurhat", createdAt: new Date(), updatedAt: new Date() },
    { name: "Satkhira", createdAt: new Date(), updatedAt: new Date() },
    { name: "Bogra", createdAt: new Date(), updatedAt: new Date() },
    { name: "Naogaon", createdAt: new Date(), updatedAt: new Date() },
    { name: "Chapai Nawabganj", createdAt: new Date(), updatedAt: new Date() },
    { name: "Gopalganj", createdAt: new Date(), updatedAt: new Date() },
    { name: "Hili", createdAt: new Date(), updatedAt: new Date() },
    { name: "Chittagong", createdAt: new Date(), updatedAt: new Date() },
    { name: "Khulna", createdAt: new Date(), updatedAt: new Date() },
    { name: "Sylhet", createdAt: new Date(), updatedAt: new Date() },
    { name: "Barisal", createdAt: new Date(), updatedAt: new Date() },
    { name: "Bandarban", createdAt: new Date(), updatedAt: new Date() },
    { name: "Teknaf", createdAt: new Date(), updatedAt: new Date() },
    { name: "Khagrachari", createdAt: new Date(), updatedAt: new Date() },
    { name: "Moulvibazar", createdAt: new Date(), updatedAt: new Date() },
    { name: "Sreemangal", createdAt: new Date(), updatedAt: new Date() },
    { name: "Rangamati", createdAt: new Date(), updatedAt: new Date() },
    { name: "Kolkata", createdAt: new Date(), updatedAt: new Date() },
    { name: "Rajshahi", createdAt: new Date(), updatedAt: new Date() },
    { name: "Nazirhat", createdAt: new Date(), updatedAt: new Date() },
    { name: "Jessore", createdAt: new Date(), updatedAt: new Date() },
    { name: "Kushtia", createdAt: new Date(), updatedAt: new Date() },
    { name: "Gaibandha", createdAt: new Date(), updatedAt: new Date() },
    { name: "Jhenaidah", createdAt: new Date(), updatedAt: new Date() },
    { name: "Brahmanbaria", createdAt: new Date(), updatedAt: new Date() }
  ];
  
  cityList.sort((cityA, cityB) => {
    // Compare the names using localeCompare for case-insensitive sorting
    return cityA.name.localeCompare(cityB.name);
  });

  module.exports = cityList;