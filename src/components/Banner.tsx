import Link from "next/link";

type BannerProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export default function Banner({ title, subtitle, buttonText, buttonLink }: BannerProps) {
  return (
    <section className="bg-[#F6BE00] text-[#2D3748] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg">{subtitle}</p>
        </div>
        <Link href={buttonLink}>
          <button className="mt-4 md:mt-0 bg-[#2F855A] text-white px-6 py-3 rounded-lg hover:bg-[#276749] transition">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
