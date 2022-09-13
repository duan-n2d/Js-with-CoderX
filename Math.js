var math = {
    add: function(a, b) 
    {
        return a + b;
    },
    mul: function(a, b)
    {
        return a * b;
    },
    sum: function(arr)
    {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
};
  
module.exports = math;