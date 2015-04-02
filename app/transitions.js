export default function() {

  this.transition(
    this.toRoute('Hello'),
    this.use('toLeft')
  );


  this.transition(
    this.toRoute('Later'),
    this.use('toRight')
  );

}
