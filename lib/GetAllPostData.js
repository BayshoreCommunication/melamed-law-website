export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://backend-melamed-law-website-sigma.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  return bloData.json();
}
