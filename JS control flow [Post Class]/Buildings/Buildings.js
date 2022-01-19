function numberOfRoofs(arr)
  {
     // Your code here  
	 let count = 1;
	 let max = arr[0];
	 for(let i = 1; i < arr.length; i++){
		 if(arr[i] > max){
			 count++;
			 max = arr[i];
		 }
	 }
	 return count;
  }
