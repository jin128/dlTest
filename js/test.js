let a = function() {
  const bolb = new Blob(['hoge', { type: 'text/plain'});
  let aEl = document.createElement('a');
  aEl.href = window.URL.createdObjectURL(blob)
  
  aEl.download = 'test.txt';
  // aEl.setAttribute('download', 'test.txt')
  
  document.body.appebdChild(aEl);
  
  aEl.click()
  
  document.body.removeChild(aEl);
}

let b = function() {
  const bolb = new Blob(['hoge', { type: 'text/plain'});
  let aEl = document.createElement('a');
  aEl.href = window.URL.createdObjectURL(blob)
  
  //aEl.download = 'test.txt';
  aEl.setAttribute('download', 'test.txt')
  
  document.body.appebdChild(aEl);
  
  aEl.click()
  
  document.body.removeChild(aEl);
}
