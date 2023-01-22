import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="w-full container px-5 h-[70vh] flex flex-col gap-4 items-center justify-center">
      <h2 className="text-lg dark:text-slate-400">404 - Not found page</h2>
      <Link to="/" className="rounded-full px-5 py-2 text-white bg-blue-500">Go to Home</Link>
    </section>
  );
}

export default NotFoundPage;