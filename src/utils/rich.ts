export type RichPart =
  | { type: 'text'; text: string }
  | { type: 'strong'; text: string }
  | { type: 'link'; text: string; href: string };

/** Розбирає позначки з текстів: **жирний** і [текст](адреса). */
export function parseRich(source: string): RichPart[] {
  const parts: RichPart[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    if (match.index > last) parts.push({ type: 'text', text: source.slice(last, match.index) });
    if (match[1] !== undefined) parts.push({ type: 'strong', text: match[1] });
    else parts.push({ type: 'link', text: match[2]!, href: match[3]! });
    last = match.index + match[0].length;
  }
  if (last < source.length) parts.push({ type: 'text', text: source.slice(last) });
  return parts;
}

/** Зовнішнє посилання (відкривається в новій вкладці). */
export const isExternal = (href: string) => /^https?:\/\//i.test(href);
