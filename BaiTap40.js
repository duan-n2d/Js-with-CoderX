// callback la 1 function dc xem nhu bien dau vao

function callbackFn(){
    console.log('hello world');
}

function mySetTimeout(cb, time){
    console.log('after ' + time + ' milliseconds');
    cb();

}

mySetTimeout(callbackFn, 500);