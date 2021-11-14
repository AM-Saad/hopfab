export interface BaseBlogPost {
  id: string;
  uri: string;
  title: string;
  excerpt?: string;
  content?: string;
  categories: any;
  date: string;
  modified: string;
}
