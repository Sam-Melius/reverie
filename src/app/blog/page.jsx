

import { client } from "../../../sanity/lib/client";
import { allPostsQuery } from "../../../sanity/lib/queries";
import Link from "next/link";
import { roboto } from "../../styles/fonts";



export const metadata = {
  title: "Reverie Blog",
  description: "Insights from the minds at Reverie Tech Solutions",
};

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <section className="relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden">
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
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-gradient-to-br from-[color:var(--accent-light)] to-[#00F0FF]/10 rounded-full blur-[160px] z-0" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--accent)]" style={{ textShadow: "0 0 20px var(--accent-alt)" }}>
          Reverie Tech Blog
        </h1>
        <p className="mt-4 text-gray-400">
          Articles and updates from our team. Stay informed, stay secure.
        </p>
      </div>

      {/* Posts */}
      <div className="relative z-10 grid gap-10 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group bg-[#111] border border-[color:var(--accent-alt)] rounded-xl p-6 hover:shadow-[0_0_20px_var(--accent-alt)] hover:border-[color:var(--accent)] transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-[color:var(--accent-light)] group-hover:underline">
              {post.title}
            </h3>
            <p className="text-white/70 text-sm mb-2">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-white/80 text-sm">{post.excerpt}</p>
          </Link>
        ))}
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
    </section>
  );
}
