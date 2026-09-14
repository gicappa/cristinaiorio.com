import React from 'react';

/**
 * Owns the page's vertical rhythm and horizontal gutters so every section shares
 * one scale. `tone` drives the strict light/tinted alternation that keeps
 * adjacent sections from reading as a single slab.
 */
interface BandProps {
  tone?: 'light' | 'tinted';
  className?: string;
  children: React.ReactNode;
}

const toneClasses = {
  light: 'bg-white',
  tinted: 'bg-slate-100',
} as const;

const bandClasses = (tone: 'light' | 'tinted', className: string) =>
  `${toneClasses[tone]} py-16 md:py-24 ${className}`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
);

/** A tone band that is not itself a landmark, for use inside an existing section. */
export const Band: React.FC<BandProps> = ({ tone = 'light', className = '', children }) => (
  <div className={bandClasses(tone, className)}>
    <Container>{children}</Container>
  </div>
);

const Section: React.FC<BandProps & { id?: string }> = ({
  id,
  tone = 'light',
  className = '',
  children,
}) => (
  <section id={id} className={bandClasses(tone, className)}>
    <Container>{children}</Container>
  </section>
);

/**
 * One measure shared by every prose column, set in rem rather than `ch` because
 * `ch` is the width of "0", and in Poppins that is 10.05px against a true
 * average character advance of 8.73px — so a `ch` figure reads about 15% narrower
 * than it renders. Measured at 18px: `max-w-prose` gave 75 characters per line,
 * 44rem gives 81. That is past the usual 75 guideline, so leading opens from
 * 1.625 to 1.78 to keep the return sweep easy to follow.
 */
export const proseClasses = 'mx-auto max-w-[44rem] text-lg leading-8';

interface SectionHeadingProps {
  title: string;
  subtitle?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <header className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">{title}</h2>
    <span aria-hidden="true" className="mx-auto mt-5 block h-px w-16 bg-brand/30" />
    {subtitle && (
      <p className="mx-auto mt-6 max-w-prose text-lg leading-relaxed text-slate-600">{subtitle}</p>
    )}
  </header>
);

export default Section;
