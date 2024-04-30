'use client';
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col gap-4 items-start min-w-[200px] text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
              className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              onClick={() => {
                window.dataLayer?.push({
                  event: "testCustomEvent",
                  name: "variant-1"
                })
                console.log(window.dataLayer);
              }}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              VARIANT #1{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <pre>
              <code>
                {JSON.stringify({
                  "event": "click",
                  "name": "variant-1",
                })}
              </code>
            </pre>
          </a>

          <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>


      </main>
  );
}
