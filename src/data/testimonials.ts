export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=200`;

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Isabella Laurent',
    role: 'Creative Director, Paris',
    avatar: px(1239291),
    quote: 'Noir Essence is the only fragrance I have worn for three years. It is not perfume — it is presence.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sebastian Cole',
    role: 'Architect, London',
    avatar: px(220453),
    quote: 'The craftsmanship is unmatched. Each bottle feels like a piece of art I am honored to wear.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Fashion Editor, Milan',
    avatar: px(415829),
    quote: 'Velours Noir turns heads everywhere I go. Strangers stop me to ask what I am wearing.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Daniel Kim',
    role: 'Photographer, New York',
    avatar: px(1220794),
    quote: 'I have never experienced a scent that lingers so beautifully. Truly timeless elegance.',
    rating: 5,
  },
];
