const insertAds = (items) => {
    const result = [];
    items.forEach((item, index) => {
      result.push(item);
      if ((index + 1) % 8 === 0) {
        result.push({ type: 'ad' });
      }
    });
    return result;
  };
  
  export default insertAds;