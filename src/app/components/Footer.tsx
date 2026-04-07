const footerData = {
  copyright: `© ${new Date().getFullYear()} Tinu Mathai. All rights reserved.`,
  madeWith: "Made with care & precision",
};

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8 mt-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>{footerData.madeWith}</span>
        <span>{footerData.copyright}</span>
      </div>
    </footer>
  );
}
