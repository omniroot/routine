export interface ILink {
  name: string;
  link: string;
  color: string;
}

export interface ITask {
  id: string;
  image: string;
  title: string;
  description: string;
  links?: ILink[];
}
