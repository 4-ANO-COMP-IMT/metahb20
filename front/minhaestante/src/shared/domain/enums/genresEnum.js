export const GENRES = {
  ROMANCE: "Romance",
  TERROR: "Terror",
  DRAMA: "Drama",
  POEMA: "Poema",
  HQ: "HQ",
  CRONICA: "Crônica",
  CONTO: "Conto",
  FICCAO: "Ficção"
};

export const invertedGenres = Object.entries(GENRES).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});
