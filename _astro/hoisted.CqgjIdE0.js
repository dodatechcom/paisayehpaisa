import"./hoisted.hU0XFuob.js";document.getElementById("kitForm").addEventListener("submit",e=>{e.preventDefault(),document.getElementById("name").value;const t=document.getElementById("email").value,n=document.getElementById("kitForm");n.innerHTML=`
      <div style="padding: 2rem; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">&#10004;</div>
        <h3 style="color: #22c55e; margin-bottom: 0.5rem;">Kit Sent!</h3>
        <p style="color: #94a3b8; font-size: 0.9rem;">Check your inbox at <strong>${t}</strong> for the download link.</p>
      </div>
    `});
