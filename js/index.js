const doContentBlock =(el)=>{
    console.log(el);
    var tmp = document.getElementById("mainText");
    tmp.textContent = el;
}


const minMaxObj = ()=>{
    obj={

        a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
        a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
        a2:{aa:[9,-4], bb:1, cc :{aaa:-1,bbb:8}},
        a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
        a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
    };
    var valuesObj = Object.values(obj);
    let value = []
    for(let i=0;i<valuesObj.length;i++){
        const keys = Object.keys(valuesObj[i]);
        for(let k=0;k<keys.length;k++){
            const tmp = valuesObj[i][keys[k]];
            if(Array.isArray(tmp)){
                for(let j=0;j<tmp.length;j++){
                    value.push(tmp[j]);
                }
            }
            else if(typeof(tmp) == 'number'){
                value.push(tmp);
            }
            else{
                const keysTmp = Object.keys(tmp)
                for(let j=0;j<keysTmp.length;j++){
                    value.push(tmp[keysTmp[j]]);
                }
            }
        }
    }

    value.sort(function (a,b){
        return a-b;
    });
    let min,max;
    min = max = 0;
    min = value[0];
    max = value[value.length-1];    


    console.log('min,max',min,max);

    const minMax = document.getElementById("MinMax");
    minMax.textContent = String(min) + " " + String(max);
}

$('.table ul:eq(0)').css('display', 'table-row').show(500, function(){
	$(this).css('display', 'table-row').next().show(500, arguments.callee);
});


minMaxObj();
