    const S = document.body.style;

    function hex2rgb(hex) {
      return hex.slice(1).match(/.{2}/g).map(c => parseInt(c, 16));
    }

    function rgb2hex(rgb) {
      return `#${rgb.map(c => c.toString(16).padStart(2, '0')).join('')}`;
    }

    function setValue(v, i) {
      S.setProperty(`--c${i}`, document.querySelector(`output[for='c${i}']`).textContent = `rgb(${v.join(', ')})`);
    }

    function updatePalette(_e) {
      let i = +_e.id[1], v = hex2rgb(_e.value);
      setValue(v, i);
      document.getElementById(`c${i = 1 - i}`).value = rgb2hex(v = v.map(c => 255 - c));
      setValue(v, i);
    }

    addEventListener('input', e => {
      let _t = e.target;
      if (_t.type === 'color') {
        updatePalette(_t);
      } else if (_t.type === 'range') {
        S.setProperty(`--${_t.id}`, +_t.value);
      }
    });

    updatePalette(document.getElementById('c0'));