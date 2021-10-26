
window.onload = function() {
        
          var lastTouchEnd = 0;
          document.addEventListener('touchstart', function(event) {
              if (event.touches.length > 1) {
                  event.preventDefault();
              }
          });
          document.addEventListener('touchend', function(event) {
              var now = (new Date()).getTime();
              if (now - lastTouchEnd <= 300) {
                  event.preventDefault();
              }
              lastTouchEnd = now;
          }, false);
