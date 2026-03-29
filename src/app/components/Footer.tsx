import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-6">
        {/* Copyright */}
        <div>
          <p className="text-gray-400 flex items-center justify-center">
            <span className="text-emerald-400">&lt;</span>SV<span className="text-emerald-400">/&gt;</span>&nbsp;
            Soundarya Vembaiyan. 
            {/* Made with&nbsp;
            <Heart size={16} className="text-emerald-400 fill-emerald-400" />
            &nbsp;& code. */}
          </p>
        </div>
  
    </footer>
  );
}
