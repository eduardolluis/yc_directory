"use server";

import { writeClient } from "@/sanity/lib/write-client";

export async function incrementViews(id: string, totalViews: number) {
  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit();
}
