import Image from "next/image";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import SectionLayout from "@/components/shared/SectionLayout";
import CardMotion from "@/components/motion/CardMotion";
import Head from "next/head";
import Link from "next/link";
import PageHeroSection from "@/components/shared/PageHeroSection";

const css = `
h1, h2, p, ul {
  padding: 10px 0;
  line-height: 1.6;
}

h1 {
  font-size: 40px;
  font-style: italic;
}

h2 {
  font-size: 25px;
  font-style: italic;
}

p {
  font-size: 17px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
`;

const extractTextFromHtml = (htmlString) =>
  htmlString.replace(/<\/?[^>]+(>|$)/g, "");

const truncateText = (text, wordLimit) =>
  text.split(/\s+/).length > wordLimit
    ? text.split(/\s+/).slice(0, wordLimit).join(" ") + "..."
    : text;

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();
  const blogDetails = blogPostData?.data?.find(
    (blog) => blog.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.melamedlawpllc.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "melamedlawpllc.com",
    },
  };
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();
  const blogDetails = blogPostData?.data?.filter(
    (blog) => blog.slug === params.slug
  );

  return (
    <>
      <Head>
        <title>{blogDetails[0]?.title}</title>
        <meta name="description" content={blogDetails[0]?.title} />
      </Head>
      <style>{css}</style>
      <PageHeroSection
        image="/assets/shared/blogs.jpg"
        title={blogDetails[0]?.title}
        description="When the unexpected happens, we help individuals and businesses collect the money they deserve for their insurance claims."
      />
      <SectionLayout bg="bg-white">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1 },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid gap-12 mb-10 grid-cols-1 sm:grid-cols-3">
            {/* Main Blog Content */}
            <div className="col-span-2">
              {blogDetails.map((blog, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <p className="text-[0.9rem] italic">
                      {blog?.category || "Blog Post"}
                    </p>
                    <p className="text-[0.9rem] italic">
                      {formatDate(blog?.createdAt)}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#1B2639]">
                    {blog?.title}
                  </h2>
                  <Image
                    width={1000}
                    height={300}
                    src={blog?.featuredImage?.image?.url}
                    alt={blog?.featuredImage?.altText}
                    className="w-full h-auto"
                  />
                  <div className="mt-2 text-md">{parse(blog?.body)}</div>
                </div>
              ))}
            </div>

            {/* Recent Blogs */}
            <div className="col-span-2 sm:col-span-1 p-3 h-[100%] overflow-y-scroll rounded-lg">
              <h2 className="font-medium text-4xl border-b-2 border-gray-500 pb-4 mb-6">
                Recent Cases
              </h2>
              {blogPostData?.data
                ?.filter((pub) => pub.published)
                ?.map((blog, index) => (
                  <Link
                    key={index}
                    href={`/blog/${blog?.slug}`}
                    className="flex items-start gap-2 py-3 bg-white my-3"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={blog?.featuredImage?.image?.url}
                      alt={blog?.featuredImage?.altText}
                      className="w-[100px] h-auto"
                    />
                    <div>
                      <div className="text-md font-bold line-clamp-2">
                        {blog?.title}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </CardMotion>
      </SectionLayout>
    </>
  );
};

export default page;
