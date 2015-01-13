export default function() {
  this.transition(
    this.toRoute('transition.detail'),
    this.use('toLeft')
  );
  this.transition(
    this.fromRoute('transition.detail'),
    this.use('toRight')
  );

  this.transition(
    this.hasClass('magical'),
    this.use('crossFade')
  );

}
