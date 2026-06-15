/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project, NavItem, GridItem } from '@/types';

export const validateProject = (project: any): project is Project => {
  return (
    typeof project === 'object' &&
    typeof project.id === 'number' &&
    typeof project.title === 'string' &&
    typeof project.des === 'string' &&
    typeof project.img === 'string' &&
    Array.isArray(project.iconLists) &&
    typeof project.link === 'string'
  );
};

export const validateNavItem = (item: any): item is NavItem => {
  return (
    typeof item === 'object' &&
    typeof item.name === 'string' &&
    typeof item.link === 'string'
  );
};

export const validateGridItem = (item: any): item is GridItem => {
  return (
    typeof item === 'object' &&
    typeof item.id === 'number' &&
    typeof item.title === 'string' &&
    typeof item.className === 'string'
  );
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const sanitizeHtml = (html: string): string => {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};