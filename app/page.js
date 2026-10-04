import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight:'100vh', background:'#fff7ed' }}>
      {/* HEADER WITH BUTTONS */}
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 24px', background:'white', borderBottom:'1px solid #eee', position:'sticky', top:0 }}>
        <h1 style={{ color:'#f97316', fontWeight:'900', fontSize:'24px' }}>QUICKBITE 🍲</h1>
        <div style={{ display:'flex', gap:'12px' }}>
          <Link href="/login" style={{ padding:'8px 18px', border:'1px solid #f97316', color:'#f97316', borderRadius:'8px', textDecoration:'none', fontWeight:'bold' }}>Log In</Link>
          <Link href="/signup" style={{ padding:'8px 18px', background:'#f97316', color:'white', borderRadius:'8px', textDecoration:'none', fontWeight:'bold' }}>Sign Up</Link>
        </div>
      </header>

      {/* MAIN */}
      <div style={{ padding:'40px 24px', maxWidth:'900px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'42px', fontWeight:'900', marginBottom:'12px' }}>Food delivered in 30 mins</h2>
        <p style={{ color:'#666', fontSize:'18px', marginBottom:'24px' }}>Order from your favorite restaurants in Accra</p>
        
        <div style={{ display:'flex', gap:'12px', justifyContent:'center', marginBottom:'40px' }}>
          <Link href="/signup" style={{ padding:'14px 28px', background:'#f97316', color:'white', borderRadius:'10px', textDecoration:'none', fontWeight:'bold', fontSize:'16px' }}>Order Now</Link>
          <Link href="/login" style={{ padding:'14px 28px', background:'white', border:'1px solid #ddd', borderRadius:'10px', textDecoration:'none', color:'#333', fontWeight:'bold' }}>Log In</Link>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'16px', textAlign:'left' }}>
          <div style={{ background:'white', padding:'20px', borderRadius:'12px' }}>🍔 <b>Fast Food</b><br/>Burgers, Fries, Pizza</div>
          <div style={{ background:'white', padding:'20px', borderRadius:'12px' }}>🍛 <b>Local Dishes</b><br/>Jollof, Waakye, Fufu</div>
          <div style={{ background:'white', padding:'20px', borderRadius:'12px' }}>🥤 <b>Drinks</b><br/>Juices, Soft drinks</div>
        </div>

        <p style={{ marginTop:'30px', color:'#999' }}>Logged out view • Click Sign Up to create account</p>
      </div>
    </div>
  );
}