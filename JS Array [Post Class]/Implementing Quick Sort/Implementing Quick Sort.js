// You need to return the sorted array
// arr: input array
// start: starting index of array
// end: end index of array
function quickSort(arr, start, end)
 {
     //Your code here
     const pivot = partition(arr, start, end);
     if (start < pivot - 1) quickSort(arr, start, pivot - 1);
     if (pivot < end) quickSort(arr, pivot, end);
     return arr;       
 }
function partition(array, left, right) {
     const pivot = array[Math.floor((right + left) / 2)];
     while (left <= right) {
          while (array[left] < pivot) left++;
          while (array[right] > pivot) right--;
          if (left <= right) {
               [array[left], array[right]] = [array[right], array[left]];
               left++;
               right--;
          }
     }
     return left;
}
