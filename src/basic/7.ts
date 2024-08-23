type Details = {
  createdAt: Date;
  updatedAt: Date;
};

type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details: Details;
};
