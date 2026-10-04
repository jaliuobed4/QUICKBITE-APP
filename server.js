"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !pass) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);

    // Simulate real login - replace this with your backend later
    // Example for later: await fetch('/api/login', { method:'POST', body: JSON.stringify({email, pass}) })
    
    setTimeout(() => {
      // Save login so we remember user
      localStorage.setItem("quickbite_user", JSON.stringify({ email }));
      setLoading(false);
      window.location.href = "/"; // go to homepage
    }, 800);
  };

  return (
    <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#fff7ed', padding:'20px' }}>
      <div style={{ background:'white', padding:'32px', borderRadius:'16px', width:'100%', maxWidth:'400px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontSize:'28px', fontWeight:'900', color:'#f97316', letterSpacing:'-0.5px' }}>QUICKBITE</h1>
        <p style={{ color:'#666', marginBottom:'24px', marginTop:'4px' }}>Welcome back, log in to order</p>
        
        <form onSubmit={handleLogin}>
          <input 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            type="email" 
            placeholder="Email" 
            required 
            style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'12px', outline:'none' }} 
          />
          <div style={{ position:'relative', marginBottom:'16px' }}>
            <input 
              value={pass} 
              onChange={e=>setPass(e.target.value)} 
              type={show ? "text" : "password"} 
              placeholder="Password" 
              required 
              style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', outline:'none' }} 
            />
            <span onClick={()=>setShow(!show)} style={{ position:'absolute', right:'12px', top:'12px', cursor:'pointer', fontSize:'12px', color:'#f97316', fontWeight:'700' }}>{show ? "Hide" : "Show"}</span>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ width:'100%', padding:'12px', background: loading ? '#fdba74' : '#f97316', color:'white', border:'none', borderRadius:'8px', fontWeight:'bold', cursor:'pointer', transition:'0.2s' }}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <button onClick={()=>alert("Google login coming soon!")} style={{ width:'100%', marginTop:'12px', padding:'12px', background:'white', border:'1px solid #ddd', borderRadius:'8px', cursor:'pointer', fontWeight:'600' }}>Continue with Google</button>
        
        <p style={{ marginTop:'16px', textAlign:'center', fontSize:'14px' }}>No account? <Link href="/signup" style={{ color:'#f97316', fontWeight:'bold', textDecoration:'none' }}>Sign Up</Link></p>
      </div>
    </div>
  );
}