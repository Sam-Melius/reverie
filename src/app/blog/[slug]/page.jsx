import { client } from "../../../../sanity/lib/client";
import { singlePostQuery } from "../../../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../sanity/lib/image";
import { lexend } from "../../../styles/fonts";


export default async function BlogPost({ params }) {
  const post = await client.fetch(singlePostQuery(params.slug));

  if (!post) return <div className="text-white p-10">Post not found.</div>;

  return (
    <main className={`min-h-screen bg-[#0a0a0a] text-white px-6 py-20 ${lexend.className}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">{post.title}</h1>
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
          <PortableText value={post.body} />
        </div>
      </div>
    </main>
  );
}
