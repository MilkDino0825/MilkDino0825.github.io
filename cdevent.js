const dday = new Date("2024-01-15T23:59:59");
    
    function Countdown() {
      const n = new Date();
      const time = dday - n;

      if (time <= 0) {
        document.getElementById("countdownevent").textContent = "디데이 종료";
      } else {
        const d = Math.floor(time / (1000 * 60 * 60 * 24));
        const h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((time % (1000 * 60)) / 1000);
      
        const cdText = `${d} : ${h} : ${m} : ${s}`;
        document.getElementById("countdownevent").textContent = cdText;
      }
    }

    setInterval(Countdown, 1000);
