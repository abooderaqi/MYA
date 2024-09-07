"use server"

import { db } from "@/db"

export const getCollections = async () => {
  const collections = await db.collection.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: {
      products: true,
    },
  })
  return collections
}

export const getCollecionById = async (id: string) => {
  try {
    const collection = await db.collection.findUnique({
      where: { id },
      include: { products: true },
    })
    return collection
  } catch (err) {
    console.error(err)
    throw err
  }
}


