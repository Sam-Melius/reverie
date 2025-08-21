

import { client } from "../../../sanity/lib/client";
import { allPostsQuery } from "../../../sanity/lib/queries";
import Link from "next/link";
import { lexend } from "../../styles/fonts";

export const metadata = {
  title: "Reverie Blog",
  description: "Insights from the minds at Reverie Tech Solutions",
};

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <section
      className={`min-h-screen py-24 px-6 bg-[#0a0a0a] text-white relative overflow-hidden ${lexend.className}`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-gradient-to-br from-[#0052DC]/20 to-[#00F0FF]/10 rounded-full blur-[160px] z-0" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00F0FF]" style={{ textShadow: "0 0 20px #00F0FF44" }}>
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
            className="group bg-[#111] border border-[#0052DC] rounded-xl p-6 hover:shadow-[0_0_20px_#00F0FF55] hover:border-[#00F0FF] transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-[#00F0FF] group-hover:underline">
              {post.title}
            </h3>
            <p className="text-white/70 text-sm mb-2">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-white/80 text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
