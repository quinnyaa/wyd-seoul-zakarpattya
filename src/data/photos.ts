/*
  ФОТО САЙТУ.
  Щоб додати фото, покладіть файл у src/assets/photos/ з назвою зі стовпчика file
  (наприклад, hero.jpg). Розширення будь-яке: .jpg, .jpeg, .png, .webp.
  Поки файлу немає, на сайті показується заглушка з підписом.
  Опис фото для екранних читачів — у текстах кожної мови: photos.alt у src/content/texts/uk.ts.
*/
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export const photos = {
  hero: {
    file: 'hero',
    hint: 'Групове фото всієї молоді. Горизонтальне, найкраща якість.',
  },
  community: {
    file: 'community',
    hint: 'Спільне фото нашої молоді. Горизонтальне, 4:3.',
  },
  gallery1: {
    file: 'gallery-1',
    hint: 'Фото для галереї: підготовка до ярмарку, власноруч зроблені смаколики.',
  },
  gallery2: {
    file: 'gallery-2',
    hint: 'Фото для галереї: спільна мандрівка чи похід.',
  },
  gallery3: {
    file: 'gallery-3',
    hint: 'Фото для галереї: ярмарок або власноруч зроблені речі.',
  },
  gallery4: {
    file: 'gallery-4',
    hint: 'Фото для галереї: концерт або репетиція.',
  },
} as const;

export type PhotoId = keyof typeof photos;

export function getPhoto(id: PhotoId) {
  const slot = photos[id];
  const entry = Object.entries(files).find(([path]) => {
    const name = path.split('/').pop() ?? '';
    return name.slice(0, name.lastIndexOf('.')) === slot.file;
  });
  return { ...slot, image: entry?.[1].default };
}
