import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getPrevNext, getRelated } from "../data/posts";
import { FiShare2, FiTag, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">Post not found.</p>
      </div>
    );
  }

  const { prev, next } = getPrevNext(slug);
  const related = getRelated(post);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    } catch {}
  };

  return (
    <div className="dark:bg-gray-900 text-black dark:text-white">
      <article className="container mx-auto px-6 py-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link to="/" className="hover:text-blue-500">Home</Link> /{" "}
          <Link to="/blog" className="hover:text-blue-500">Blog</Link> /{" "}
          <span className="text-black dark:text-white">{post.title}</span>
        </nav>

        {/* Hero */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">{post.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full"
            />
            <span>{post.author.name}</span>
            <span>• {new Date(post.date).toLocaleDateString()}</span>
            <span>• {post.readTime} min read</span>
            <button
              onClick={copyLink}
              className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiShare2 /> Share
            </button>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="mt-6 w-full max-h-[520px] object-cover rounded-lg"
          />
        </header>

        {/* Content */}
        <section className="prose dark:prose-invert max-w-none prose-img:rounded-md">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {post.gallery?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {post.gallery.map((src, i) => (
                <img key={i} src={src} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover rounded" />
              ))}
            </div>
          )}
        </section>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <FiTag className="text-gray-500" />
          {post.tags.map((t) => (
            <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Author box */}
        <div className="mt-10 p-5 rounded-lg border dark:border-gray-700 flex items-center gap-4">
          <img src={post.author.avatar} className="w-14 h-14 rounded-full" />
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designer & writer. Loves clean lines and messy dogs.
            </p>
          </div>
        </div>

        {/* Comments (demo) */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <div className="space-y-4">
            <div className="p-4 rounded border dark:border-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                “Loved the lighting tip—made a huge difference in my living room.”
              </p>
              <p className="text-xs text-gray-500 mt-1">— Alex, 2 days ago</p>
            </div>
          </div>

          {/* Add comment (non-functional demo) */}
          <form className="mt-6 space-y-3">
            <textarea
              rows="4"
              placeholder="Add a comment…"
              className="w-full input-style"
            />
            <button
              type="button"
              className="px-4 py-2 bg-black text-white rounded hover:bg-blue-600 dark:border"
              disabled
              title="Hook this up to your backend when ready"
            >
              Post Comment
            </button>
          </form>
        </section>

        {/* Prev / Next */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <NavCard dir="prev" post={prev} />
          <NavCard dir="next" post={next} />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Related posts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                  <img
                    src={r.image}
                    className="w-full h-48 object-cover rounded group-hover:opacity-90"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(r.date).toLocaleDateString()} • {r.readTime} min read
                  </p>
                  <h4 className="font-semibold group-hover:text-blue-500">{r.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

const NavCard = ({ dir, post }) => {
  if (!post) return <div className="hidden md:block" />;
  const Icon = dir === "prev" ? FiChevronLeft : FiChevronRight;
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="flex items-center gap-3 p-4 rounded border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      {dir === "prev" && <Icon className="shrink-0" />}
      <div className="min-w-0">
        <p className="text-xs uppercase text-gray-500">{dir === "prev" ? "Previous" : "Next"}</p>
        <p className="truncate font-medium">{post.title}</p>
      </div>
      {dir === "next" && <Icon className="shrink-0" />}
    </Link>
  );
};

export default BlogDetail;
