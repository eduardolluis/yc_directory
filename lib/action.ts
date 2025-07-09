"use server";
import slugify from "slugify";
import { auth } from "./auth";
import { parseServerActionResponse } from "./utils";
import { writeClient } from "@/sanity/lib/write-client";
import { revalidatePath } from "next/cache";

export const createPitch = async (state: any, form: FormData) => {
  const session = await auth();
  if (!session)
    return parseServerActionResponse({
      error: "Not Signed In",
      status: "ERROR",
    });

  // Extraer todos los campos del FormData incluyendo el pitch
  const formEntries = Object.fromEntries(form);
  const { title, description, category, link, pitch } = formEntries;

  // Validar que todos los campos requeridos estén presentes
  if (!title || !description || !category || !link || !pitch) {
    return parseServerActionResponse({
      error: "Missing required fields",
      status: "ERROR",
    });
  }

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch: pitch as string,
    };

    console.log("Creating startup:", startup);

    const result = await writeClient.create({ _type: "startup", ...startup });

    console.log("Startup created successfully:", result);

    revalidatePath("/");

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error creating startup:", error);
    return parseServerActionResponse({
      error: error instanceof Error ? error.message : "Unknown error occurred",
      status: "ERROR",
    });
  }
};
