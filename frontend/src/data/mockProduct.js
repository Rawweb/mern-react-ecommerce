const mockProducts = [
  {
    _id: '1',
    name: 'Modern Sofa',
    new: true,
    price: 89.99,
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