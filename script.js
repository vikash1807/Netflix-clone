
function togglehide(){
    for(let i=1; i<6; i++){
        let a = document.getElementById(`ques${i}`);
        let b = document.getElementById(`answer${i}`);
        if(b.style.display=='none'){
            b.style.display='block';
        }
        else{
            b.style.display='none'; 
        }
    }
}
    // function togglehide(){
    //     let a = document.getElementById('ques1');
    //     let b = document.getElementById('answer1');
    //     if(b.style.display!='none'){
    //         b.style.display='none';
    //     }
    //     else{
    //         b.style.display='block';
    //     }
    // }