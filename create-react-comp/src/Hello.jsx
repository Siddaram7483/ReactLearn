function Hello(){
  let myName ='siddaramKusur';
  let mssgNo = 456;
  let fullName = () =>{
    return 'siddaram mahadev kusur';
  }
  return <p>
    this is sidd the human. hiee my name is :{myName} <br></br>
    and my fullName is :{fullName()}<br></br>
    message number is:{mssgNo}
  </p>
}
export default Hello;