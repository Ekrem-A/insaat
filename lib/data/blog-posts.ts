import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "5-costly-mistakes-to-avoid-before-breaking-ground",
    title: "5 Costly Mistakes to Avoid Before Breaking Ground",
    excerpt:
      "Most construction projects that go over budget were already in trouble before the first shovel hit the ground. Here are the five pre-construction mistakes I see most often — and how to avoid them.",
    content: `
## The Problem Starts Before Construction

After 15 years working on construction projects of all sizes, I've seen the same pattern repeat itself dozens of times: a project spirals over budget or past its deadline, and when you trace the root cause, it almost always leads back to decisions made — or not made — before any physical work began.

Here are the five most common pre-construction mistakes I see, and what you can do instead.

---

## 1. Skipping a Proper Feasibility Study

Property owners often fall in love with a vision before validating whether it's financially viable. A proper feasibility study examines site conditions, regulatory constraints, realistic construction costs, and market factors. Skipping it is like signing a lease without reading the terms.

**What to do instead:** Commission an independent feasibility study from a consultant who has no financial stake in the project proceeding. The cost is typically 0.2–0.5% of total project value.

---

## 2. Using a Vague or Incomplete Contract

"We'll sort out the details as we go" is the phrase that precedes most contractor disputes. Ambiguous scope definitions, missing specifications, and unclear change-order procedures create friction and cost.

**What to do instead:** Have your contract reviewed by an independent construction consultant before signing. Look especially at: scope of work definition, change-order procedures, payment milestones, and termination clauses.

---

## 3. Choosing the Lowest Bidder Without Analysis

The lowest bid is rarely the lowest final cost. Low bids often reflect missing scope, aggressive assumptions, or financial desperation from the contractor's side. Any of these will surface as change orders.

**What to do instead:** Commission a proper bid analysis that normalizes bids for scope differences and evaluates contractors on qualifications, not just price.

---

## 4. Underestimating Contingency

Industry standard contingency for construction projects is 10–15% for projects with complete design and known site conditions. Many owners budget 5% or less — and then wonder why they run short.

**What to do instead:** Work with a construction cost consultant to determine an appropriate contingency based on the specific risk profile of your project.

---

## 5. Starting Without an Independent Technical Representative

Your architect represents your design intent. Your contractor represents their own interests. Neither of them is independently representing *your* interests in the field. Without someone verifying that work is being done correctly, you're relying on the person most motivated to cut corners.

**What to do instead:** Engage an independent construction consultant for at least the critical-stage inspections: foundation, structure, envelope, and mechanical systems.

---

Getting these five things right before breaking ground won't guarantee a perfect project — but it will dramatically reduce the probability of a costly one.

*Have a question about your specific project? [Contact me](/contact) for a free initial consultation.*
    `.trim(),
    category: "Project Planning",
    tags: ["Pre-Construction", "Budgeting", "Risk Management", "Contracts"],
    publishedAt: "2026-04-15",
    readTime: 6,
    author: "James Harrington, PE",
  },
  {
    id: "2",
    slug: "how-to-read-a-construction-bid-like-a-professional",
    title: "How to Read a Construction Bid Like a Professional",
    excerpt:
      "Receiving bids for your construction project can feel overwhelming. Here's the systematic approach I use to evaluate any bid — and the red flags that tell me a contractor is hiding something.",
    content: `
## Why Most People Read Bids Wrong

Most property owners look at a construction bid and go straight to the bottom line. Total cost. That's understandable — the number is the most visible thing on the page. But experienced construction professionals know that the total cost number is almost meaningless on its own.

What matters is *what's included in that number* — and perhaps more importantly, what isn't.

---

## Step 1: Check Scope Completeness First

Before you look at any numbers, read the scope of work section carefully. Compare it line by line against your design drawings and specifications. Ask yourself: is everything in my project accounted for?

Common omissions I find in contractor bids:
- Site preparation and demolition (often excluded "pending conditions")
- Landscaping and exterior works
- Temporary facilities during construction
- Testing and commissioning of MEP systems
- Permit fees (these can be significant)
- Utility connections and upgrades

A bid missing these items isn't necessarily dishonest — but when you add them back, the "cheap" option often becomes the most expensive one.

---

## Step 2: Read the Exclusions and Assumptions List

Almost every professional bid includes a list of exclusions and assumptions. This is where contractors protect themselves. Read this section word by word.

Red flags I look for:
- "Price based on owner-supplied soils report" — what if conditions differ?
- "Pricing assumes no hazardous materials" — has the site been tested?
- "Schedule assumes owner decisions within 48 hours" — is that realistic?
- "Allowances" for items like flooring, fixtures, or finishes that are far below market

---

## Step 3: Check Unit Rates, Not Just Totals

If the bid is itemized (and a good bid should be), check the unit rates against market benchmarks. Is the concrete priced at $150/yd³ when current market is $175/yd³? That might mean the contractor is planning to substitute a lower-spec mix. Is labor priced suspiciously low? That might mean they're planning to use unqualified workers.

---

## Step 4: Evaluate the Contractor, Not Just the Price

A bid is only as good as the contractor who submitted it. Before you get excited about a low number, ask:

- Can I see three references from similar projects in the last three years?
- What is the contractor's current backlog? (Overloaded contractors miss schedules)
- Who specifically will be on-site as project manager?
- What's their financial health? (Request a bank reference letter)

---

## Step 5: Normalize Before Comparing

Once you've done the above analysis for each bid, you're ready to compare — but compare normalized totals, not submitted totals. Add back all the missing scope items at market rates. Adjust allowances to realistic figures. Only then does the comparison become meaningful.

In my experience, properly normalized bids often completely reverse the apparent ranking. The "cheapest" bid becomes mid-range, and the "most expensive" turns out to be the most comprehensive.

---

If this process sounds time-consuming, it is — but it's nothing compared to the time and money you'll spend resolving disputes with a contractor whose bid had critical hidden assumptions.

*Need help evaluating bids for an upcoming project? [Get in touch](/contact) — bid analysis is one of my most common and highest-impact engagements.*
    `.trim(),
    category: "Contractor Selection",
    tags: ["Bidding", "Contractor Evaluation", "Cost Analysis", "Contracts"],
    publishedAt: "2026-03-28",
    readTime: 8,
    author: "James Harrington, PE",
  },
  {
    id: "3",
    slug: "what-is-technical-supervision-and-why-do-you-need-it",
    title: "What Is Technical Supervision — and Why Do You Need It?",
    excerpt:
      "Your architect designed it. Your contractor is building it. So who's making sure it's being built right? That's the job of independent technical supervision — and most clients don't know it exists until they wish they'd had it.",
    content: `
## The Gap Nobody Tells You About

When you hire an architect and a general contractor, you might assume the system is complete. The architect designs, the contractor builds, and quality is guaranteed. Unfortunately, that's not how it works in practice.

Your architect is responsible for design. They may visit the site occasionally, but they're not there to inspect construction quality on an ongoing basis — and their contract typically doesn't require it.

Your contractor is responsible for building what's been designed. But they're also motivated to complete work as efficiently as possible, which doesn't always align perfectly with maximum quality.

The result is a gap: ongoing, independent technical verification that work is actually being built to the specified standard. Filling that gap is what independent technical supervision does.

---

## What Technical Supervision Actually Involves

Good technical supervision is not about standing on-site watching workers all day. It's a structured program of inspections at critical stages — the moments when defects are still visible and fixable.

The critical inspection points on most projects include:

**Foundation and earthworks**
Before concrete is poured, reinforcement placement, formwork geometry, and subgrade preparation must be verified. Once concrete is placed, correcting errors is extremely expensive.

**Structural concrete and steel**
Reinforcement layout, splice lengths, cover depths, and concrete mix verification — these are the invisible components that determine structural performance for the life of the building.

**Building envelope**
Waterproofing, flashing details, window and door installation — failures here cause water infiltration that damages finishes, structure, and indoor air quality over time.

**MEP rough-in**
Before walls are closed, the placement and specification of mechanical, electrical, and plumbing rough-in should be verified. Opening finished walls to correct errors is costly and disruptive.

**Commissioning**
All systems — HVAC, electrical, plumbing — should be functionally tested before final payment is released.

---

## What I Actually Find

I'm frequently asked whether independent supervision actually finds anything meaningful. The answer is yes, consistently.

On a recent residential project, I identified an incorrect rebar layout in the foundation that the contractor's own site manager had missed. On a commercial renovation, waterproofing membrane installation was found to be non-compliant with manufacturer specifications — which would have voided the warranty. On a school HVAC project, duct penetrations through fire-rated walls were unsealed — a code violation that would have failed occupancy inspection.

None of these were malicious. Construction is a complex, fast-moving environment with many subcontractors working simultaneously. Mistakes happen. The question is whether someone independent is there to catch them before they're buried under concrete and drywall.

---

## What Does It Cost?

Technical supervision typically costs between 1% and 3% of the construction contract value, depending on project complexity and the number of inspections required.

On most projects, a single identified and corrected defect will cover this cost many times over — before accounting for the avoided litigation, delay, or remediation costs that uncorrected defects eventually generate.

---

*Thinking about engaging technical supervision for your project? [Contact me](/contact) to discuss what a tailored supervision program would look like for your specific situation.*
    `.trim(),
    category: "Quality & Supervision",
    tags: ["Technical Supervision", "Quality Control", "Construction Defects", "Inspection"],
    publishedAt: "2026-03-10",
    readTime: 7,
    author: "James Harrington, PE",
  },
  {
    id: "4",
    slug: "construction-budget-contingency-how-much-is-enough",
    title: "Construction Budget Contingency: How Much Is Enough?",
    excerpt:
      "The contingency line in your construction budget is not padding — it's insurance against the unknown. Here's how to determine the right contingency for your specific project.",
    content: `
## Why "10% is standard" Isn't Enough of an Answer

If you ask a contractor or architect how much contingency you should carry, you'll often hear "10%" — sometimes 15%, sometimes 5%. These numbers aren't wrong exactly, but they're not right either without context.

The appropriate contingency for your project depends on the specific risk profile of *your* project — its design completeness, site complexity, procurement strategy, and your own risk tolerance. Here's how I think through it.

---

## The Two Types of Contingency

Before diving into numbers, it's important to understand that there are actually two distinct types of contingency, and they serve different purposes.

**Design contingency** covers the risk that the design is incomplete or will change. This is highest at the start of a project (when design is just a concept sketch) and should reach near zero once construction documents are 100% complete and permits are issued.

**Construction contingency** covers unforeseen conditions during construction — unexpected soil conditions, concealed structural issues in renovations, material price escalation, and scope changes that couldn't reasonably have been anticipated.

Many clients (and some professionals) conflate these two, which leads to either over-reserving or under-reserving at different project phases.

---

## A Framework for Sizing Your Contingency

| Risk Factor | Low | Medium | High |
|---|---|---|---|
| Design completeness | 100% CDs | 70% CDs | Concept only |
| Site complexity | Known/clear | Standard | Unknown/complex |
| Contractor quality | Proven/vetted | Competitive tender | Unvetted |
| Schedule pressure | Relaxed | Normal | Compressed |
| Project type | Simple repeat | Standard | Novel/complex |

Score yourself honestly across these five factors. If you have mostly "Low" answers, 7-10% contingency may be sufficient. Mostly "Medium" suggests 12-15%. Any "High" answer in design completeness, site complexity, or contractor quality should prompt 15-20%+.

---

## What Most People Get Wrong

The most common contingency mistake I see isn't choosing the wrong percentage — it's treating the contingency as a target to spend rather than a reserve to protect.

When owners share their contingency balance with contractors (intentionally or accidentally), it tends to get consumed. Keep your contingency figure private. Manage it as a separate financial reserve, not a line item in the construction contract.

The second most common mistake is failing to distinguish between contingency and owner-driven scope changes. If you decide mid-project to upgrade your kitchen finishes, that's not a contingency draw — that's a scope change that should come from a separate owner-funded allowance.

---

## The Cost of Getting It Wrong

Running out of contingency doesn't just mean you're over budget — it creates real pressure to accept substandard work, skip inspections, or avoid change orders even when they're legitimate. The downstream consequences of those compromises are typically far more expensive than a properly sized contingency reserve would have been.

---

*Want help sizing the right contingency for your upcoming project? [Book a consultation](/contact) — I typically complete a contingency analysis in 2-3 hours and it's often the highest-value hour I spend with new clients.*
    `.trim(),
    category: "Cost Management",
    tags: ["Budget", "Contingency", "Cost Analysis", "Risk Management"],
    publishedAt: "2026-02-20",
    readTime: 7,
    author: "James Harrington, PE",
  },
];
