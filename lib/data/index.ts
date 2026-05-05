import type { Locale } from "@/lib/i18n/config";
import { services as servicesEn } from "./services";
import { services as servicesTr } from "./tr/services";
import { projects as projectsEn } from "./projects";
import { projects as projectsTr } from "./tr/projects";
import { testimonials as testimonialsEn } from "./testimonials";
import { testimonials as testimonialsTr } from "./tr/testimonials";
import { blogPosts as blogPostsEn } from "./blog-posts";
import { blogPosts as blogPostsTr } from "./tr/blog-posts";

export function getServices(locale: Locale) {
  return locale === "tr" ? servicesTr : servicesEn;
}

export function getProjects(locale: Locale) {
  return locale === "tr" ? projectsTr : projectsEn;
}

export function getTestimonials(locale: Locale) {
  return locale === "tr" ? testimonialsTr : testimonialsEn;
}

export function getBlogPosts(locale: Locale) {
  return locale === "tr" ? blogPostsTr : blogPostsEn;
}
