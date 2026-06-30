export function Footer() {
  return (
    <footer className="w-full border-t border-t-[rgba(255,255,255,0.06)] pt-24 pb-8 overflow-hidden bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Platform</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Policies</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Social</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      {/* Massive bottom-weighted structural brand logo text */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[15vw] font-bold tracking-tighter leading-none text-neutral-900 select-none">
          armory
        </h1>
      </div>
    </footer>
  );
}
