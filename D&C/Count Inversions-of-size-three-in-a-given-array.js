//Given an array arr[] of size n. Three elements arr[i], arr[j] and arr[k] form an inversion of size 3 if a[i] > a[j] >a[k] and i < j < k. Find total number of inversions of size 3.
//Example : 
 

// Input:  {8, 4, 2, 1}
// Output: 4
// The four inversions are (8,4,2), (8,4,1), (4,2,1) and (8,2,1).

// Input:  {9, 6, 4, 5, 8}
// Output:  2
// The two inversions are {9, 6, 4} and {9, 6, 5}

function getInvCount(arr, n)
    {
        let invcount = 0; // initialize result
          
        for (let i = 0 ; i < n - 1; i++)
        {
            // count all smaller elements on right of arr[i]
            let small = 0;
            for (let j = i + 1; j < n; j++)
                if (arr[i] > arr[j])
                    small++;
                      
            // count all greater elements on left of arr[i]
            let great = 0;
            for (let j = i - 1; j >= 0; j--)
                    if (arr[i] < arr[j])
                        great++;
                      
            // update inversion count by adding all inversions
            // that have arr[i] as middle of three elements
            invcount += great*small;
        }
        return invcount;
    }
     
    // driver program to test above function
    let arr=[8, 4, 2, 1];
    let n = arr.length;
    document.write("Inversion count : " +getInvCount(arr, n));
    