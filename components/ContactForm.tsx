"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

type Props = {
  dict: Dictionary["contactPage"];
};

export default function ContactForm({ dict }: Props) {
  const f = dict.form;
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-3">{f.successTitle}</h3>
        <p className="text-brand-gray text-sm leading-relaxed max-w-sm mx-auto mb-6">
          {f.successBodyPrefix}{form.name.split(" ")[0]}{f.successBodySuffix}
        </p>
        <button
          onClick={() => { setForm(initialState); setSubmitted(false); }}
          className="text-xs text-brand-yellow hover:text-brand-orange transition-colors"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-brand-dark mb-1.5">
            {f.nameLabel} <span className="text-brand-orange">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={f.namePlaceholder}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-brand-dark mb-1.5">
            {f.emailLabel} <span className="text-brand-orange">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={f.emailPlaceholder}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-brand-dark mb-1.5">
          {f.phoneLabel} <span className="text-gray-400 font-normal">{f.phoneOptional}</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder={f.phonePlaceholder}
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
        />
      </div>

      {/* Project type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-brand-dark mb-1.5">
            {f.projectTypeLabel} <span className="text-brand-orange">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={form.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors bg-white"
          >
            <option value="">{f.projectTypePlaceholder}</option>
            {f.projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-brand-dark mb-1.5">
            {f.budgetLabel}
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors bg-white"
          >
            <option value="">{f.budgetPlaceholder}</option>
            {f.budgetRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-brand-dark mb-1.5">
          {f.messageLabel} <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors resize-none"
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {f.submitting}
          </>
        ) : (
          <>
            {f.submitButton}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </Button>

      <p className="text-xs text-brand-gray text-center">
        {f.privacyNote}
      </p>
    </form>
  );
}