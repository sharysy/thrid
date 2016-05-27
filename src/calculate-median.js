function calculate_median(arr) {
    //请勿改动函数名
    var result;
    var k = parseInt(arr.length / 2);

    if (arr.length % 2 === 0) { //arr的个数为偶数个
        if (k % 2 === 0)    //第偶数个 数有偶数个
            result = (arr[k - 1] + arr[k + 1]) / 2;
        else                //第偶数个 数有奇数个
            result = arr[k];
    } else {                    //arr的个数为奇数个
        if (k % 2 === 0)    //第偶数个 数有偶数个
            result = (arr[k - 1] + arr[k + 1]) / 2;
        else                //第偶数个 数有奇数个
            result = arr[k];
    }
    return result;
}
module.exports = calculate_median;
