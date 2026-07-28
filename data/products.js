const products = [
  {
    customId: 1,
    name: "Ivory Zari Linen Suit",
    category: "Cotton Suits",
    price: 1680,
    description: "Hand-block printed linen cotton suit with a zari border and soft festive finish.",
    image: "https://image2url.com/images/1763017081285-618612d2-a11e-4ad2-a1cd-f817b4b15fc6.jpg",
    images: {
      pink: "https://image2url.com/images/1763017081285-618612d2-a11e-4ad2-a1cd-f817b4b15fc6.jpg",
      green: "https://image2url.com/images/1763040639179-460cc0d5-c77d-47b6-ae87-f9b9ad74e166.jpg",
      yellow: "https://image2url.com/images/1763040581576-0e5c302e-2f30-4b21-8745-dbb75996fe86.jpg"
    },
    sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 2,
    name: "Rose Petal Cotton Suit",
    category: "Cotton Suits",
    price: 1540,
    description: "Fresh stitched cotton suit set with breathable fabric and a coordinated cotton dupatta.",
    image: "https://image2url.com/images/1763099180326-57d1c519-798d-482a-96e0-71140a0c6a2d.jpg",
    images: {
      yellow: "https://image2url.com/images/1763099180326-57d1c519-798d-482a-96e0-71140a0c6a2d.jpg",
      green: "https://image2url.com/images/1763099301213-1e0b2f73-c641-4dec-8b23-f1082ab9f20d.jpg",
      maroon: "https://image2url.com/images/1763099361169-864ff32b-e252-4ee8-8177-8595cf5b6272.jpg"
    },
     sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 3,
    name: "Indigo Bagru Linen Suit",
    category: "Cotton Suits",
    price: 1180,
    description: "Clean Bagru-inspired print with a refined zari border for an elegant everyday look.",

      image: "https://image2url.com/images/1763540633639-26854237-0af3-48f9-bc0d-d66b61989506.jpg",
    images: {
      brown: "https://image2url.com/images/1763540633639-26854237-0af3-48f9-bc0d-d66b61989506.jpg"
    },
     sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 4,
    name: "Emerald Border Linen Suit",
    category: "Cotton Suits",
    price: 1760,
    description: "Soft linen cotton suit with a simple printed body and rich zari detailing.",
     image: "https://image2url.com/images/1763540672969-454f8385-95ce-4d1e-866b-5770c7e2c243.jpg",
    images: {
      green: "https://image2url.com/images/1763540672969-454f8385-95ce-4d1e-866b-5770c7e2c243.jpg"
   
    },
    sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 5,
    name: "Sky Blue Uppada Saree",
    category: "Sarees",
    price: 5850,
    description: "Lightweight Uppada saree with a rich pallu and a smooth, graceful drape.",
    image: "https://image2url.com/images/1763090728758-aad2b18c-cb9b-4e15-beb2-ad70632d383b.jpg",
    images: {
      blue: "https://image2url.com/images/1763090728758-aad2b18c-cb9b-4e15-beb2-ad70632d383b.jpg",
      white: "https://image2url.com/images/1763090848784-e6176f68-8efd-4b06-97df-016e72752cbd.jpg"
    },
    sizes: ["Free Size"],
    stock: 20
  },
    {
    customId: 6,
    name: "Mint Green Uppada Saree",
    category: "Sarees",
    price: 6120,
    description: "Elegant Uppada pattu saree designed for festive wear and comfortable movement.",
    image: "https://image2url.com/images/1763090803821-1d6cdf1c-80fe-4a61-97d7-ce9f42f7dbad.jpg",
    images: {
      green: "https://image2url.com/images/1763090803821-1d6cdf1c-80fe-4a61-97d7-ce9f42f7dbad.jpg",
      blue: "https://image2url.com/images/1763090772841-2a531e52-39db-4e24-9a35-5014dce38524.jpg"
    },
    sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 7,
    name: "Amber Festive Saree",
    category: "Sarees",
    price: 6480,
    description: "Traditional Uppada saree with a polished finish and a timeless ethnic feel.",
    image: "https://image2url.com/images/1763101038593-1f4aad6b-464c-4abf-aec7-2ac3344652e9.jpg",
    images: {
      orange: "https://image2url.com/images/1763101038593-1f4aad6b-464c-4abf-aec7-2ac3344652e9.jpg",
      green: "https://image2url.com/images/1763101096432-102ad710-540b-43b9-a6fe-a5c4b7416106.jpg",
      brown: "https://image2url.com/images/1763101308393-db70d9b7-1922-4621-a570-1f78248c3cac.jpg"
    },
    sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 8,
    name: "Ruby Draped Saree",
    category: "Sarees",
    price: 5750,
    description: "Soft woven saree with a rich pallu and an easy, elegant fall.",
    image: "https://image2url.com/images/1763101565189-510306e2-f1c1-4761-ae60-2dbf4b59c62d.jpg",
    images: {
      blue: "https://image2url.com/images/1763101565189-510306e2-f1c1-4761-ae60-2dbf4b59c62d.jpg",
      red: "https://image2url.com/images/1763108595001-5fc0392c-8429-4a0f-adff-22c38f150bfa.jpg"
    },
    sizes: ["Free Size"],
    stock: 20
  },

  {
    customId: 9,
    name: "Classic Rangoli Mat",
    category: "Home Decor",
    price: 650,
    description: "Machine-washable rangoli mat with a neat 60 x 60 cm shape and durable finish.",
    image: "https://image2url.com/images/1763107939866-2c01c161-d0fb-4f29-b665-070cb4d5221b.jpg",
    images: {
      white: "https://image2url.com/images/1763107939866-2c01c161-d0fb-4f29-b665-070cb4d5221b.jpg"
    },
    sizes: ["Standard"],
    stock: 20
  },

  {
    customId: 10,
    name: "Lotus Rangoli Mat",
    category: "Home Decor",
    price: 720,
    description: "Festive rangoli mat with easy-care fabric and a bright decorative look.",
    image: "https://image2url.com/images/1763094488721-1ffe7db8-a9b4-46dd-a0f6-9acf13974ab5.jpg",
    images: {
      white: "https://image2url.com/images/1763094488721-1ffe7db8-a9b4-46dd-a0f6-9acf13974ab5.jpg"
    },
    sizes: ["Standard"],
    stock: 20
  },
    {
    customId: 11,
    name: "Temple Rangoli Mat",
    category: "Home Decor",
    price: 690,
    description: "Decorative rangoli mat with a clean border and a traditional entryway style.",
    image: "https://image2url.com/images/1763094383703-c8684453-35c4-472f-878c-cb6f29ca393b.jpg",
    images: {
      white: "https://image2url.com/images/1763094383703-c8684453-35c4-472f-878c-cb6f29ca393b.jpg"
    },
    sizes: ["Standard"],
    stock: 20
  },

  {
    customId: 12,
    name: "Festive Rangoli Mat",
    category: "Home Decor",
    price: 760,
    description: "Classic rangoli mat made for pooja spaces, doorways, and festive corners.",
    image: "https://image2url.com/images/1763108078214-79dc5fe3-4900-46b2-81f8-54f607a77ec6.jpg",
    images: {
      white: "https://image2url.com/images/1763108078214-79dc5fe3-4900-46b2-81f8-54f607a77ec6.jpg"
    },
    sizes: ["Standard"],
    stock: 20
  },

  {
    customId: 13,
    name: "Peach Blossom Stitched Suit",
    category: "Stitched Cotton Suits",
    price: 1590,
    description: "Hand-block printed stitched cotton suit with a neat fit and cotton dupatta.",
    image: "https://image2url.com/images/1763540159354-b085590e-4794-4140-a8de-6dd7d18ef8b4.jpg",
    images: {
      peach: "https://image2url.com/images/1763540159354-b085590e-4794-4140-a8de-6dd7d18ef8b4.jpg"
    },
    sizes: ["M", "L", "XL"],
    stock: 20
  },

  {
    customId: 14,
    name: "Mustard Grace Stitched Suit",
    category: "Stitched Cotton Suits",
    price: 1650,
    description: "Tailored stitched cotton suit set with breathable comfort and a polished look.",
    image: "https://image2url.com/images/1763540485227-0031bb49-5899-4f6a-8434-4da995cd5466.jpg",
    images: {
      yellow: "https://image2url.com/images/1763540485227-0031bb49-5899-4f6a-8434-4da995cd5466.jpg"
    },
    sizes: ["M", "L", "XL"],
    stock: 20
  },

  {
    customId: 15,
    name: "Violet Bloom Stitched Suit",
    category: "Stitched Cotton Suits",
    price: 1720,
    description: "Ready-to-wear cotton suit with printed detailing and a coordinated dupatta.",
     image: "https://image2url.com/images/1763098533909-fca64a7f-d91b-450c-a132-5196cf5779a0.jpg",
    images: {
      pink: "https://image2url.com/images/1763098533909-fca64a7f-d91b-450c-a132-5196cf5779a0.jpg",
      peach: "https://image2url.com/images/1763098704744-b16a56f0-d177-47e9-81a3-1287cd67a291.jpg",
      violet: "https://image2url.com/images/1763098828408-234e33cf-97db-4d57-aa87-489d271071fb.jpg"
   
    },
    sizes: ["M", "L", "XL"],
    stock: 20
  },
    {
    customId: 16,
    name: "Teal Comfort Stitched Suit",
    category: "Stitched Cotton Suits",
    price: 1480,
    description: "Comfortable stitched cotton suit with soft fabric and easy daily styling.",
     image: "https://image2url.com/images/1763099829060-0d6db765-d8de-4859-b731-19649e13bc3a.jpg",
    images: {
      blue: "https://image2url.com/images/1763099829060-0d6db765-d8de-4859-b731-19649e13bc3a.jpg",
      black: "https://image2url.com/images/1763099757480-cba15e86-6f41-422f-94ef-4adffe96ea09.jpg",
      navyblue: "https://image2url.com/images/1763099901324-b91ededf-8446-4efd-95bc-b89b3f3d63cd.jpg"
   
    },
    sizes: ["M", "L", "XL"],
    stock: 20
  },

  {
    customId: 17,
    name: "Midnight Blue Custom Jeans",
    category: "Customised Jeans",
    price: 899,
    description: "Customised jeans with a confident fit and a standout personalized finish.",
    image: "https://image2url.com/images/1764053881065-4120d8b6-6230-435b-9e0e-8ef4e35ddc4b.jpg",
    images: {
      color: "https://image2url.com/images/1764053881065-4120d8b6-6230-435b-9e0e-8ef4e35ddc4b.jpg"
    },
    sizes: ["28", "30", "32", "34"],
    stock: 20
  },

  {
    customId: 18,
    name: "Urban Slate Custom Jeans",
    category: "Customised Jeans",
    price: 949,
    description: "Stylish customised jeans designed for comfort, character, and everyday wear.",
    image: "https://image2url.com/images/1764053813714-e60c1d36-baaa-475c-a8f9-79118b7538ca.jpg",
    images: {
      color: "https://image2url.com/images/1764053813714-e60c1d36-baaa-475c-a8f9-79118b7538ca.jpg"
    },
    sizes: ["28", "30", "32", "34"],
    stock: 20
  },

  {
    customId: 19,
    name: "Indigo Edge Custom Jeans",
    category: "Customised Jeans",
    price: 999,
    description: "Modern customised jeans with a clean look and a unique tailored feel.",
    image: "https://image2url.com/images/1764053741532-9573d692-3ea1-4fb2-b844-254f0e20e379.jpg",
    images: {
      color: "https://image2url.com/images/1764053741532-9573d692-3ea1-4fb2-b844-254f0e20e379.jpg"
    },
    sizes: ["28", "30", "32", "34"],
    stock: 20
  }
];

module.exports = products;
