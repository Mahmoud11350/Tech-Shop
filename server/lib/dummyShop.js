const dummyShop = [
  {
    name: "Apple Watch Series 9 Solo Loop (Aluminum) - Mindnight",
    category: "watches",
    availability: true,
    price: 499,
    description:
      "Introducing the Apple Watch Series 9 Solo Loop in Midnight Aluminum. Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535814/Smart%20Shop/apple-watch-series-9-aluminum_sinndq.png",
  },
  {
    name: "Apple Watch Ultra 2",
    category: "watches",
    availability: true,
    price: 799,
    description:
      "Introducing the Apple Watch Ultra 2 with Alpine Loop Carbon Neutral Band. Experience cutting-edge fitness tracking, vibrant display, and sustainability in a stylish design that complements your active lifestyle.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535815/Smart%20Shop/apple-watch-ultra-2_x14fli.png",
  },

  {
    name: "Apple TV 4K Wi-Fi",
    category: "tv & home",
    availability: true,
    price: 129,
    description:
      "Apple TV 4K lets you watch shows and movies in stunning 4K Dolby Vision and HDR10+. Get theater-like Spatial Audio with Dolby Atmos that immerses you in sound.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535808/Smart%20Shop/apple-tv-4k-wifi_qigbiz.png",
  },
  {
    name: "11-inch iPad Pro (512 GB) - Space Gray",
    category: "ipads",
    availability: true,
    price: 1099,
    description:
      "The 11-inch iPad Pro (512GB) in Space Gray delivers a powerful and immersive experience with features like a Liquid Retina display, Apple M1 chip, 5G capability, Thunderbolt/USB 4 ports, and a versatile storage capacity of 512GB.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535819/Smart%20Shop/11-inch-ipad-pro-512gb-space-gray_kwm3sq.png",
  },
  {
    name: "Apple iPad Air (256 GB) - Purple",
    category: "ipads",
    availability: true,
    price: 749,
    description:
      "Elevate your digital experience with the iPad Air (256GB). Unleash powerful performance in a sleek design, featuring a vivid display, versatile capabilities, and ample storage for seamless productivity and entertainment.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535805/Smart%20Shop/apple-ipad-air-256gb-purple_rfsqt2.png",
  },
  {
    name: "Apple Pencil (1st generation)",
    category: "accessories",
    availability: true,
    price: 99,
    description:
      "Apple Pencil expands the versatility of iPad and opens up new creative possibilities. It’s sensitive to pressure and tilt so you can easily vary line weight, create subtle shading, and produce a wide range of artistic effects.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535808/Smart%20Shop/apple-pencil-1st-generation_flcjuu.png",
  },
  {
    name: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
    category: "accessories",
    availability: true,
    price: 249,
    description:
      "AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C) deliver up to 2x more Active Noise Cancellation than the previous generation,¹ with Transparency mode that enables you to hear the world around you.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535804/Smart%20Shop/airpods-pro-2nd-generation_nkcl6j.png",
  },
  {
    name: "AirPods Max",
    category: "accessories",
    availability: true,
    price: 549,
    description:
      "Elevate your audio experience with AirPods Max. Immerse in premium sound, adaptive EQ, and active noise cancellation, all wrapped in a sleek design with breathable knit mesh headband.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535802/Smart%20Shop/airpods-max_bmi2ow.png",
  },
  {
    name: "Silver Lamicall Adjustable Laptop Riser",
    category: "accessories",
    availability: true,
    price: 40,
    description: `Enhance comfort and productivity with our adjustable laptop stand, accommodating 10" to 17.3" laptops. Tailor the height and angle for a personalized, stable workspace that promotes well-being and efficiency.`,
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535819/Smart%20Shop/silver-lamicall-adjustable-laptop-riser_g6mx7z.png",
  },
  {
    name: "13-inch MacBook Air (256 GB) - Space Gray",
    category: "laptops",
    availability: true,
    price: 999,
    description:
      "Exceptional speed with the Apple M1 chip, 8GB memory, and 256GB SSD storage on the 13-inch Retina display MacBook Air. Connect seamlessly with Thunderbolt/USB 4 ports.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535818/Smart%20Shop/13-inch-macbokk-air-256gb-space-gray_tuzmda.png",
  },
  {
    name: "14-inch MacBook Pro 12-core (1TB) - Space Black",
    category: "laptops",
    availability: true,
    price: 2399,
    description:
      "Faster and more efficient than traditional RAM, unified memory is integrated within the M3 family of chips so apps can quickly share data between the CPU, GPU, and Neural Engine",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535817/Smart%20Shop/14-inch-macbook-pro-12-core-1tb-space-black_pbhhfc.png",
  },

  {
    name: "15-inch MacBook Air (2TB) - Midnight",
    category: "laptops",
    availability: true,
    price: 2099,
    description:
      "Experience peak performance with the 15-inch MacBook Air featuring the revolutionary Apple M2 chip, stunning 15.3-inch Liquid Retina display, and versatile MagSafe 3 charging. Elevate productivity with Touch ID and more.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535805/Smart%20Shop/15-inch-macbook-air-2tb-midnight_sadqrl.png",
  },
  {
    name: "Apple iPhone 15 Pro (1TB) - Blue Titanium",
    category: "phones",
    availability: true,
    price: 1499,
    description:
      "Dive into luxury with the Apple iPhone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1TB, redefining excellence in smartphone technology.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535808/Smart%20Shop/apple-iphone-15-pro-1tb-blue-titanium_cbjjpz.png",
  },
  {
    name: "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
    category: "phones",
    availability: true,
    price: 1199,
    description:
      "Discover unparalleled sophistication with the Apple iPhone 15 Pro Max in Black Titanium. Boasting 256GB storage, experience cutting-edge technology, exceptional performance, and a sleek design that redefines luxury.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535804/Smart%20Shop/apple-iphone-14-128gb-blue_qvsvt2.png",
  },
  {
    name: "Apple iPhone 14 (128 GB) - Blue",
    category: "phones",
    availability: true,
    price: 699,
    description:
      "Immerse in innovation with the Apple iPhone 14 in Blue. Featuring 128GB storage, enjoy a stunning display, powerful performance, and iconic design that redefines your smartphone experience.",
    image:
      "https://res.cloudinary.com/fullstack-mern-developer/image/upload/v1703535804/Smart%20Shop/apple-iphone-14-128gb-blue_qvsvt2.png",
  },
];

module.exports = dummyShop;
