const listings = [
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Cozy Cottage by the Lake",
    description: "A peaceful retreat surrounded by lakeside beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1470&q=80"
    },
    price: 850,
    location: "Lake District",
    country: "United Kingdom"
  },
  {
    title: "Rustic Mountain Cabin",
    description: "Charming wooden cabin nestled in the mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1470&q=80"
    },
    price: 950,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Beachfront Villa Retreat",
    description: "Private villa with direct beach access and ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1708261582096-db8a685f31bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2200,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Stylish Urban Loft",
    description: "Modern loft apartment in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1300,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Snowy Cabin in the Woods",
    description: "Cozy cabin retreat surrounded by winter wonderland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1050,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Tropical Bungalow",
    description: "Island hideaway surrounded by palms and sea breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1740479948645-3eb39a64e843?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 900,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Classic Parisian Apartment",
    description: "Beautiful flat overlooking the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1600,
    location: "Paris",
    country: "France"
  },
  {
    title: "Historic Townhouse",
    description: "Charming historic home in a scenic neighborhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1400,
    location: "Charleston",
    country: "United States"
  },
  {
    title: "Jungle Treehouse",
    description: "Unique stay nestled in lush jungle treetops.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Mediterranean Villa",
    description: "Peaceful villa with stunning sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1470&q=80"
    },
    price: 2000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Boho Desert Getaway",
    description: "Chic retreat in arid desert surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591731440008-37f878ff2d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 880,
    location: "Joshua Tree",
    country: "United States"
  },
  {
    title: "Lakefront A‑Frame Cabin",
    description: "Cozy cabin with private dock and lake views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1668293498099-c6875290e924?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 980,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Scandinavian Studio",
    description: "Minimalist, modern living in a Nordic-designed studio.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616045152636-8dc45bf00e4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 890,
    location: "Stockholm",
    country: "Sweden"
  },
  {
    title: "Château Escape",
    description: "Vintage château in the scenic countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1676494515267-19d8241a7015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2500,
    location: "Loire Valley",
    country: "France"
  },
  {
    title: "Sunset Villa Overlook",
    description: "Luxury hillside villa with golden sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1470&q=80"
    },
    price: 2300,
    location: "Amalfi Coast",
    country: "Italy"
  },
  {
    title: "Alpine Chalet",
    description: "Picturesque chalet with ski-in, ski-out access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1699442899160-9eb628be267f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1800,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Countryside Farmhouse",
    description: "Traditional farmhouse with a scenic rural setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1620075037474-e40d869cac68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Floating River House",
    description: "Unique home on the water with serene river views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1649098234309-320e48deb529?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1450,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Secluded Clifftop Hut",
    description: "Remote hut nestled on a dramatic cliff edge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657690319525-405ceef570bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 720,
    location: "Faroe Islands",
    country: "Denmark"
  },
  {
    title: "Lush Jungle Resort",
    description: "Modern resort set among tropical foliage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1659329296398-04f11b7f4778?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1400,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Minimal City Loft",
    description: "Bright, open-plan loft in a bustling city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1604042851346-099dbdca84b2?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 1100,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Eco Bamboo Retreat",
    description: "Handcrafted bamboo home in serene natural setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1690327840273-f684ed868fd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 960,
    location: "Chiang Mai",
    country: "Thailand"
  },
  {
    title: "Bright Seaside Studio",
    description: "Sunlit studio steps from sandy shores.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657315138153-067917537537?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 990,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Garden Urban Loft",
    description: "Loft apartment opening onto a private urban garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1470&q=80"
    },
    price: 1250,
    location: "Melbourne",
    country: "Australia"
  }
];

module.exports = listings;