import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery } from "../../../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../sanity/lib/image";
import { roboto } from "../../../styles/fonts";


export default async function BlogPost({ params }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });

  if (!post) return <div className="text-white p-10">Post not found.</div>;

  return (
    <main className={`relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden ${roboto.className}`}>
                  {/* Top layered blue banners */}
      <div
        initial={{ y: -80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block h-4 w-full absolute z-0 top-20 bg-gradient-to-tr from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)]"
        style={{
          clipPath: "polygon(0% 0%, 85% 0, 100% 0%, 100% 90%)",
        }}
      />

      {/* Top right triangle */}
      <div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="block absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Top trapezoid */}
      <div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="block absolute top-24 right-0 w-72 h-72 bg-gradient-to-br from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(0% 0%, 100% 100%, 100% 85%, 0% -15%)",
        }}
      />
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
                  {/* Bottom layered blue banners */}
      <div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block h-4 w-full absolute z-0 bottom-0 bg-gradient-to-bl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)]"
        style={{
          clipPath: "polygon(0 0, 15% 100%, 100% 100%, 0% 0%)",
        }}
      />

      <div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="block absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }}
      />

      <div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="block absolute bottom-4 left-0 w-72 h-72 bg-gradient-to-tl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(100% 100%, 0% 0%, 0% 15%, 100% 115%)",
        }}
      />
    </main>
  );
}
