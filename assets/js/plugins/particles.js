particlesJS("particles-js", {"particles":{"number":{"value":96,"density":{"enable":true,"value_area":641.3648243462092}},"color":{"value":"#131fde"},"shape":{"type":"circle","stroke":{"width":2,"color":"#000000"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7776548495197786,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":112.2388442605866,"color":"#180808","opacity":0.7970391180485954,"width":1},"move":{"enable":true,"speed":4.810236182596568,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":2405.118091298284,"rotateY":561.194221302933}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":925.7680220235335,"line_linked":{"opacity":1}},"bubble":{"distance":133.99274002972194,"size":40,"duration":4.547632388887532,"opacity":0.06496617698410762,"speed":3},"repulse":{"distance":755.231807440251,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;