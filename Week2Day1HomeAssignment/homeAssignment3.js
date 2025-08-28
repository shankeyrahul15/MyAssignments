function intersection(arr1, arr2){
    let arr3=[]
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                arr2.splice(j,1)
            }
        }
    }
    arr3=arr1.concat(arr2)
    console.log(arr3)
}

intersection(['H','I','N','D','I'], ['T','E','L','G','U'])
intersection(['T','A','M','I','L'], ['T','A','M','I','L'])
intersection(['E','N','G','L','I','S','H'], ['T','A','M','I','L'])