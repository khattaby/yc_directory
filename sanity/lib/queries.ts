import { defineQuery } from "next-sanity";

// Query for all startups (no search)
export const STARTUPS_QUERY = defineQuery(`
  *[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id, 
    title, 
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    }, 
    views,
    description,
    category,
    image,
  }
`);

// Query for startups with search
export const STARTUPS_SEARCH_QUERY = defineQuery(`
  *[
    _type == "startup" &&
    defined(slug.current) &&
    (
      title match $search ||
      category match $search ||
      author->name match $search
    )
  ] | order(_createdAt desc) {
    _id, 
    title, 
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    }, 
    views,
    description,
    category,
    image,
  }
`);