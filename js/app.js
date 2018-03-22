// 1. create random board
const $board = $('.board');
const boxes = [];
$board.children().each(function () {
  boxes.push(...$(this).children());
});
const buzzwords = [ 'NEED ONE MORE', 'synergies', 'collaborate', 'shift left', 'ping me', 'low hanging fruit', 'alignment', 'best practice', 'bandwidth', 'transparency', 'leadership', 'piggyback', 'take this offline', 'win-win', 'due diligence', 'drill down', 'manage expectations', 'engagement', 'on/off the radar', 'results driven', 'fail fast', 'incentivize', 'TTUS', 'streamline'];
boxes.splice(12, 1);

const getRandomBox = () => Math.floor(Math.random() * boxes.length);

for (let i = 0; i < 24; i++) {
  const box = getRandomBox();
  boxes[box].textContent = buzzwords.pop();
  boxes.splice(box, 1);
}

// Listen for clicks and add class
$('tbody').click(function (e) {
  if ($(e.target).hasClass('box-filled')) $(e.target).removeClass('box-filled');
  else $(e.target).addClass('box-filled');
});
