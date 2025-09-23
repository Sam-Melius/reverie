import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery } from "../../../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../sanity/lib/image";
import { roboto } from "../../../styles/fonts";


export default async function BlogPost({ params }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });

  if (!post) return <div className="text-white p-10">Post not found.</div>;

  return (
    <main className={`min-h-screen text-white px-8 py-20 ${roboto.className}`}>
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-[color:var(--accent-light)] mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.mainImage && (
          <img
            src={urlForImage(post.mainImage)}
            alt=""
            className="rounded-xl mb-6"
          />
        )}
        <div className="prose prose-invert max-w-none">
          <PortableText value={post.content} />
        </div>
      </div>
    </main>
  );
}
