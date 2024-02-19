import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function uploadFile(book) {
  const { data, error } = await supabase.storage
    .from("book_links")
    .upload(`${book.bookName}.epub`, book.file[0]);

  return { data, error };
}

export async function addBook(book) {
  let query = supabase.from("books");
  const url = `${supabaseUrl}/storage/v1/object/public/book_links/${book.bookName}.epub`;

  query = query.insert([
    { book_name: book.bookName, book_author: book.bookAuthor, book_url: url },
  ]);

  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
  }

  return { data, error };
}
