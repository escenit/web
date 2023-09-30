export type Project = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  client: Client;
  tags: string[];
  delay: string;
};

export type Client = {
  name: string;
  image: string;
};
