import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-[400px] h-[500px] flex flex-col items-center justify-center p-8 bg-blue-800 rounded-xl">
      <img className="p-4 h-24 rounded-full mx-auto" src="/mubeen-pic.jpeg" alt="" width="150" height="250" />
      <div className="text-center space-y-4">
        <blockquote className="text-lg font-medium p-6 bg-blue-100 rounded-lg border border-blue-500">
          <p className="text-blue-900">
            "My name is Mubeen Ahmad, and I am currently pursuing a specialization in artificial intelligence under the guidance of my mentor, Asif Langra. I am proud to be associated with Mantech Company."
          </p>
        </blockquote>
      </div>
      <figcaption className="font-medium mt-4 text-center">
        <div className="text-sky-500 dark:text-sky-400">Mubeen Ahmad</div>
        <div className="text-slate-700 dark:text-slate-500">Assosiated with Mantech</div>
      </figcaption>
    </div>
  </main>
  );
}
