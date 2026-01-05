import { ArrowLeft, CheckCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

interface CodeBlockProps {
  language: string;
  code: string;
  tabs?: Array<{ label: string; language: string; code: string }>;
}

function CodeBlock({ language, code, tabs }: CodeBlockProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  if (tabs && tabs.length > 0) {
    return (
      <div className="my-6 rounded-lg overflow-hidden border border-border bg-muted">
        <div className="flex border-b border-border bg-muted/50">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === idx
                  ? "bg-background text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm">{tabs[activeTab].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border bg-muted p-4">
      <pre className="overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}

import React from "react";

export default function AnalyticsGuide() {
  const [, navigate] = useLocation();

  const frameworks = [
    "nextjs",
    "nextjs-app",
    "sveltekit",
    "remix",
    "create-react-app",
    "nuxt",
    "vue",
    "other",
    "astro",
  ];

  const [selectedFramework, setSelectedFramework] = React.useState("nextjs");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-xl font-bold">Vercel Web Analytics</h1>
          <div className="w-16" />
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <section className="mb-12">
              <h1 className="text-5xl font-bold mb-6">
                Getting started with Vercel Web Analytics
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                This guide will help you get started with using Vercel Web
                Analytics on your project, showing you how to enable it, add the
                package to your project, deploy your app to Vercel, and view
                your data in the dashboard.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>
                  Select your framework to view instructions on using the Vercel
                  Web Analytics in your project
                </strong>
                .
              </p>
            </section>

            {/* Prerequisites */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">
                      A Vercel account. If you don't have one, you can{" "}
                      <a
                        href="https://vercel.com/signup"
                        className="text-primary hover:underline"
                      >
                        sign up for free
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">
                      A Vercel project. If you don't have one, you can{" "}
                      <a
                        href="https://vercel.com/new"
                        className="text-primary hover:underline"
                      >
                        create a new project
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-3">
                      The Vercel CLI installed. If you don't have it, you can
                      install it using the following command:
                    </p>
                    <CodeBlock
                      language="bash"
                      code=""
                      tabs={[
                        {
                          label: "pnpm",
                          language: "bash",
                          code: "pnpm i vercel",
                        },
                        {
                          label: "yarn",
                          language: "bash",
                          code: "yarn i vercel",
                        },
                        {
                          label: "npm",
                          language: "bash",
                          code: "npm i vercel",
                        },
                        {
                          label: "bun",
                          language: "bash",
                          code: "bun i vercel",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Enable Web Analytics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Enable Web Analytics in Vercel
              </h2>
              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <p className="mb-3">
                    On the{" "}
                    <a
                      href="/dashboard"
                      className="text-primary hover:underline"
                    >
                      Vercel dashboard
                    </a>
                    , select your Project and then click the{" "}
                    <strong>Analytics</strong> tab and click{" "}
                    <strong>Enable</strong> from the dialog.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded p-4 mt-4">
                    <p className="text-sm">
                      <strong>💡 Note:</strong> Enabling Web Analytics will add
                      new routes (scoped at{" "}
                      <code className="bg-muted px-2 py-1 rounded">
                        /_vercel/insights/*
                      </code>
                      ) after your next deployment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Framework Selection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Installation Instructions
              </h2>

              <div className="mb-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  Select your framework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js (Pages)",
                    "Next.js (App Router)",
                    "SvelteKit",
                    "Remix",
                    "Create React App",
                    "Nuxt",
                    "Vue",
                    "Other",
                    "Astro",
                  ].map((name, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFramework(frameworks[idx])}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedFramework === frameworks[idx]
                          ? "bg-primary text-white"
                          : "bg-background border border-border hover:border-primary"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add Package */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Add{" "}
                  <code className="bg-muted px-2 py-1 rounded">
                    @vercel/analytics
                  </code>{" "}
                  to your project
                </h3>
                <p className="text-muted-foreground mb-6">
                  Using the package manager of your choice, add the{" "}
                  <code className="bg-muted px-2 py-1 rounded">
                    @vercel/analytics
                  </code>{" "}
                  package to your project:
                </p>
                <CodeBlock
                  language="bash"
                  code=""
                  tabs={[
                    {
                      label: "pnpm",
                      language: "bash",
                      code: "pnpm i @vercel/analytics",
                    },
                    {
                      label: "yarn",
                      language: "bash",
                      code: "yarn i @vercel/analytics",
                    },
                    {
                      label: "npm",
                      language: "bash",
                      code: "npm i @vercel/analytics",
                    },
                    {
                      label: "bun",
                      language: "bash",
                      code: "bun i @vercel/analytics",
                    },
                  ]}
                />
              </div>

              {/* Framework-specific instructions */}
              {selectedFramework === "nextjs" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with Next.js, including
                      route support.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    If you are using the{" "}
                    <code className="bg-muted px-2 py-1 rounded">pages</code>{" "}
                    directory, add the following code to your main app file:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`}
                  />
                </div>
              )}

              {selectedFramework === "nextjs-app" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with Next.js, including
                      route support.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to the root layout:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}
                  />
                </div>
              )}

              {selectedFramework === "remix" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering a seamless integration with Remix, including
                      route detection.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to your root file:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}`}
                  />
                </div>
              )}

              {selectedFramework === "sveltekit" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Call the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      injectAnalytics
                    </code>{" "}
                    function in your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        injectAnalytics
                      </code>{" "}
                      function is a wrapper around the tracking script, offering
                      more seamless integration with SvelteKit.js, including
                      route support.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to the main layout:
                  </p>
                  <CodeBlock
                    language="ts"
                    code={`import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`}
                  />
                </div>
              )}

              {selectedFramework === "astro" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with Astro, including
                      route support.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to your base layout:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
      <meta charset="utf-8" />
      <!-- ... -->
      <Analytics />
	</head>
	<body>
		<slot />
    </body>
</html>`}
                  />
                </div>
              )}

              {selectedFramework === "nuxt" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with Nuxt, including
                      route support.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to your main component.
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>`}
                  />
                </div>
              )}

              {selectedFramework === "vue" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with Vue.
                      <br />
                      <strong>
                        Route support is automatically enabled if you're using
                        vue-router.
                      </strong>
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to your main component:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>`}
                  />
                </div>
              )}

              {selectedFramework === "create-react-app" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Add the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      Analytics
                    </code>{" "}
                    component to your app
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>ℹ️ Note:</strong> The{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        Analytics
                      </code>{" "}
                      component is a wrapper around the tracking script,
                      offering more seamless integration with React.
                      <br />
                      <strong>
                        When using the plain React implementation, there is no
                        route support.
                      </strong>
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to the main app file:
                  </p>
                  <CodeBlock
                    language="tsx"
                    code={`import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`}
                  />
                </div>
              )}

              {selectedFramework === "other" && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Call the{" "}
                    <code className="bg-muted px-2 py-1 rounded">inject</code>{" "}
                    function in your app
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded p-4 mb-6">
                    <p className="text-sm mb-2">
                      Import the{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        inject
                      </code>{" "}
                      function from the package, which will add the tracking
                      script to your app.
                    </p>
                    <p className="text-sm">
                      <strong>
                        This should only be called once in your app, and must
                        run in the client.
                      </strong>
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded p-4 mb-6">
                    <p className="text-sm">
                      <strong>💡 Note:</strong> There is no route support with
                      the{" "}
                      <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        inject
                      </code>{" "}
                      function.
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Add the following code to your main app file:
                  </p>
                  <CodeBlock
                    language="ts"
                    code={`import { inject } from "@vercel/analytics";

inject();`}
                  />
                </div>
              )}
            </section>

            {/* Deploy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Deploy your app to Vercel
              </h2>
              <p className="text-muted-foreground mb-6">
                Deploy your app using the following command:
              </p>
              <CodeBlock language="bash" code="vercel deploy" />
              <p className="text-muted-foreground mb-6 mt-6">
                If you haven't already, we also recommend{" "}
                <a
                  href="/docs/git#deploying-a-git-repository"
                  className="text-primary hover:underline"
                >
                  connecting your project's Git repository
                </a>
                , which will enable Vercel to deploy your latest commits to main
                without terminal commands.
              </p>
              <p className="text-muted-foreground mb-6">
                Once your app is deployed, it will start tracking visitors and
                page views.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-4">
                <p className="text-sm">
                  <strong>💡 Note:</strong> If everything is set up properly,
                  you should be able to see a Fetch/XHR request in your
                  browser's Network tab from{" "}
                  <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    /_vercel/insights/view
                  </code>{" "}
                  when you visit any page.
                </p>
              </div>
            </section>

            {/* Dashboard Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                View your data in the dashboard
              </h2>
              <p className="text-muted-foreground mb-6">
                Once your app is deployed, and users have visited your site, you
                can view your data in the dashboard.
              </p>
              <p className="text-muted-foreground mb-6">
                To do so, go to your{" "}
                <a href="/dashboard" className="text-primary hover:underline">
                  dashboard
                </a>
                , select your project, and click the <strong>Analytics</strong>{" "}
                tab.
              </p>
              <p className="text-muted-foreground mb-6">
                After a few days of visitors, you'll be able to start exploring
                your data by viewing and{" "}
                <a
                  href="/docs/analytics/filtering"
                  className="text-primary hover:underline"
                >
                  filtering
                </a>{" "}
                the panels.
              </p>
              <p className="text-muted-foreground">
                Users on Pro and Enterprise plans can also add{" "}
                <a
                  href="/docs/analytics/custom-events"
                  className="text-primary hover:underline"
                >
                  custom events
                </a>{" "}
                to their data to track user interactions such as button clicks,
                form submissions, or purchases.
              </p>
            </section>

            {/* Learn More Section */}
            <section className="mb-12 p-8 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground mb-6">
                Learn more about how Vercel supports{" "}
                <a
                  href="/docs/analytics/privacy-policy"
                  className="text-primary hover:underline"
                >
                  privacy and data compliance standards
                </a>{" "}
                with Vercel Web Analytics.
              </p>
            </section>

            {/* Next Steps */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Next steps</h2>
              <p className="text-muted-foreground mb-6">
                Now that you have Vercel Web Analytics set up, you can explore
                the following topics to learn more:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="/docs/analytics/package"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Learn how to use the{" "}
                    <code className="bg-muted px-2 py-1 rounded">
                      @vercel/analytics
                    </code>{" "}
                    package
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/analytics/custom-events"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Learn how to set update custom events
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/analytics/filtering"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Learn about filtering data
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/analytics/privacy-policy"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Read about privacy and compliance
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/analytics/limits-and-pricing"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Explore pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/analytics/troubleshooting"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <span>→</span> Troubleshooting
                  </a>
                </li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
