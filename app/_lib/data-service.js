import { supabase } from "./supabase";
import { supabaseAdmin } from "./supabaseAdmin";

// PRODUCTS
export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("id,name,image,description");

    if (error) throw error;

    return data || [];
  } catch (err) {
    console.log("Supabase getProducts error:", err);
    return [];
  }
}

// DOG MODELS
export async function getDogModelImages() {
  try {
    const { data: files, error } = await supabaseAdmin.storage
      .from("pictures")
      .list("dog-models", {
        limit: 100,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) throw error;

    if (!files) return [];

    return files
      .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp)$/i))
      .map((file) => {
        const { data } = supabase.storage
          .from("pictures")
          .getPublicUrl(`dog-models/${file.name}`);

        return data.publicUrl;
      });
  } catch (err) {
    console.log("Supabase getDogModelImages error:", err);
    return [];
  }
}
