"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Hospital } from "lucide-react";

// Modular nav data structure
const NAV_LINKS = [
  {
    type: "logo",
    icon: <Hospital className="h-6 w-6 text-primary" />, // lucide-react icon
    href: "/",
    label: "Logo",
  },
  {
    label: "Find Rehab",
    trigger: true,
    content: [
      {
        title: "Search Rehabs",
        href: "/rehabs/search",
        description:
          "Filter by keywords and location to find the right rehab center.",
      },
      {
        title: "Go to AI Agent",
        href: "/rehabs/ai-agent",
        description:
          "Let our AI agent help you find the best rehab for your needs.",
      },
    ],
  },
  {
    label: "Start Admissions",
    trigger: true,
    content: [
      {
        title: "Upload Insurance",
        href: "/admissions/insurance",
        description: "Upload your insurance information for verification.",
      },
      {
        title: "Start Admissions Process",
        href: "/admissions/start",
        description: "Begin the admissions process and get help fast.",
      },
    ],
  },
  {
    label: "Help For Loved Ones",
    trigger: true,
    content: [
      {
        title: "Withdrawal Timelines",
        href: "/help/withdrawal-timelines",
        description: "Understand what to expect during withdrawal.",
      },
      {
        title: "About Treatment Phases",
        href: "/help/treatment-phases",
        description: "Learn about the phases of addiction treatment.",
      },
      {
        title: "Science Articles",
        href: "/help/science-articles",
        description:
          "Read the latest research and science on addiction recovery.",
      },
      {
        title: "Publications",
        href: "/help/publications",
        description: "Browse publications and resources for families.",
      },
    ],
  },
  {
    label: "Login/Me",
    trigger: true,
    content: [
      {
        title: "Insurance Information",
        href: "/me/insurance",
        description: "View and update your insurance details.",
      },
      {
        title: "Selected Rehabs",
        href: "/me/rehabs",
        description: "See your selected rehab centers.",
      },
      {
        title: "Status",
        href: "/me/status",
        description: "Check your application and treatment status.",
      },
    ],
  },
  {
    label: "Login Loved One",
    trigger: true,
    content: [
      {
        title: "Insurance Information",
        href: "/loved-one/insurance",
        description: "View and update your loved one's insurance details.",
      },
      {
        title: "Selected Rehabs",
        href: "/loved-one/rehabs",
        description: "See selected rehabs for your loved one.",
      },
      {
        title: "Status",
        href: "/loved-one/status",
        description: "Check your loved one's application and treatment status.",
      },
    ],
  },
];

interface AppNavbarProps {
  isSidebarOpen: boolean;
}

export function AppNavbar({ isSidebarOpen }: AppNavbarProps) {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex items-center justify-end h-16 pr-8">
        <NavigationMenu className="flex-1 flex max-w-3xl">
          <NavigationMenuList className="flex gap-2">
            {NAV_LINKS.map((item) => {
              if (item.type === "logo") {
                return (
                  <NavigationMenuItem key={item.label} className="mr-auto">
                    <Link
                      href={item.href}
                      className="flex items-center px-2"
                      aria-label="Home"
                    >
                      {item.icon}
                    </Link>
                  </NavigationMenuItem>
                );
              }
              if (item.trigger) {
                const isFindRehab = item.label === "Find Rehab";
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        isFindRehab &&
                          isSidebarOpen &&
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[350px] lg:w-[400px]">
                        {item.content.map((sub) => (
                          <ListItem
                            key={sub.title}
                            href={sub.href}
                            title={sub.title}
                          >
                            {sub.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              // fallback for any other type
              return null;
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
