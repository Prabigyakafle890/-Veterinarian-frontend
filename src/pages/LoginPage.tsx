import { LoginForm } from "../features/auth/components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
     
      <div className="relative hidden lg:flex lg:w-1/2 bg-[#1a4a5e] items-center justify-center overflow-hidden">
       
        <img
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop"
          alt="Veterinary Professional"
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
        />
        
        <div className="relative z-10 px-16 xl:px-24 text-white">
         
          <div className="mb-12 flex items-center gap-4">
             <div className="h-12 w-12 bg-white/20 rounded-xl backdrop-blur-lg flex items-center justify-center border border-white/30 shadow-xl">
                <span className="text-xs font-black tracking-tighter">AVG</span>
             </div>
             <div className="h-px w-8 bg-white/30"></div>
             <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-100/80">
               Recruitment
             </span>
          </div>
          
          <h1 className="text-5xl xl:text-7xl font-bold leading-[1.1] max-w-xl">
            Veterinary <br />
            <span className="text-blue-300">Recruitment</span> Portal
          </h1>
          
          <p className="mt-8 text-xl text-blue-50/70 max-w-md leading-relaxed">
            A centralized platform for managing talent across the American Veterinary Group network.
          </p>
          
          <div className="mt-12 flex gap-2">
            <div className="h-1.5 w-12 bg-[#2da1db] rounded-full"></div>
            <div className="h-1.5 w-4 bg-white/20 rounded-full"></div>
            <div className="h-1.5 w-4 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

    
      <div className="flex w-full flex-col justify-center items-center px-6 md:px-16 lg:w-1/2 bg-slate-50/30">
       
        <div className="lg:hidden mb-12 flex items-center gap-2">
          <div className="h-8 w-8 bg-[#1a4a5e] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
            AVG
          </div>
          <span className="font-bold text-[#1a4a5e] uppercase tracking-wider">AVG Portal</span>
        </div>

        <LoginForm />
        
      
        <p className="mt-12 text-xs text-slate-400">
          &copy; 2026 American Veterinary Group. All rights reserved.
        </p>
      </div>
    </div>
  );
};