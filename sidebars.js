// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [
    // Tutorial Link from Docs
    {
      type: "link",
      label: "Tutorials",
      href: "/tutorials",
    },
    // Documentation Parent
    {
      type: "category",
      label: "Documentation",
      link: {
        // type: "generated-index",
        type: "doc",
        id: "index",
      },
      collapsed: true,
      items: [
        {
          // Custom Get started with Harness landing page
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Get started with Harness",
          link: {
            type: "generated-index",
            slug: "/getting-started",
          },
          */
          type: "category",
          label: "Get Started",
          link: {
            type: "doc",
            id: "getting-started",
          },
          customProps: {
            description: "Learn Harness fundamentals and key concepts.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "getting-started" }],
        },
        // Custom Continuous Integration landing page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "/continuous-integration",
          },
          */
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "doc",
            id: "continuous-integration",
          },
          customProps: {
            description:
              "Learn how you can build faster and be more productive.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-integration" }],
        },
        // Custom Continuous Delivery Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "generated-index",
            slug: "/continuous-delivery",
          },
          */
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "doc",
            id: "continuous-delivery",
          },
          customProps: {
            description:
              "Learn how to make your software releases more efficient and reliable.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-delivery" }],
        },
        // Custom Feature Flags Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "/feature-flags",
          },
          */
          type: "category",
          label: "Feature Flags",
          link: {
            type: "doc",
            id: "feature-flags",
          },
          customProps: {
            description:
              "Learn how to change your software's functionality without deploying new code.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "feature-flags" }],
        },
        // Custom Cloud Cost ManagementLanding Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "/cloud-cost-management",
          },
          */
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "doc",
            id: "cloud-cost-management",
          },
          customProps: {
            description: "Learn how to manage and optimize cloud costs.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "cloud-cost-management" }],
        },
        //Custom Service Reliability Management Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "/service-reliability-management",
          },
          */
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "doc",
            id: "service-reliability-management",
          },
          customProps: {
            description:
              "Learn how to use real-time insights to improve the reliability of applications and services.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Security Testing Orchestration",
          id: "security-testing-orchestration",
          */
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "doc",
            id: "security-testing-orchestration",
            // type: "doc",
            // id: "security-testing-orchestration",
          },
          customProps: {
            description: "Learn how to left shift your security testing.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-testing-orchestration",
            },
          ],
        },
        {
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "doc",
            id: "chaos-engineering",
          },
          customProps: {
            description: "Learn how to build and validate resilience.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-engineering",
            },
          ],
        },
        {
          type: "category",
          label: "Software Engineering Insights",
          link: {
            type: "doc",
            id: "software-engineering-insights",
          },
          customProps: {
            description: "Learn how data-led insights can remove bottlenecks and improve productivity.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "software-engineering-insights",
            },
          ],
        },
        // Custom Continuous Error Tracking landing page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Error Tracking",
          link: {
            type: "generated-index",
            slug: "/continuous-error-tracking",
          },
          */
          type: "category",
          label: "Continuous Error Tracking",
          link: {
            type: "doc",
            id: "continuous-error-tracking",
          },
          customProps: {
            description:
              "Learn how you can identify, triage, and resolve errors in applications.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-error-tracking",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Internal Developer Portal docs",
          id: "internal-developer-portal",
          */
          type: "category",
          label: "Internal Developer Portal",
          link: {
            type: "doc",
            id: "internal-developer-portal",
          },
          customProps: {
            description:
              "Get started with Harness Internal Developer Portal (Beta)",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "internal-developer-portal",
            },
          ],
        },
        // Custom Platform Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Platform",
          link: {
            type: "generated-index",
            slug: "/platform",
          },
          */
          type: "category",
          label: "Platform",
          link: {
            type: "doc",
            id: "platform",
          },
          customProps: {
            description:
              "Learn how to manage Harness features that integrate with all modules.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "platform",
            },
          ],
        },
        // Custom SMP landing page
        {
          /*
          type: "doc",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "generated-index",
            slug: "/self-managed-enterprise-edition",
          },
          id: "self-managed-enterprise-edition",
          */
          type: "category",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "doc",
            id: "self-managed-enterprise-edition",
          },
          customProps: {
            description:
              "Learn how to use this end-to-end solution for continuous, self-managed delivery.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "self-managed-enterprise-edition",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "FirstGen docs",
          id: "first-gen",
          */
          type: "category",
          label: "Harness FirstGen",
          link: {
            type: "generated-index",
            slug: "/first-gen",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "first-gen",
          },
          */
          },
          customProps: {
            description: "Learn how to use Harness FirstGen modules.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "first-gen",
            },
          ],
        },
        // Release Notes
        {
          type: "link",
          label: "Release Notes",
          href: "/release-notes/whats-new",
          customProps: {
            description: "Review the notes to learn about new features.",
          },
        },
        {
          /*
          type: "doc",
          label: "FAQs",
          id: "faqs",
          */
          type: "category",
          label: "FAQs",
          link: {
            type: "generated-index",
            slug: "/faqs",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "faqs",
          },
          */
          },
          customProps: {
            description: "Find answers to frequently asked questions.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "faqs",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Troubleshooting",
          id: "troubleshooting",
          */
          type: "category",
          label: "Troubleshooting",
          link: {
            type: "generated-index",
            slug: "/troubleshooting",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "troubleshooting",
          },
            */
          },
          customProps: {
            description:
              "Find details about common error messages, what causes them, and solutions.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "troubleshooting",
            },
          ],
        },
      ],
    },
     // Cert Link from Docs
   {
    type: "link",
    label: "Certifications",
    href: "/certifications",
  },
   // KB Link from Docs
   {
    type: "link",
    label: "Knowledge Base",
    href: "/kb",
  },
  // Community Link from Docs
  {
    type: "link",
    label: "Community",
    href: "/community",
  },
  ],
  //Beta Sidebars
  iacmbeta: [
    {
      /*
      type: "doc",
      label: "IaCM",
      id: "infra-as-code-management",
      */
      type: "category",
      label: "Infrastructure as Code Management",
      link: {
        type: "generated-index",
        slug: "/infra-as-code-management",
        /* Uncomment this block while we have a landing page for module docs
        type: "doc",
        id: "infra-as-code-management",
        */
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "infra-as-code-management",
        },
      ],
    },

    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
