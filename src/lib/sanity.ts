import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2025-08-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export const mockCategories = [
  { _id: '1', title: 'Prophetic Studies', slug: { current: 'prophetic-studies' }, order: 1 },
  { _id: '2', title: 'Healing & Deliverance', slug: { current: 'healing-deliverance' }, order: 2 },
  { _id: '3', title: 'Biblical Leadership & Ministry', slug: { current: 'biblical-leadership-ministry' }, order: 3 },
  { _id: '4', title: 'Theology & Doctrine', slug: { current: 'theology-doctrine' }, order: 4 },
  { _id: '5', title: 'Marketplace & Global Influence', slug: { current: 'marketplace-global-influence' }, order: 5 },
  { _id: '6', title: 'Prayer & Intercession', slug: { current: 'prayer-intercession' }, order: 6 },
  { _id: '7', title: 'Evangelism & Missions', slug: { current: 'evangelism-missions' }, order: 7 },
  { _id: '8', title: 'Spiritual Gifts & Discernment', slug: { current: 'spiritual-gifts-discernment' }, order: 8 },
  { _id: '9', title: 'Pastoral Care & Counseling', slug: { current: 'pastoral-care-counseling' }, order: 9 },
  { _id: '10', title: 'Christian Education & Discipleship', slug: { current: 'christian-education-discipleship' }, order: 10 },
]
