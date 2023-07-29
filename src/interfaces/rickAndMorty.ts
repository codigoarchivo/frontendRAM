export interface IRickAndMortyResults {
  created: string;
  gender: string;
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
}

export interface IRickAndMortyInfo {
  pages: number;
  next: number;
  prev: number | null;
}
