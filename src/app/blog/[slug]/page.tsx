import { blogPosts } from "@/app/data/BlogPosts";
import BlogContent from "@/components/blog/BlogContent";
import BlogMeta from "@/components/blog/BlogMeta";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;

	const post = blogPosts.find((p) => p.slug === slug);
	if (!post) return notFound();

	return (
		<main className="p-6 md:p-12 max-w-3xl mx-auto text-black min-h-screen">
			<Image
				src={post.image}
				alt={post.title}
				width={800}
				height={500}
				className="rounded-xl mt-18  mb-8 w-full h-auto object-cover shadow-lg"
			/>

			<h1 className="text-4xl font-extrabold text-black mb-4">{post.title}</h1>

			<BlogMeta post={post} />

			<div className="mt-8 prose prose-lg prose-green max-w-none">
				<BlogContent post={post} />
			</div>
		</main>
	);
}
