const canva = document.getElementById("shape");
        const ctx = canva.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(100,100);
      
        ctx.lineTo(100,200);
        ctx.lineTo(200,200);
        ctx.lineTo(200,100);
        ctx.lineTo(100,100);
        
        ctx.stroke();

        ctx.beginPath();

        ctx.arc(150,200,100,0,3.14);

        ctx.stroke();
        ctx.closePath();

