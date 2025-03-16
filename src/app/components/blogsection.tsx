'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User, CheckCircle } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    image: "/img7.jpg",
    date: "11-Oct-2023",
    title: "Modern Web Development Trends",
    excerpt: "Explore the latest advancements in web development technologies and methodologies shaping 2023.",
    category: "Development"
  },
  {
    image: "/img8.jpg",
    date: "09-Oct-2023",
    title: "UI/UX Best Practices",
    excerpt: "Discover essential principles for creating intuitive and engaging user experiences in modern applications.",
    category: "Design"
  },
  {
    image: "/img9.jpg",
    date: "05-Oct-2023",
    title: "Performance Optimization",
    excerpt: "Learn advanced techniques for maximizing website speed and efficiency in resource-constrained environments.",
    category: "Optimization"
  }
];

interface Blog {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.2 }}
    className="group relative"
  >
    <Card className="h-full bg-zinc-800 border-zinc-700 overflow-hidden hover:border-yellow-400 transition-colors">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="outline" className="border-yellow-400 text-yellow-400">
            {blog.category}
          </Badge>
          <div className="flex items-center text-sm text-gray-400">
            <CalendarDays className="mr-2 h-4 w-4" />
            {blog.date}
          </div>
        </div>
        <CardTitle className="text-white hover:text-yellow-400 transition-colors">
          {blog.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-300">{blog.excerpt}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <User className="h-4 w-4" />
          <span>Admin</span>
          <CheckCircle className="h-4 w-4 ml-4 text-green-400" />
        </div>
        <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
          Read More
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

function BlogSection() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 py-20 px-4 lg:px-20 relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white text-opacity-5 whitespace-nowrap pointer-events-none"
      >
        INSIGHTS
      </motion.div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of technology, design, and digital innovation
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;