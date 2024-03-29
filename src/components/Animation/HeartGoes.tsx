import React, { useEffect } from 'react';

const HeartAnimation: React.FC = () => {
  useEffect(() => {
    // const loadHeaderPlugin = async () => {
    //   const response = await fetch('https://vivinantony.github.io/header-plugin/');
    //   const html = await response.text();
    //   const parser = new DOMParser();
    //   const doc = parser.parseFromString(html, 'text/html');
    //   const backToLink = doc.querySelector('a.back-to-link');
    //   if (backToLink) {
    //     backToLink.setAttribute('href', 'http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt');
    //     document.getElementById('header-plugin')?.appendChild(doc.body);
    //   }
    // };

    const loveAnimation = setInterval(function () {
      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      const bgHeart = document.querySelector('.bg_heart');
      if (bgHeart) {
        const heart1 = document.createElement('div');
        heart1.className = 'heart';
        heart1.style.width = `${r_size}px`;
        heart1.style.height = `${r_size}px`;
        heart1.style.left = `${r_left}%`;
        heart1.style.background = `rgba(255, ${r_bg - 25}, ${r_bg}, 1)`;
        heart1.style.animation = `love ${r_time}s ease`;
        bgHeart.appendChild(heart1);

        const heart2 = document.createElement('div');
        heart2.className = 'heart';
        heart2.style.width = `${r_size - 10}px`;
        heart2.style.height = `${r_size - 10}px`;
        heart2.style.left = `${r_left + r_num}%`;
        heart2.style.background = `rgba(255, ${r_bg - 25}, ${r_bg + 25}, 1)`;
        heart2.style.animation = `love ${r_time + 5}s ease`;
        bgHeart.appendChild(heart2);

        document.querySelectorAll('.heart').forEach((heart) => {
          const top = parseFloat(getComputedStyle(heart).top);
          const width = parseFloat(getComputedStyle(heart).width);
          if (top <= -100 || width >= 150) {
            heart.remove();
          }
        });
      }
    }, 500);

    // loadHeaderPlugin();

    return () => {
      clearInterval(loveAnimation);
    };
  }, []);

  return <div className="bg_heart" id="header-plugin"></div>;
};

export default HeartAnimation;
