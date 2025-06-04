export default function insertAds(feedItems) {
  const result = [];
  let contentCount = 0;

  feedItems.forEach((item, index) => {
    result.push(item);

    // Só conta como conteúdo se não for agrupador
    if (item.type !== 'agrupador-materia') {
      contentCount++;

      // A cada 8 conteúdos, insere um anúncio
      if (contentCount % 8 === 0) {
        result.push({ type: 'ad', id: `ad-${contentCount}` });
      }
    }
  });

  return result;
}
