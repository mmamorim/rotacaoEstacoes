

function rodar(id) {
  anime({
    targets: '#'+id,
    rotate: {
      value: '+=60',
      duration: 1800,
      easing: 'easeInOutSine'
    },
    duration: 800
  });
}
