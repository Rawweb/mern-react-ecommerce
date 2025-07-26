const mockProducts = [
  {
    _id: '1',
    name: 'Modern Sofa',
    new: true,
    price: 89.99,
    originalPrice: 108.5,
    description:
      'Modern Sofa - Perfect for adding style and comfort to your living area.',
    category: 'Living Room',
    sizes: ['S', 'M', 'L'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=1',
        altText: 'Modern Sofa',
      },
    ],
    rating: 4.2,
  },
  {
    _id: '2',
    name: 'LED Mirror',
    new: false,
    price: 120.5,
    originalPrice: 141.65,
    description:
      'LED Mirror - Functional and elegant addition to your bathroom space.',
    category: 'Bathroom',
    sizes: ['M', 'L'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=2',
        altText: 'LED Mirror',
      },
    ],
    rating: 4.0,
  },
  {
    _id: '3',
    name: 'Wooden Desk',
    new: true,
    price: 310.0,
    originalPrice: 372.0,
    description:
      'Wooden Desk - Designed for a productive and modern workspace.',
    category: 'Office',
    sizes: ['L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=3',
        altText: 'Wooden Desk',
      },
    ],
    rating: 4.7,
  },
  {
    _id: '4',
    name: 'Dining Table',
    new: false,
    price: 450.99,
    originalPrice: 528.45,
    description:
      'Dining Table - Great for dining and entertaining guests in style.',
    category: 'Dining',
    sizes: ['M', 'L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=4',
        altText: 'Dining Table',
      },
    ],
    rating: 4.1,
  },
  {
    _id: '5',
    name: 'Floor Lamp',
    new: false,
    price: 75.49,
    originalPrice: 90.59,
    description:
      'Floor Lamp - Enhances your bedroom with cozy and functional design.',
    category: 'Bedroom',
    sizes: ['XS', 'S'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=5',
        altText: 'Floor Lamp',
      },
    ],
    rating: 3.9,
  },
  {
    _id: '6',
    name: 'Outdoor Bench',
    new: true,
    price: 149.99,
    originalPrice: 179.99,
    description: 'Outdoor Bench - Ideal for outdoor lounging and decor.',
    category: 'Outdoor',
    sizes: ['M', 'L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=6',
        altText: 'Outdoor Bench',
      },
    ],
    rating: 4.5,
  },
  {
    _id: '7',
    name: 'Bookshelf',
    new: false,
    price: 210.0,
    originalPrice: 247.2,
    description: 'Bookshelf - Designed for a productive and modern workspace.',
    category: 'Office',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=7',
        altText: 'Bookshelf',
      },
    ],
    rating: 4.3,
  },
  {
    _id: '8',
    name: 'Wardrobe',
    new: false,
    price: 560.0,
    originalPrice: 665.6,
    description:
      'Wardrobe - Enhances your bedroom with cozy and functional design.',
    category: 'Bedroom',
    sizes: ['XL', 'XXL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=8',
        altText: 'Wardrobe',
      },
    ],
    rating: 4.8,
  },
  {
    _id: '9',
    name: 'Kitchen Island',
    new: true,
    price: 299.99,
    originalPrice: 359.99,
    description:
      'Kitchen Island - Essential for efficient and stylish kitchen space.',
    category: 'Kitchen',
    sizes: ['L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=9',
        altText: 'Kitchen Island',
      },
    ],
    rating: 4.0,
  },
  {
    _id: '10',
    name: 'Coffee Table',
    new: false,
    price: 85.0,
    originalPrice: 102.0,
    description:
      'Coffee Table - Perfect for adding style and comfort to your living area.',
    category: 'Living Room',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=10',
        altText: 'Coffee Table',
      },
    ],
    rating: 3.8,
  },
  {
    _id: '11',
    name: 'Nightstand',
    new: true,
    price: 52.5,
    originalPrice: 63.0,
    description:
      'Nightstand - Enhances your bedroom with cozy and functional design.',
    category: 'Bedroom',
    sizes: ['XS', 'S'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=11',
        altText: 'Nightstand',
      },
    ],
    rating: 4.4,
  },
  {
    _id: '12',
    name: 'Kitchen Stool',
    new: false,
    price: 58.0,
    originalPrice: 69.6,
    description:
      'Kitchen Stool - Essential for efficient and stylish kitchen space.',
    category: 'Kitchen',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=12',
        altText: 'Kitchen Stool',
      },
    ],
    rating: 3.6,
  },
  {
    _id: '13',
    name: 'Patio Table',
    new: true,
    price: 130.0,
    originalPrice: 156.0,
    description: 'Patio Table - Ideal for outdoor lounging and decor.',
    category: 'Outdoor',
    sizes: ['M', 'L'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=13',
        altText: 'Patio Table',
      },
    ],
    rating: 4.1,
  },
  {
    _id: '14',
    name: 'Office Chair',
    new: false,
    price: 180.5,
    originalPrice: 216.6,
    description:
      'Office Chair - Designed for a productive and modern workspace.',
    category: 'Office',
    sizes: ['M', 'L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=14',
        altText: 'Office Chair',
      },
    ],
    rating: 4.6,
  },
  {
    _id: '15',
    name: 'Wall Shelf',
    new: true,
    price: 65.0,
    originalPrice: 78.0,
    description:
      'Wall Shelf - Perfect for adding style and comfort to your living area.',
    category: 'Living Room',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=15',
        altText: 'Wall Shelf',
      },
    ],
    rating: 3.7,
  },
  {
    _id: '16',
    name: 'Bathtub Tray',
    new: false,
    price: 90.0,
    originalPrice: 108.0,
    description:
      'Bathtub Tray - Functional and elegant addition to your bathroom space.',
    category: 'Bathroom',
    sizes: ['S', 'M', 'L'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=16',
        altText: 'Bathtub Tray',
      },
    ],
    rating: 4.3,
  },
  {
    _id: '17',
    name: 'Table Runner',
    new: true,
    price: 62.5,
    originalPrice: 75.0,
    description:
      'Table Runner - Great for dining and entertaining guests in style.',
    category: 'Dining',
    sizes: ['XS', 'S'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=17',
        altText: 'Table Runner',
      },
    ],
    rating: 3.9,
  },
  {
    _id: '18',
    name: 'Desk Lamp',
    new: false,
    price: 70.0,
    originalPrice: 84.0,
    description: 'Desk Lamp - Designed for a productive and modern workspace.',
    category: 'Office',
    sizes: ['XS', 'S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=18',
        altText: 'Desk Lamp',
      },
    ],
    rating: 4.0,
  },
  {
    _id: '19',
    name: 'Corner Shelf',
    new: true,
    price: 110.0,
    originalPrice: 132.0,
    description:
      'Corner Shelf - Perfect for adding style and comfort to your living area.',
    category: 'Living Room',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=19',
        altText: 'Corner Shelf',
      },
    ],
    rating: 4.4,
  },
  {
    _id: '20',
    name: 'Bamboo Mat',
    new: false,
    price: 72.0,
    originalPrice: 86.4,
    description:
      'Bamboo Mat - Functional and elegant addition to your bathroom space.',
    category: 'Bathroom',
    sizes: ['XS', 'S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=20',
        altText: 'Bamboo Mat',
      },
    ],
    rating: 3.5,
  },
  {
    _id: '21',
    name: 'Dining Set',
    new: true,
    price: 420.0,
    originalPrice: 504.0,
    description:
      'Dining Set - Great for dining and entertaining guests in style.',
    category: 'Dining',
    sizes: ['M', 'L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=21',
        altText: 'Dining Set',
      },
    ],
    rating: 4.9,
  },
  {
    _id: '22',
    name: 'Garden Chair',
    new: false,
    price: 135.0,
    originalPrice: 162.0,
    description: 'Garden Chair - Ideal for outdoor lounging and decor.',
    category: 'Outdoor',
    sizes: ['M', 'L'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=22',
        altText: 'Garden Chair',
      },
    ],
    rating: 4.2,
  },
  {
    _id: '23',
    name: 'Desk Cabinet',
    new: true,
    price: 235.0,
    originalPrice: 282.0,
    description:
      'Desk Cabinet - Designed for a productive and modern workspace.',
    category: 'Office',
    sizes: ['M', 'L', 'XL'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=23',
        altText: 'Desk Cabinet',
      },
    ],
    rating: 4.6,
  },
  {
    _id: '24',
    name: 'Shoe Rack',
    new: false,
    price: 90.0,
    originalPrice: 108.0,
    description:
      'Shoe Rack - Functional and elegant addition to your bathroom space.',
    category: 'Bathroom',
    sizes: ['S', 'M'],
    image: [
      {
        url: 'https://picsum.photos/200/300?random=24',
        altText: 'Shoe Rack',
      },
    ],
    rating: 3.7,
  },
];

export default mockProducts;
