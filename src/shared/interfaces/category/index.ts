import { ParsedUrlQuery } from 'querystring';

export enum ESelectedType {
  brand = 'brand',
  model = 'model',
  generation = 'generation',
  modification = 'modification',
  category = 'category',
}

export interface ICategoryDetails {
  brand: string;
  id: number;
  name: string;
  oem: string;
  slug: string;
}

export interface ICategoryPagination {
  currentPage: number;
  pageCount: number;
  limit: number;
  nextURL: string;
}

export interface IBreadcrumbs {
  name: string;
  slug: string;
}

export interface ICategorySelected {
  type: ESelectedType;
  name: string;
  closeSlug: string;
}

export interface ICategorySelect {
  id: number;
  name: string;
  slug: string;
}

export interface IParams extends ParsedUrlQuery {
  slug: string[];
}

export interface ICategoryProps {
  breadcrumbs: IBreadcrumbs[];
  details: ICategoryDetails[];
  pagination: ICategoryPagination;
  title: string;
  offerCount: string;
  selector: ICategorySelect[];
  selected: ICategorySelected[];
  selectorTitle: string;
}
