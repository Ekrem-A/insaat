import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Chen",
    role: "Property Developer",
    company: "Chen Property Group",
    content:
      "James identified a critical waterproofing defect during our foundation phase that our general contractor had missed. Fixing it at that stage cost us $8,000. Finding it after the slab was poured would have cost ten times that. His fee paid for itself in the first month.",
    rating: 5,
    projectType: "Residential Development",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Private Homeowner",
    content:
      "I was nervous about managing a $2M custom home build without any construction background. James was my translator, my advocate, and my early-warning system for the entire 14 months. I never felt out of my depth, and the finished home is exactly what we envisioned — on budget.",
    rating: 5,
    projectType: "Custom Home",
  },
  {
    id: "3",
    name: "Marcus O'Brien",
    role: "Operations Director",
    company: "Pinnacle Logistics",
    content:
      "We'd been burned on a previous warehouse project that went 30% over budget. This time we brought James in from the start. His contractor evaluation process surfaced assumptions in the bids that would have led to major change orders. We made a much more informed decision, and the project came in on target.",
    rating: 5,
    projectType: "Industrial / Warehouse",
  },
];
