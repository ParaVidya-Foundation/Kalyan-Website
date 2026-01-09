import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Vedic Astrology Blog | Jyotish Insights & Articles",
  description:
    "Explore our collection of Vedic astrology articles covering planetary transits, spiritual insights, astrological remedies, and ancient wisdom.",
  keywords: [
    "vedic astrology blog",
    "jyotish articles",
    "planetary transits",
    "astrology insights",
    "vedic wisdom",
    "astrological remedies",
    "spiritual guidance",
  ],
  openGraph: {
    title: "Vedic Astrology Blog | Insights & Articles",
    description: "In-depth articles on Vedic astrology, planetary wisdom, and spiritual guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Astrology Blog | Insights & Articles",
    description: "In-depth articles on Vedic astrology, planetary wisdom, and spiritual guidance.",
  },
}

const blogPosts = [
  {
    title: "Understanding Your Moon Sign: The Key to Emotional Wellness",
    excerpt:
      "In Vedic astrology, your Moon sign (Rashi) is more important than your Sun sign. Discover why the Moon represents your mind, emotions, and inner world.",
    date: "2024-12-15",
    category: "Foundations",
    image: "/moon-phases-night-sky-cosmos-spiritual.jpg",
  },
  {
    title: "Saturn Return: Your Karmic Teacher at Ages 29 and 58",
    excerpt:
      "Learn about the transformative Saturn Return periods and how to navigate these crucial life transitions with grace and wisdom.",
    date: "2024-12-10",
    category: "Transits",
    image: "/saturn-planet-rings-cosmic-space.jpg",
  },
  {
    title: "The Power of Gemstones in Vedic Astrology",
    excerpt:
      "Discover how wearing the right gemstone can strengthen beneficial planets and bring harmony to your life through ancient Vedic wisdom.",
    date: "2024-12-05",
    category: "Remedies",
    image: "/gemstones-crystals-ruby-emerald-colorful.jpg",
  },
  {
    title: "Rahu and Ketu: Understanding the Shadow Planets",
    excerpt:
      "Explore the mysterious lunar nodes and their profound influence on your karmic journey, obsessions, and spiritual liberation.",
    date: "2024-11-28",
    category: "Planets",
    image: "/eclipse-moon-sun-shadow-mystical.jpg",
  },
  {
    title: "Jupiter Transit 2024: Opportunities for Growth and Expansion",
    excerpt:
      "Jupiter is moving into a new sign. Learn how this benevolent planet's transit will affect different areas of your life based on your chart.",
    date: "2024-11-20",
    category: "Transits",
    image: "/jupiter-planet-great-red-spot-massive.jpg",
  },
  {
    title: "The 7th House: Finding Your Ideal Partner Through Astrology",
    excerpt:
      "Understand what your 7th house reveals about marriage, partnerships, and the qualities you seek in a life companion.",
    date: "2024-11-15",
    category: "Relationships",
    image: "/couple-silhouette-sunset-romance-peaceful.jpg",
  },
]

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl text-balance">
            <span className="text-accent">Jyotish</span> Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Insights, wisdom, and guidance from the ancient science of Vedic astrology
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-xl border border-border/50 bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <h2 className="mt-2 font-serif text-xl leading-snug text-foreground">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="border-t border-border/50 px-6 py-4">
                  <Link href="#" className="text-sm font-medium text-accent hover:underline">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
