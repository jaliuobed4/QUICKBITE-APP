"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", pass:"", confirm:"" });
  
  const handleSignup = (e) => {
    e.preventDefault();
    if(form.pass !== form.confirm) return alert("Passwords don't match");
    alert(`Account created for ${form.name}!`);
    window.location.href = "/login";
  };

  return (
    <div style={{ minHeight:'100vh', display:'grid', placeItems:'center', background:'#fff7ed', padding:'20px' }}>
      <div style={{ background:'white', padding:'32px', borderRadius:'16px', width:'100%', maxWidth:'400px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontSize:'28px', fontWeight:'900', color:'#f97316' }}>Join QUICKBITE</h1>
        <p style={{ color:'#666', marginBottom:'24px' }}>Create account - order in 2 mins</p>
        
        <form onSubmit={handleSignup}>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" required style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'12px' }} />
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} type="email" placeholder="Email" required style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'12px' }} />
          <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone +233..." required style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'12px' }} />
          <input value={form.pass} onChange={e=>setForm({...form, pass:e.target.value})} type="password" placeholder="Password" required style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'12px' }} />
          <input value={form.confirm} onChange={e=>setForm({...form, confirm:e.target.value})} type="password" placeholder="Confirm password" required style={{ width:'100%', padding:'12px', border:'1px solid #ddd', borderRadius:'8px', marginBottom:'16px' }} />
          <button type="submit" style={{ width:'100%', padding:'12px', background:'#f97316', color:'white', border:'none', borderRadius:'8px', fontWeight:'bold', cursor:'pointer' }}>Sign Up</button>
        </form>
        
        <p style={{ marginTop:'16px', textAlign:'center', fontSize:'14px' }}>Have account? <Link href="/login" style={{ color:'#f97316', fontWeight:'bold' }}>Log In</Link></p>
      </div>
    </div>
  );
}