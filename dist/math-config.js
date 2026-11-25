// MathJax is loaded asynchronously; plain TeX remains readable if its CDN is unavailable.
window.MathJax={tex:{inlineMath:[['\\(','\\)']],displayMath:[['\\[','\\]']]},options:{skipHtmlTags:['script','noscript','style','textarea','pre','code']},startup:{typeset:false,ready(){MathJax.startup.defaultReady();window.dispatchEvent(new Event('mathjax-ready'))}}};
window.renderMath=function(){const node=document.getElementById('app');if(window.MathJax&&typeof MathJax.typesetPromise==='function'&&node)MathJax.typesetPromise([node]).catch(e=>console.warn('MathJax typesetting failed',e))};
window.addEventListener('mathjax-ready',()=>window.renderMath());
