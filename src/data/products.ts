export type ProductBadge = 'New' | 'Bestseller' | 'Limited Edition';
export type ProductCategory = 'Floral' | 'Woody' | 'Oriental' | 'Fresh';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  badge: ProductBadge;
  category: ProductCategory;
  image: string;
}

const px = (id: number, slug: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const products: Product[] = [
  {
    id: 1,
    name: 'Noir Absolu',
    description: 'A deep, mysterious blend of black amber, oud and smoked vanilla.',
    price: 240,
    rating: 4.9,
    badge: 'Bestseller',
    category: 'Oriental',
    image: px(29805437, 'pexels-photo-29805437'),
  },
  {
    id: 2,
    name: 'Lumière d\'Or',
    description: 'Radiant bergamot and golden saffron wrapped in warm cedarwood.',
    price: 195,
    rating: 4.8,
    badge: 'New',
    category: 'Woody',
    image: px(12456258, 'pexels-photo-12456258'),
  },
  {
    id: 3,
    name: 'Velours Noir',
    description: 'Black leather, tonka bean and dark rose for an intoxicating signature.',
    price: 285,
    rating: 5.0,
    badge: 'Limited Edition',
    category: 'Oriental',
    image: px(8796322, 'pexels-photo-8796322'),
  },
  {
    id: 4,
    name: 'Fleur Éternelle',
    description: 'Delicate jasmine, peony and white musk for timeless femininity.',
    price: 175,
    rating: 4.7,
    badge: 'Bestseller',
    category: 'Floral',
    image: px(31707005, 'pexels-photo-31707005'),
  },
  {
    id: 5,
    name: 'Cèdre Royal',
    description: 'Majestic cedar, vetiver and sandalwood crafted for the bold.',
    price: 220,
    rating: 4.8,
    badge: 'New',
    category: 'Woody',
    image: px(29903861, 'pexels-photo-29903861'),
  },
  {
    id: 6,
    name: 'Brise Marine',
    description: 'Crisp sea salt, bergamot and lavender for effortless freshness.',
    price: 160,
    rating: 4.6,
    badge: 'Bestseller',
    category: 'Fresh',
    image: px(36779956, 'pexels-photo-36779956'),
  },
  {
    id: 7,
    name: 'Ambre Impérial',
    description: 'Rich amber, benzoin and spice layered over a sensual musk base.',
    price: 265,
    rating: 4.9,
    badge: 'Limited Edition',
    category: 'Oriental',
    image: px(31771395, 'pexels-photo-31771395'),
  },
  {
    id: 8,
    name: 'Jardin Secret',
    description: 'A secret garden of rose, lily of the valley and soft powdery iris.',
    price: 190,
    rating: 4.7,
    badge: 'New',
    category: 'Floral',
    image: px(18031847, 'pexels-photo-18031847'),
  },
];

export const categories: ProductCategory[] = ['Floral', 'Woody', 'Oriental', 'Fresh'];
